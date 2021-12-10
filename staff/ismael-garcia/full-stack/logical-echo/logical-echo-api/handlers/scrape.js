const puppeteer = require('puppeteer');
const { registerItem } = require('./register-item');

(async () => {
    try {
        const browser = await puppeteer.launch()
        
        const page = await browser.newPage()
        
        await page.goto('https://www.zara.com/es/es/search')
        
        await page.type('input', 'ecológico')
        await page.keyboard.press('Enter')
        
        // const items = await page.$$('img')
        // items.forEach(async elem => {
        const testItem = await page.$('img');
        // (async () => {
            await Promise.all([
                page.waitForNavigation(),
                page.click(testItem)
            ])

            const urlParts = window.location.pathname.split('=')
            const id = `zara${urlParts[1]}`

            const name = await page.$eval('.product-detail-info__name', (el) => el.innerText)

            const images = await page.$$eval('.product-detail-images__image-wrapper > img', (imgs) => imgs.map((img) => img.src))

            const price = await page.$eval('.price__amount-current', (el) => el.innerText)

            const url = window.location.href

            const description = await page.$eval('.product-detail-description > p', (el) => el.innerText)

            const colorString = await page.$eval('.product-detail-selected-color product-detail-info__color', (el) => el.innerText.split('|')[0])
            const color = colorString.trim()

            const item = { id, name, images, price, url, description, color }

            await registerItem(item)
        // })() 
        
        await browser.close()
    } catch (error) {
        console.error(error)
    }
})();