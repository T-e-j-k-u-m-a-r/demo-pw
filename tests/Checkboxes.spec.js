const {test, expect} = require(`@playwright/test`)

test(`Handling checkboxes`, async ({page}) => {

    await page.goto(`https://the-internet.herokuapp.com/checkboxes`)
    await page.waitForSelector(`div[class='example'] h3`)

    const isChecked = expect(await page.locator(`form#checkboxes input:last-child`).isChecked())
    console.log(`isChecked = `+isChecked)

    if (isChecked !== null) {
        await page.locator(`form#checkboxes input:first-child`).click();
    }

    await page.waitForTimeout(5000)

    await page.close()
})