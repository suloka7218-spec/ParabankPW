import {expect, test} from "@playwright/test"
test("dialog handling",async ({page})=>{
    //Playwright auto dismiss the dialogs
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//button[text()='Simple Alert']").click()
    await page.waitForTimeout(3000)
    await page.locator("//button[text()='Confirmation Alert']").click()
    await expect(page.locator("#demo")).toContainText("Cancel")
    await page.waitForTimeout(3000)
    await page.locator("//button[text()='Prompt Alert']").click()
    await expect(page.locator("#demo")).toContainText("cancelled ")
    await page.waitForTimeout(3000)
})
//handle dialogs using event listeners(page.on and page.once)
test("dialog handling using page.on",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // await page.on("dialog",(dialog)=>{dialog.accept("Sudha")})//we can use dismiss as well
    // //we have to pass some text inside accept("Sudha") to handle the prompt alert
    // await page.locator("//button[text()='Simple Alert']").click()
    // await page.locator("//button[text()='Confirmation Alert']").click()
    // await page.locator("//button[text()='Prompt Alert']").click()
    // await page.waitForTimeout(3000)

    //page.on will handle all the dialog (Only once we have to mention)
    await page.on("dialog",async(dialog)=>{if(dialog.type()=='alert'){
        console.log(await dialog.message());
        
        await dialog.accept()}
        else if(dialog.type()=='confirm'){await dialog.accept()}
        else if(dialog.type()=='prompt'){
            console.log(await dialog.defaultValue());
            
            await dialog.accept("Rani")
        }
    })
    await page.locator("//button[text()='Simple Alert']").click()
     await page.waitForTimeout(3000)
    await page.locator("//button[text()='Confirmation Alert']").click()
     await page.waitForTimeout(3000)
     await expect(page.locator("#demo")).toContainText("OK")
    await page.locator("//button[text()='Prompt Alert']").click()
    await expect(await page.locator("#demo").textContent()).toBe("Hello Rani! How are you today?")
    await page.waitForTimeout(3000)
}) 
//page.once('dialog',()=>{})----to handle particular dialog
test.only("dialog handling using page.once",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//button[text()='Simple Alert']").click()
    await page.waitForTimeout(3000)
    await page.locator("//button[text()='Confirmation Alert']").click()
    await page.waitForTimeout(3000)
    page.once("dialog",async(dialog)=>{dialog.accept("Spider")})
    await page.locator("//button[text()='Prompt Alert']").click()
    await page.waitForTimeout(3000)
    await page.reload()
    await page.locator("//button[text()='Prompt Alert']").click()
    await page.waitForTimeout(3000)

})
