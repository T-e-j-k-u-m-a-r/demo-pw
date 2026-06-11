import { test, expect } from "@playwright/test";

test.only(`GET Call`, async ({request}) => {

    const response = await request.get(`https://gorest.co.in/public/v2/users`)
    const responseBody = await response.json();

    // console.log(responseBody)
    expect(responseBody.length).toBe(10)
    expect(Array.isArray(responseBody)).toBeTruthy();

    const firstObj = responseBody[0];

    console.log(`id = `+firstObj.id)
    console.log(`name = `+firstObj.name)
    console.log(`email = `+firstObj.email)
    console.log(`gender = `+firstObj.gender)
    console.log(`status = `+firstObj.status)

    // Assertions
    expect(await response.status()).toBe(200)
    expect(await response.statusText()).toBe(`OK`)

})

test(`POST Call`, async ({request}) => {


})

test(`PUT Call`, async ({request}) => {


})


test(`DELETE Call`, async ({request}) => {


})