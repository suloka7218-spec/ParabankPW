import {test} from "@playwright/test"
test("keyboard Actions",async ({page})=>{
await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
//await page.locator("input#name").fill("Sudha")
//using type method
// await page.locator("input#name").type("Sudha")//or
// await page.type("input#name", "Sudha")

// await page.locator("input#name").click()
// await page.keyboard.type("Sudha")

//inserText()
await page.locator("input#name").click()
await page.keyboard.insertText("Sudha")

//down() and up()
await page.keyboard.down("Space")
await page.keyboard.up("Space")
await page.keyboard.down("B")
await page.keyboard.up("B")

//press()
await page.keyboard.press('Tab')
await page.keyboard.type("asd123@gmail.com")
await page.keyboard.press("Control+A")
await page.keyboard.press("Control+C")
await page.keyboard.press('Tab')
await page.keyboard.press("Control+V")
})

//Scrolling using keyboard actions
test.only("scrolling using keyboard Actions",async ({page})=>{
    await page.goto("https://www.amazon.in")
    
    for(let i=1;i<=10;i++)
    {
        await page.keyboard.press('ArrowDown')
    }
     
    await page.waitForTimeout(2000)
    for(let i=1;i<=10;i++)
    {
        await page.keyboard.press('ArrowUp')
    }

})

//type("string")
//insertText("string")
//press("a+b+c") or press(<key>)
//down(<key>) and up(<key>)