const { test, expect } = require(`@playwright/test`)

test(`Login Test`, async ({page}) =>{

    await page.goto(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)

    // Explicit wait in login page
    await page.waitForSelector(`input[placeholder='Username']`);

    await page.locator(`input[placeholder='Username']`).fill(`Admin`)
    await page.locator(`input[placeholder='Password']`).fill(`admin123`)
    await page.locator(`button[type='submit']`).click()

    // Print the page title

    const pageTitle = await page.url();
    console.log(`App title - Post login: ${pageTitle}`)

    // Verify the login success from url level
    await expect(page.url()).not.toContain(`/auth/login`)
    
    // Verify the login success from home page element assertion 
    await page.locator(`//h6[normalize-space()='Dashboard']`).isVisible()

    // Logout
    await page.locator(`//p[@class='oxd-userdropdown-name']`).click()
    await page.locator(`//a[normalize-space()='Logout']`).click()

    // Validate logout is successfull 
    await expect(page.url()).toContain(`/auth/login`)

    await page.close();

})