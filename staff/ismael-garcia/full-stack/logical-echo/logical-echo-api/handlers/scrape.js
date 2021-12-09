const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch();
        
        const page = await browser.newPage();
        
        await page.goto('https://www.zara.com/es/');
        //   await page.screnoenshot({ path: 'example.png' });

        await browser.close();
    } catch (error) {
        console.error(error)
    }
})();