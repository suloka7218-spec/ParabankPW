import {test} from "@playwright/test"
test("element waits",async ({page})=>{
    await page.goto("https://www.amazon.in/")
   await Promise.all([page.waitForNavigation(),
    page.click("#nav-cart-count-container")])
    //when the page is not fully loaded we use waitForLoadState()
    await page.waitForLoadState('networkidle',{timeout:2000})//by default load state will load
})


test.only("waitforevent",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.fill('#writeArea',"I am downloading the file")
    let [downloadfile]=await Promise.all([page.waitForEvent('download'),
        page.click("#downloadButton")])
        console.log(await downloadfile.path());
        
})