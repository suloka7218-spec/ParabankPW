import {test,expect} from "@playwright/test"
test("radio button",async ({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    await page.locator("//input[@value='Upi']")//not click/check because need to check for assertion fail
    await page.waitForTimeout(2000)
    //asserting
    //await expect(await page.locator("//input[@value='Upi']")).toBeChecked()
    await expect(await page.locator("//input[@value='Upi']").isChecked()).toBeFalsy()
})

test.only("check box",async ({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.locator("//input[@id='domain_b']").check()
    await page.waitForTimeout(2000)
    //verify checked or not
    await expect(await page.locator("//input[@id='domain_b']")).toBeChecked()
    await page.locator("//input[@id='domain_b']").uncheck()
    //await expect(await page.locator("//input[@id='domain_b']")).toBeChecked()
    //verify uncheked
    await expect(await page.locator("//input[@id='domain_b']").isChecked()).toBeFalsy()
    await page.waitForTimeout(2000)
})