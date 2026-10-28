import {test} from "@playwright/test"
test("custom waits",async ({page})=>{
 await page.goto("https://www.amazon.in/")
 //complete page to be loaded
 await page.waitForFunction(()=>{return document.readyState==='complete'})
 await page.locator("input#twotabsearchtextbox").fill('HP laptop')




//  await page.locator("input#twotabsearchtextbox").fill("HP Laptop")
//  await page.waitForFunction(()=>{let ele=document.querySelectorAll('.s-suggestion-container')
//     return ele.length>2
//  })//waitForFunction() this method works only for css selector
//  let allAutoSugg=await page.locator("//div[@class='s-suggestion-container']").allTextContents()
//  console.log(allAutoSugg);
 
})