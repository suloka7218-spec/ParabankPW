import{test} from "@playwright/test";
test("waitFor",async({page})=>{
    //waitFor()
await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
await page.locator("//input[@id='domain_a']").waitFor({state:'visible',timeout:3000})
})