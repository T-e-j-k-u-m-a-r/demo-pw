const {test, expect} = require(`@playwright/test`)

test(`Handling disabled radio buttons or checkboxes`, async({page}) =>{


    await page.goto(`https://qa-automation-practice.netlify.app/radiobuttons.html`)

    expect(await page.locator(`input[id="radio-button3"]`).isChecked()).toBeTruthy();

    const value = await page.locator(`input[id="radio-button3"]`).isChecked();
    console.log(value)

    if(value){
        await page.locator(`#radio-button1`).click();
    }
    
    // Assert the disabled element 
    expect(await page.locator(`#radio-button4`)).toHaveAttribute(`disabled`) 

    // await page.waitForTimeout(5000)

    await page.close()


})