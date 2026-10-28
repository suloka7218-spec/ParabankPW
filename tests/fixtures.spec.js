import {test} from "@playwright/test";

//To open the Url 
// test("fixturs",async({page})=>{
// await page.goto("https://www.amazon.in/")
// })

//creating page from scrach using browser to interact with different tabs
test("fixturs",async({browserName,browser})=>{
    console.log(browserName);//to print the browser name
    
let context=await browser.newContext()
let page=await context.newPage()
await page.goto("https://www.amazon.in/")
})
