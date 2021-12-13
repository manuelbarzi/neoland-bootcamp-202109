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

    await page.goto('https://www.zara.com/es/es/search?searchTerm=join%20life&section=WOMAN')

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
      await page.goto(href);

      return await page.evaluate(() => {
        const urlParts = window.location.href.split("=")
        const id = `zara${urlParts[1]}`

        const name = document.querySelector(".product-detail-info__name").innerText

        const imgs = Array.from(document.querySelectorAll(".product-detail-images__image-wrapper > * img"))
        const images = imgs.map(image => image.src)

        const price = document.querySelector(".price__amount-current").innerText

        const url = window.location.href

        const description = document.querySelector(".product-detail-description > * p").innerText

        const onlyOneColor = document.querySelector(".product-detail-selected-color.product-detail-info__color").innerText.split("|")[0].trim().slice(6)
        const colorSpans = Array.from(document.querySelectorAll(".product-detail-color-selector__color-area > span"))
        const colorSelection = colorSpans.map(span => span.innerText)
        const colors = onlyOneColor ? [onlyOneColor] : colorSelection

        const item = { id, name, images, price, url, description, colors }

        return item
      });
    });

    const items = await Promise.all(promises);

    await writeFile("items-zara.json", JSON.stringify(items));

    await browser.close();

    console.log("end scraping");
  } catch (error) {
    console.error(error);
  }
})();
