import {test,expect} from "@playwright/test"
test("multiTabs",async ({browser})=>{
    //creating multiple tabs manually
     let context=await browser.newContext()
     let page1=await context.newPage()
      //await page1.goto("https://www.flipkart.com/")
    //  let page2=await context.newPage()
    //  await page2.goto("https://www.amazon.in/")

     //multiple tabs during browser interaction
    await page1.goto("https://www.redbus.in/")
    let [page3]=await Promise.all([page1.waitForEvent('popup'),
    page1.click("//a[text()='Contact us']")])
    await page3.click("//button[@class='navOption___a31cf9']")
    await page3.waitForTimeout(3000)

   

})