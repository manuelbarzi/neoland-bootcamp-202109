const puppeteer = require("puppeteer");
// const { registerItem } = require('./register-item');
const { writeFile } = require("fs").promises;
const logger = require("../utils/my-logger");

logger.debug("start scraping");

puppeteer
  .launch()
  .then((browser) =>
    browser
      .newPage()
      .then((page) => {
        page.setUserAgent(
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36"
        );

        return page
          .goto(
            "https://www2.hm.com/es_es/search-results.html?q=conscious+mujer"
          )
          .then(() => page.waitForSelector(".item-link"))
          .then(() =>
            page.evaluate(() => {
              const anchors = Array.from(
                document.querySelectorAll(".item-link")
              );

              const mappedHrefs = anchors.map((anchor) => anchor.href);

              return mappedHrefs;
            })
          )
          .then((hrefs) => {
            const promises = hrefs.slice(0, 3).map((href) => {
              return browser.newPage().then((page) => {
                page.setUserAgent(
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36"
                );

                return page.goto(href).then(() =>
                  page
                    .evaluate(() => {
                      const urlParts = window.location.href.split("=");
                      const id = `hm${urlParts[1]}`;

                      const name = document.querySelector(
                        ".primary.product-item-headline"
                      ).innerText;

                      const imgs = Array.from(
                        document.querySelectorAll(
                          ".product-detail-thumbnail-image"
                        )
                      );
                      const images = imgs.map((image) => image.src);

                      const price = document.querySelector(
                        ".ProductPrice-module--productItemPrice__2i2Hc > span"
                      ).innerText;

                      const url = window.location.href;

                      const description = document.querySelector(
                        ".pdp-description-text"
                      ).innerText;

                      const colorSpans = Array.from(
                        document.querySelectorAll(".filter-option.miniature")
                      );
                      const colors = colorSpans.map((span) => span.title);

                      const item = {
                        id,
                        name,
                        images,
                        price,
                        url,
                        description,
                        colors,
                      };

                      return item;
                    })
                    .catch((error) => logger.error(error))
                );
              });
            });

            return Promise.all(promises);
          })
          .then((items) => writeFile("items-hm.json", JSON.stringify(items)));
      })
      .then(() => {
        logger.debug("scraping end");

        return browser.close();
      })
  )
  .catch((error) => logger.error(error));

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
