const { test, expert, expect } = require(`@playwright/test`)

test(`Handling alerts`, async ({ page }) => {

    await page.goto(`https://demoqa.com/alerts`)

    // Case 1: Simple alert handlers
    // page.on('dialog', async dialog => {
    //     console.log(`Simple Alert Message: ${dialog.message()}`);
    //     await dialog.accept();
    // });

    // await page.locator(`//button[@id='alertButton']`).click()
    // await page.waitForTimeout(2000)

    // Case 2: Confirm Alert 
    // page.on('dialog', async dialog => {
    //     console.log(`Confirm Alert Message: ${dialog.message()}`);
    //     await dialog.dismiss();
    // });

    // // Confirm alert handlers
    // await page.locator(`//button[@id='confirmButton']`).click()

    // // Assert the alert message
    // expect(await page.locator(`//span[@id='confirmResult']`)).toHaveText(`You selected Cancel`)

    // Case 3: Prompt Alert 
    // Prompt alert handlers

    // await page.goto(`https://testautomationpractice.blogspot.com/`)

    page.on('dialog', async dialog => {
    
    expect(dialog.type()).toContain("prompt");
    console.log(`Prompt message = `+await dialog.message());

    await dialog.accept(`Hello World`);
  });

    // Click on prompt click me button
    await page.locator(`//button[@id='promtButton']`).click()
    expect (await page.locator(`#promptResult`)).toHaveText(`You entered Hello World`)
    
    await page.waitForTimeout(2000)

    // Close browser
    await page.close();

})