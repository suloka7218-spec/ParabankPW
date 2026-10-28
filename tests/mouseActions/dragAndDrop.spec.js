import {test} from "@playwright/test"
test("draga and drop",async ({page})=>{
    // //moving or darg and drop an element
    // await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
    // await page.locator("//div[text()='Drag Me']").hover()
    // await page.mouse.down()
    // await page.mouse.move(200,500)
    // await page.mouse.up()

    // //drag and drop to target
    // await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    // await page.locator('//div[text()="Mobile Charger"]').hover()
    // await page.mouse.down()
    // await page.locator("//div[text()='Mobile Accessories']/..").hover()
    // await page.mouse.up()

    // //drag and drop by taking ele location
    // await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    // await page.locator('//div[text()="Mobile Charger"]').hover()
    // await page.mouse.down()
    // let box=await page.locator("//div[text()='Mobile Accessories']/..").boundingBox()//to get the location of the locator we use boundingBox() method
    // console.log(box);
    // await page.mouse.move(box.x,box.y)
    // await page.mouse.up()

    //dragto() this method provided by palywright
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    let source=page.locator('//div[text()="Mobile Charger"]')
    let target=page.locator("//div[text()='Mobile Accessories']/..")
    await source.dragTo(target)

})