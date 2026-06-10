const { test, expect } = require(`@playwright/test`)

test(`Handling Alerts`, async ({ page }) => {

    await page.goto(`https://the-internet.herokuapp.com/javascript_alerts`)
    expect(await page.locator(`div.example h3`)).toHaveText(`JavaScript Alerts`)

    // // Case 1: Simple Alert: ✅
    // // Alert Handler
    // page.on('dialog', async dialog => {
    //     console.log(dialog.message());
    //     await dialog.accept();
    // });

    // await page.locator(`button[onclick='jsAlert()']`).click()

    // // Assert confirmation message
    // expect(await page.locator(`#result`)).toHaveText(`You successfully clicked an alert`)

    // Case 2: Confirm Alert: ✅
    // Alert Handler
    // page.on('dialog', async dialog => {
    //     console.log(dialog.message());
    //     await dialog.dismiss();
    // });

    // await page.locator(`button[onclick='jsConfirm()']`).click()

    // // Assertion 
    // // expect(await page.locator(`#result`)).toHaveText(`You clicked: Ok`)
    // const confirmation_message = await page.locator(`#result`).textContent()
    // console.log(`Confirmation message: `+confirmation_message)

    // expect(await page.locator(`#result`)).toHaveText(`You clicked: Cancel`)

    // Case 3: Prompt Alert: ✅
    // Alert Handler

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.dismiss(`Hello World`);
    });

    await page.locator(`button[onclick='jsPrompt()']`).click();

    // expect(await page.locator(`#result`)).toHaveText(`You entered: Hello World`)
    expect(await page.locator(`#result`)).toHaveText(`You entered: null`)

    const confirmation_message = await page.locator(`#result`).textContent()
    console.log(`Confirmation message: `+confirmation_message)

    await page.waitForTimeout(2000)
    await page.close()

})