import {test} from "@playwright/test"
test.use({actionTimeout:5000})//global timeout applicable for entire script
test("check",async ({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    await page.locator("//input[@value='Upia']").check();
})
