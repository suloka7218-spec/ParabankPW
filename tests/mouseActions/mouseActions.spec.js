import {test} from "@playwright/test"
test("basic mouse action",async ({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
    // await page.locator("button#btn").click()//default left click
    // await page.waitForTimeout(2000)
       
    // //right click
    // await page.locator("//a[text()='Right Click']").click()
    // await page.locator("button#btn_a").click({button:'right'})
    // await page.waitForTimeout(2000)

    // //double click
    //await page.locator("//a[text()='Double Click']").click()
     //.click({modifiers:["Shift"]})//shift+click
    // //await page.locator("button#btn_b").dblclick();
    // await page.locator("button#btn_b").click({clickCount:2})
    // await page.waitForTimeout(2000)

    // //down(click and hold) and up(release)
    // await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
    // await page.locator("div#circle").hover()
    // await page.mouse.down()
    // await page.waitForTimeout(3000)
    // await page.mouse.up()
    // await page.waitForTimeout(2000)

    // //disabled or hidden buttons(foarce click)
    // await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
    // await page.locator("//input[@id='submit']").click({force:true})
    // //await page.locator("//input[@id='submit']").dispatchEvent('click')
    // await page.waitForTimeout(2000)

    await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
    await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover()
    await page.waitForTimeout(2000)
    //to move cursor away from the current location
    await page.mouse.move(100,100)
await page.waitForTimeout(2000)

})