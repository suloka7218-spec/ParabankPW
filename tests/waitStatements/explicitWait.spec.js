import {test} from "@playwright/test"
test.only("element waits",async ({page})=>{
    await page.goto("https://www.amazon.in/")
    //await page.locator("input#twotabsearchtextbox").waitFor({state:'visible',timeout:5000})
    await page.waitForSelector("input#twotabsearchtextbox",{state:'visible'})
    await page.locator("input#twotabsearchtextbox").fill("shoes")
    await page.locator("//div[@role='row']",{hasText:" for woman"}).waitFor()
    let a=await page.locator("//div[@role='row']").allTextContents()//returns empty array without wait statement
    console.log(a);
    
})