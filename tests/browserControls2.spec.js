import{chromium, test, webkit} from "@playwright/test";
//To get the current url
// test("browser controls",async({page})=>{
//     await page.goto("https://www.google.com")

//     console.log(await page.url());

//     await page.goto("https://www.amazon.in/")
//     console.log(await page.url());
//})

//To get the cookies
// test("browser controls",async({browser})=>{
//     let context=await browser.newContext()
//     let page=await context.newPage()
//     console.log(await context.cookies());//returns empty array

//     await page.goto("https://www.google.com")
//     console.log(await context.cookies());//returns cookies inside an array
// })

//chromium.launch(), uses only cromium instance for all the browser
// test("instance",async()=>{
//     let browser=await chromium.launch()
//     let context=await browser.newContext()
//     let page=await context.newPage()
//     await page.goto("https://www.google.com")
// })

//page.screenshot
test("ss",async({page})=>{
    await page.goto("https://www.google.com")
    await page.screenshot({path:"screenshot/ss.png"})
    let time=new Date().getTime()
    await page.screenshot({path:`screenshot/-page-${time}.png`})
})
    