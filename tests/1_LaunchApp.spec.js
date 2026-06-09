// Import statement
const { test, expect } = require(`@playwright/test`)

// Test block
test(`Launch app`, async ({ page }) => {

    // launch app
    await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`)

    // print the page title
    const pageTitle = await page.title();

    console.log(`Application title : ${pageTitle}`)

    // verify the display of elements on the navigated screen 
    expect(await page.url()).toEqual(`https://rahulshettyacademy.com/AutomationPractice/`)

    expect(await page.url()).toContain(`https://rahulshettyacademy.com/`)

    // Launch another site
    await page.goto(`https://testautomationpractice.blogspot.com/`)

    await page.goBack()

    await page.close()

})