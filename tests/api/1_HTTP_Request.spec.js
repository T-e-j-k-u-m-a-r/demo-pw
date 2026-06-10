const { test, expect } = require('@playwright/test')

test.skip('GET', async ({ request }) => {
    const response = await request.get('https://gorest.co.in/public/v2/users/8499453')

    const responseBody = await response.json()
    console.log(responseBody)

    expect(await response.status()).toBe(200)
    expect(await response.statusText()).toBe('OK')
})

test.only(`POST`, async ({ request }) => {

    const payload = { "name": "TK002", "email": "tk002@example.com", "gender": "male", "status": "active" }
    const request_headers = { "Authorization": "Bearer ea6186db6a3b025e73f6093fcf989a99a0fb757a6cabb247d1c4d0a68b5f2987" }

    const response = await request.post(`https://gorest.co.in/public/v2/users/`, {
        data: payload,
        headers: request_headers
    })

    const responseBody = await response.json();
    // console.log(responseBody)
    // console.log(`id = ` + responseBody.id)
    // console.log(response.status())
    // console.log(response.statusText())

    expect(await response.status()).toBe(201)
    expect(await response.statusText()).toBe(`Created`)

})