import {expect, test} from "@playwright/test"
test("frames",async ({page})=>{
await page.goto("https://ui.vision/demo/webtest/frames/")
//Total frames
let frames=await page.frames()
console.log(frames.length);
for(let frame of frames)
{
    console.log(await frame.title());
    
}
//1.frame()----name,url 
let frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1'})
await frame1.locator("//input[@name='mytext1']").fill("Qspider")
await expect(await frame1.locator("//input[@name='mytext1']").inputValue()).toContain("Qspider")

//2.framelocator
let frame2=await page.frameLocator("//frame[@src='frame_2.html']").locator('//input[@name="mytext2"]')
await frame2.fill("Jspider")
await page.waitForTimeout(3000)

//3.contentFrame()
let frame22=await page.locator("//frame[@src='frame_2.html']").contentFrame()
await frame22.locator('//input[@name="mytext2"]').fill("TekPyramid")
await page.waitForTimeout(3000)

//4.nested frame
let frame3=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3"})
let button=await frame3.frameLocator('//iframe').locator("//div[@class='ulDsOb' and .='I am a human']")
await button.click()
await page.waitForTimeout(3000)




})