const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch()
        
        const page = await browser.newPage()
        
        await page.goto('https://www.zara.com/es/es/search')
        
        await page.type('#input', 'ecológico')
        await page.keyboard.press('Enter')
        
        const [response] = await Promise.all([
            page.waitForNavigation(),
            page.click('.media-image__image media__wrapper--media')
          ]);

        
        
        /*
        hacer click en cada uno de los resultados
        
        scrape nombre, descripción, color, precio e imágenes, y sacar la url
            hacer de ello un objeto
            guardar el objeto como documento en la colección items de mongo
        */

        await browser.close()
    } catch (error) {
        console.error(error)
    }
})();