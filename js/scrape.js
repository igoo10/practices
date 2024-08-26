const puppeteer = require('puppeteer');

(async () => {
    // Launch a new browser instance
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Go to the Crunchbase page
    await page.goto('https://www.crunchbase.com/discover/saved/undefined/6c50bcd6-726e-4558-9572-71826772de8b?pageId=3_a_5119b35f-5573-f507-8e16-a2c208b42d0f', {
        waitUntil: 'networkidle2'
    });

    // Extract the desired data from the page
    const data = await page.evaluate(() => {
        const elements = document.querySelectorAll('.component--field-formatter.field-type-text_short');
        return Array.from(elements).map(el => el.innerText.trim());
    });

    console.log(data);

    // Close the browser
    await browser.close();
})();
