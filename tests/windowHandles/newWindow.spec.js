import {test,expect} from "@playwright/test"
import { title } from "node:process"
test("multiWindow",async ({browser})=>{
    //handle new window
    let context=await browser.newContext()
     let page=await context.newPage()
     await page.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2")
     
    let [window2]=await Promise.all([page.waitForEvent('popup'), 
        page.locator("//button[text()='Shop Now']").click()])
     await window2.locator("//button[text()='Add to Cart']").click()
     let title1=await page.title()
     await expect(await window2.title()).not.toBe(title1)
     
})