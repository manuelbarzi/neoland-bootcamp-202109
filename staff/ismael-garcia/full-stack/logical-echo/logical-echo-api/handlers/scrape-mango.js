const puppeteer = require("puppeteer");
// const { registerItem } = require('./register-item');
const { writeFile } = require("fs").promises;

(async () => {
    try {
        console.log("start scraping")

        const browser = await puppeteer.launch()

        const page = await browser.newPage()

        // page.setUserAgent(
        //   "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36"
        // );

        await page.goto('https://shop.mango.com/es/search?kw=committed%20mujer&brand=teen&origin=autocompletado')

        const hrefs = await page.evaluate(() => {
            const anchors = Array.from(document.querySelectorAll('._6vE5I'))

            const mappedHrefs = anchors.map((anchor) => anchor.href)

            return mappedHrefs
        })

        const promises = hrefs.map(async (href) => {
            await page.goto(href)

            return await page.evaluate(() => {
                const urlParts = window.location.href.split("=")
                const id = `mango${urlParts[1]}`

                const name = document.querySelector('.product-name').innerText

                const imgs = Array.from(document.querySelectorAll('.image-btn > img'))
                const images = imgs.map(image => image.src)

                const price = document.querySelector('.product-sale').innerText

                const url = window.location.href

                const description = document.querySelector('.product-info-text').innerText

                const colorSpans = Array.from(document.querySelectorAll('.color-container > img'))
                const colors = colorSpans.map(span => span.alt)

                const item = { id, name, images, price, url, description, colors }

                return item
            })
        })

        const items = await Promise.all(promises)

        await writeFile("items-mango.json", JSON.stringify(items))

        await browser.close()

        console.log("end scraping")
    } catch (error) {
        console.error(error)
    }
})()
