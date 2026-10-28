import {test,expect} from "@playwright/test"
test("autoSuggest",async ({page})=>{
await page.goto("https://www.amazon.in/")
await page.locator("input#twotabsearchtextbox").fill("mobile")
//await page.waitForTimeout(2000)
//await page.waitForSelector("(//div[@role='row'])[1]")
//using press()
await page.waitForSelector("//div[@role='row']")
await page.keyboard.press("ArrowDown")
await page.keyboard.press("Enter")
await page.waitForTimeout(2000)






// let allSugg=await page.locator("//div[@role='row']").all()
// for(let option of allSugg)
// {
//     let text=await option.textContent()
//     if(text.includes("mobile phone under 20000")){
//         option.click()
//         break;
//     }
// }
// await page.waitForTimeout(3000)



})