import {test,expect} from "@playwright/test"
test("dropdowns",async ({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    await page.waitForTimeout(2000)
    //selectOption()
    await page.locator("//select[@id='select3']").selectOption({value:"India"})//sel by value
    await page.locator("//select[@id='select3']").selectOption({label:"Poland"})//sel by lable(visible text)
    await page.waitForTimeout(2000)
    await page.locator("//select[@id='select3']").selectOption({index:6})//sel by index
    await page.waitForTimeout(2000)
    await page.locator("//select[@id='select3']").selectOption("Canada")

    //multiple selection
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    await page.waitForTimeout(2000)
    //multi select using values
    //await page.locator("#select-multiple-native").selectOption([{value:"Mens Casual Premium Slim Fit T-Shirts "},{value:"Solid Gold Petite Micropave "},{value:"Opna Women's Short Sleeve Moisture"}])
    await page.waitForTimeout(2000)
    //multi select using index
    await page.locator("#select-multiple-native").selectOption([{index:2},{index:4},{index:7}])
    await page.locator("//button[text()='Add']").click()
    await page.waitForTimeout(4000)
})