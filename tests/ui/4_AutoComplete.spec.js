const { test, expect } = require("@playwright/test")
const { count } = require("node:console")

test(`Handling auto completion `, async ({ page }) => {

    await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`)

    await page.locator(`//input[@id='autocomplete']`).fill(`India`)

    await page.waitForSelector(`//ul[@id="ui-id-1"]//li//div`)

    const countries = await page.$$(`//ul[@id="ui-id-1"]//li//div`)

    console.log(`Country length = ${countries.length}`)

    for (let i = 1; i <= countries.length; i++) {

        if (await countries[i].textContent() == 'India') {

            const name = await countries[i].textContent();
            console.log(`Country name = ` + name)

            let india_path = `//li[@class="ui-menu-item"]//div[text()="`+name+`"]`
            console.log(india_path);

            await page.locator(india_path).click();
            break;

        }

    }

    // await page.waitForTimeout(5000)

    await page.close();

})
