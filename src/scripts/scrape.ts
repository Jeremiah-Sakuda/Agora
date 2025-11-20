import puppeteer from 'puppeteer';

async function scrapeEvents() {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
        headless: false, // Set to true for production
        defaultViewport: null,
    });

    const page = await browser.newPage();

    try {
        console.log('Navigating to TerrierCentral...');
        await page.goto('https://terriercentral.bu.edu/events', {
            waitUntil: 'networkidle2',
        });

        console.log('Page loaded. Extracting events...');

        // TODO: Implement extraction logic here
        const title = await page.title();
        console.log(`Page Title: ${title}`);

    } catch (error) {
        console.error('Error scraping events:', error);
    } finally {
        await browser.close();
    }
}

scrapeEvents();
