const { test, expect } = require(`@playwright/test`)

test(`Handling Dropdowns`, async ({page}) =>{

    await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`)

    await page.waitForSelector(`select#dropdown-class-example`)

    await page.locator(`select#dropdown-class-example`).selectOption(`Option1`)

    // Print all dropdown values
    const dropdown_values = await page.$$(`select#dropdown-class-example option`)

    // Print count of all drop value
    console.log(`Total dropdown values = ${dropdown_values.length}`)

    // Click on specific dropdown valus using looping 
    for (const ele of dropdown_values) {
        
        console.log(await ele.textContent())

    }


    await page.close();

})