import{test} from "@playwright/test";
test("locators",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // //username textfield
    // await page.locator("input#username").fill("student")
    // //password textfield
    // await page.locator("input#password").fill("Password123")
    // //submit button
    // await page.locator(".btn").click()  //locator('[class="btn"]').click()

    //Using xpath
    await page.locator("//input[@name='username']").fill("student")
    await page.locator("//input[@type='password']").fill("Password123")
    await page.locator("//button[@id='submit']").click()  ////button[text()='Submit'] or //button[.='Submit']
})