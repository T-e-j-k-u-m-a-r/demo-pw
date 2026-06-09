const {test,expect} = require(`@playwright/test`)

test(`Handling checkbox and radiobuttons`, async ({page}) => {

    await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`)

    // Case 1: Checkbox
    await page.locator(`div#checkbox-example`)

    // Count total checkbox
    const cbs = await page.$$(`//div[@id='checkbox-example']//fieldset//label//input`)

    console.log(`Total checkbox = ${cbs.length}`)

    // Print checkbox names
    for (const cb of cbs) {

        const value = await cb.textContent();
        console.log(value)

    }


    // Case 2: Radio button
    const rds = await page.$$(`div#radio-btn-example label`);
    const totalRadioCount = rds.length;

    console.log(`Total radio buttons = ${totalRadioCount}`)


})