import {test} from "@playwright/test"
test("hard coded wait",async ({page})=>{
await page.goto("https://practicetestautomation.com/practice-test-login/")
await page.waitForTimeout(2000)
await page.getByText("Username",{exact:true}).fill("student")
await page.waitForTimeout(2000)
await page.getByLabel("password").fill("Password123")
await page.waitForTimeout(2000)
await page.locator("button#submit").click()
await page.waitForTimeout(4000)
})

test.only("hard coded wait1",async ({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("input#twotabsearchtextbox").fill("shoes")
    await page.waitForTimeout(2000)
    let a=await page.locator("//div[@role='row']").allTextContents()//returns empty array without wait statement
    console.log(a);
    
})