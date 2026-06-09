const { test, expect } = require(`@playwright/test`)

test(`Handling Dropdowns`, async ({page}) =>{

    await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`)

    await page.waitForSelector(`select#dropdown-class-example`)

    // Print all dropdown values
    const dropdown_values = await page.$$(`select#dropdown-class-example option`)

    // Print count of all drop value
    console.log(`Total dropdown values = ${dropdown_values.length}`)

    // Click on specific dropdown valus using looping 
    for (const ele of dropdown_values) {
        
        const val = await ele.textContent();

        console.log(val)

        if(val === 'Option1'){
            await page.locator(`select#dropdown-class-example`).selectOption(val)
        }

    }

    await page.waitForTimeout(20000)

    await page.close();

})