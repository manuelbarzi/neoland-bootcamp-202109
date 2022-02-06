require('dotenv').config()
const { env: { MONGO_URL } } = process
const { mongoose } = require('logical-echo-data')
const puppeteer = require("puppeteer");
const registerItem = require('./register-item');
const logger = require("../logical-echo-api/utils/my-logger");


(async () => {
  try {
    logger.debug("start scraping");

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.setDefaultNavigationTimeout(0);

    page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36"
    );

    await page.goto(
      "https://www2.hm.com/es_es/search-results.html?q=conscious+mujer"
    );

    // await autoScroll(page)

    await page.waitForSelector(".item-link");

    const hrefs = await page.evaluate(() => {
        const anchors = Array.from(document.querySelectorAll(".item-link"));

        const mappedHrefs = anchors.map((anchor) => anchor.href);

        return mappedHrefs;
    });
    // const hrefs = await page.$$eval('.product-link.product-grid-product__link.link', links => links.map(a => a.href));

    const promises = hrefs.map(async (href) => {
      logger.debug(`scraping page ${href}`)

      const page = await browser.newPage();

      await page.setDefaultNavigationTimeout(0);

      page.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36"
      );

      await page.goto(href);

      // await autoScroll(page)

      try {
        const item = await page.evaluate(() => {
          const urlPart = window.location.href.slice(-15, -5)
          const item_id = `hm${urlPart}`

          const store = 'HM'

          const pattern = 'Woman'

          const name = document.querySelector(
            ".primary.product-item-headline"
          ).innerText;

          const imgs = Array.from(
            document.querySelectorAll(".product-detail-thumbnail-image")
          );
          const images = imgs.map((image) => image.src);

          const price = document.querySelector(
            ".ProductPrice-module--productItemPrice__2i2Hc span"
          ).innerText;

          const url = window.location.href;

          const description = document.querySelector(".pdp-description-text").innerText;

          const colorSpans = Array.from(
            document.querySelectorAll(".filter-option.miniature")
          );
          const colors = colorSpans.map(span => span.title);

          const item = { item_id, store, pattern, name, images, price, url, description, colors };

          return item;
        });

        logger.debug(`scraped item ${JSON.stringify(item)}`)

        return item
      } catch (error) {
        logger.error(error);
      }
    });

    const items = await Promise.all(promises);

    const filteredItems = items.filter(item => true)

    logger.debug(`scraped item ${JSON.stringify(items)}`)

    await browser.close();

    await mongoose.connect(MONGO_URL)

    const creates = filteredItems.map(async item => {
      return await registerItem(item)
    })

    await Promise.all(creates)

    mongoose.disconnect()

    logger.debug("end scraping");
  } catch (error) {
    logger.error(error);
  }
})();

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
