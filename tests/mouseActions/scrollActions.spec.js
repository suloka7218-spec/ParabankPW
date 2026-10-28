import {test} from "@playwright/test"
test("scroll actions",async ({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    // await page.waitForTimeout(2000)
    // //verticle scroll down
    // await page.mouse.wheel(0,1000)
    // await page.waitForTimeout(2000)
    // //verticle scroll up
    // await page.mouse.wheel(0,-1000)
    //  await page.waitForTimeout(2000)

    //  //horizontal scroll
    //  await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabHorizontal")
    //  await page.waitForTimeout(4000)
    //  await page.mouse.wheel(1000,1000)
    //  await page.waitForTimeout(2000)
    //  await page.mouse.wheel(-1000,0)
    //   await page.waitForTimeout(2000)

      //to scroll to an element
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    await page.waitForTimeout(2000)
    await page.locator("//input[@type='checkbox']").scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //by default playwright will scroll to the element located

})