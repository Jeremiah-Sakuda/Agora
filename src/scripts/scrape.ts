import puppeteer from 'puppeteer';
import fs from 'fs';

interface Event {
    title: string;
    date: string;
    location: string;
    imageUrl: string | null;
    link: string;
}

async function scrapeEvents() {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    try {
        console.log('Navigating to TerrierCentral...');
        await page.goto('https://terriercentral.bu.edu/events', {
            waitUntil: 'networkidle2',
        });

        console.log('Page loaded. Handling pagination...');

        // Click "Load More" a few times to get more events
        let loadMoreVisible = true;
        let clicks = 0;
        const maxClicks = 3; // Limit for testing

        while (loadMoreVisible && clicks < maxClicks) {
            try {
                const loadMoreButton = await page.waitForSelector('button', { timeout: 2000 });
                // Find the specific button with text "Load More"
                const buttons = await page.$$('button');
                let found = false;
                for (const btn of buttons) {
                    const text = await page.evaluate(el => el.textContent, btn);
                    if (text?.includes('Load More')) {
                        await btn.click();
                        await new Promise(r => setTimeout(r, 2000)); // Wait for load
                        found = true;
                        clicks++;
                        console.log(`Clicked Load More (${clicks}/${maxClicks})`);
                        break;
                    }
                }
                if (!found) loadMoreVisible = false;
            } catch (e) {
                loadMoreVisible = false;
            }
        }

        console.log('Extracting events...');

        const events = await page.evaluate(() => {
            const eventCards = Array.from(document.querySelectorAll("a[href^='/event/']"));

            return eventCards.map(card => {
                const titleElement = card.querySelector('h3');
                const title = titleElement?.textContent?.trim() || 'Untitled';

                // Image is in a div with role='img' and style='background-image: url(...)'
                const imgDiv = card.querySelector("div[role='img']");
                let imageUrl = null;
                if (imgDiv) {
                    const style = imgDiv.getAttribute('style');
                    const match = style?.match(/url\("?(.+?)"?\)/);
                    if (match) imageUrl = match[1];
                }

                // Date and Location using aria-labels
                const dateElement = card.querySelector('div[aria-label^="happening on"]');
                const date = dateElement?.textContent?.trim() || '';

                const locationElement = card.querySelector('div[aria-label^="located at"]');
                const location = locationElement?.textContent?.trim() || '';

                return {
                    title,
                    date,
                    location,
                    imageUrl,
                    link: (card as HTMLAnchorElement).href
                };
            });
        });

        console.log(`Found ${events.length} events.`);

        if (events.length > 0) {
            const firstCardHtml = await page.evaluate(() => {
                const card = document.querySelector("a[href^='/event/']");
                return card ? card.innerHTML : 'No card found';
            });
            // We can't use fs inside evaluate (browser context), so we return the string and write it here
            return { events, firstCardHtml };
        }
        return { events, firstCardHtml: null };

    } catch (error) {
        console.error('Error scraping events:', error);
        return { events: [], firstCardHtml: null };
    } finally {
        await browser.close();
    }
}

scrapeEvents().then(({ events, firstCardHtml }) => {
    if (firstCardHtml) {
        fs.writeFileSync('debug.html', firstCardHtml, 'utf8');
    }

    // Save to JSON for UI development
    const dataDir = 'src/data';
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);
    }
    fs.writeFileSync(`${dataDir}/events.json`, JSON.stringify(events, null, 2), 'utf8');
    console.log(`Saved ${events.length} events to src/data/events.json`);
});
