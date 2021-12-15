const puppeteer = require("puppeteer");
// const { registerItem } = require('./register-item');
const { writeFile } = require("fs").promises;
const logger = require("../utils/my-logger");

(async () => {
  try {
    logger.debug("start scraping")

    const browser = await puppeteer.launch()

    const page = await browser.newPage()

    await page.setDefaultNavigationTimeout(0);

    page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36"
    );

    await page.goto('https://www.zara.com/es/es/search?searchTerm=join%20life&section=WOMAN')

    await page.waitForSelector(".product-link.product-grid-product__link.link")

    const hrefs = await page.evaluate(() => {
      const anchors = Array.from(
        document.querySelectorAll(
          ".product-link.product-grid-product__link.link"
        )
      );

      const mappedHrefs = anchors.map((anchor) => anchor.href);

      return mappedHrefs;
    });

    const promises = hrefs.map(async (href) => {
      logger.debug(`scraping page ${href}`)

      const page = await browser.newPage();

      await page.setDefaultNavigationTimeout(0);

      page.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36"
      );

      await page.goto(href);

      try {
        const item = await page.evaluate(() => {
          const urlPart = window.location.href.slice(-14, -5)
          const id = `zara${urlPart}`

          const name = document.querySelector(".product-detail-info__name").innerText

          const imgs = Array.from(document.querySelectorAll(".product-detail-images__image-wrapper > * img"))
          const images = imgs.map(image => image.src)

          const price = document.querySelector(".price__amount-current").innerText

          const url = window.location.href

          const description = document.querySelector(".product-detail-description > * p").innerText

          let onlyOneColor = document.querySelector(".product-detail-selected-color.product-detail-info__color")
          if (onlyOneColor)
            onlyOneColor = onlyOneColor.innerText.split("|")[0].trim().slice(6)

          let colorSelection = Array.from(document.querySelectorAll(".product-detail-color-selector__color-area > span"))
          if (colorSelection.length)
            colorSelection = colorSelection.map(span => span.innerText)

          const colors = onlyOneColor ? [onlyOneColor] : colorSelection

          const item = { id, name, images, price, url, description, colors }

          return item
        });

        logger.debug(`scraped item ${JSON.stringify(item)}`)

        return item
      } catch (error) {
        logger.error(error)
      }
    });

    const items = await Promise.all(promises);

    logger.debug(`scraped item ${JSON.stringify(items)}`)

    await writeFile("items-zara.json", JSON.stringify(items, null, 4));

    await browser.close();

    logger.debug("end scraping");
  } catch (error) {
    logger.error(error);
  }
})();
