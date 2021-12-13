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

        await page.goto('https://www2.hm.com/es_es/search-results.html?q=conscious+mujer')

        // await autoScroll(page)

        const hrefs = await page.evaluate(() => {
            const anchors = Array.from(document.querySelectorAll('.item-link'))

            const mappedHrefs = anchors.map((anchor) => anchor.href)

            return mappedHrefs
        })

        const promises = hrefs.map(async (href) => {
            await page.goto(href)

            // await autoScroll(page)

            return await page.evaluate(() => {
                const urlParts = window.location.href.split("=")
                const id = `hm${urlParts[1]}`

                const name = document.querySelector('.primary.product-item-headline').innerText

                const imgs = Array.from(document.querySelectorAll('.product-detail-thumbnail-image'))
                const images = imgs.map(image => image.src)

                const price = document.querySelector('.ProductPrice-module--productItemPrice__2i2Hc > span').innerText

                const url = window.location.href

                const description = document.querySelector('.pdp-description-text').innerText

                const colorSpans = Array.from(document.querySelectorAll('.filter-option.miniature'))
                const colors = colorSpans.map(span => span.title)

                const item = { id, name, images, price, url, description, colors }

                return item
            })
        })

        const items = await Promise.all(promises)

        await writeFile("items-hm.json", JSON.stringify(items))

        await browser.close()

        console.log("end scraping")
    } catch (error) {
        console.error(error)
    }
})()

// async function autoScroll(page) {
//     await page.evaluate(async () => {
//         await new Promise((resolve, reject) => {
//             var totalHeight = 0;
//             var distance = 100;
//             var timer = setInterval(() => {
//                 var scrollHeight = document.body.scrollHeight;
//                 window.scrollBy(0, distance);
//                 totalHeight += distance;

//                 if (totalHeight >= scrollHeight) {
//                     clearInterval(timer);
//                     resolve();
//                 }
//             }, 100);
//         });
//     });
// }
