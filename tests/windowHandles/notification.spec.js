import {test} from "@playwright/test"
test("notification",async ({browser})=>{
    let context=await browser.newContext({permissions:["notifications","microphone","geolocation","camera"]})//to grant the permission we have pass newContext({permissions:["notifications"]})
    //to give the permission globaly, we have to give it in the "playwright.config.js"
    let page=await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.locator("#browNotButton").click()
    //going inside the browser and get the permission status so we are using evaluate(()=>{}) call back function
    //validation of permission status-------
    let result=await page.evaluate(()=>{return Notification.requestPermission()})
    console.log(`permissions:${result}`);
    //revoke all the permissions--------
    await context.clearPermissions()
    let result2=await page.evaluate(()=>{return Notification.requestPermission()})
    console.log(`permissions:${result2}`);
    

    
})