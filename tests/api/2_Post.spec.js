const {test, expect} = require(`@playwright/test`)

test(`POST`,async ({request}) =>{
    
    const payload = { "name": "TKR2", "email": "tkr2@example.com", "gender": "male", "status": "active" }
    const request_headers = {"Authorization":"Bearer ea6186db6a3b025e73f6093fcf989a99a0fb757a6cabb247d1c4d0a68b5f2987"}

    const response = await request.post(`https://gorest.co.in/public/v2/users/`,{
        data: payload,
        headers: request_headers
    })

    const responseBody = await response.json();
    console.log(`id = `+responseBody.id)

    expect(await response.status()).toBe(201)
    expect(await response.statusText()).toBe(`Created`)

})