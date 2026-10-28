import {test,expect} from "@playwright/test"
test("customDropdowns",async ({page})=>{
    //the options which are not present under select or option tag
    await page.goto("https://www.amazon.in/s?k=shoes&crid=1X4TX3JUB7FGG&sprefix=%2Caps%2C294&ref=nb_sb_ss_recent_1_0_recent")
    await page.locator("#s-result-sort-select").click({force:true})
    await page.locator("//a[@class='a-dropdown-link']").first().waitFor()
    let options=await page.locator("//a[@class='a-dropdown-link']").all()
    // for(let option of options)
    // {
    //     let text=await option.textContent()
    //     if(text.includes('Best ')){
    //         await option.click()
    //     }
    // }
    // await page.waitForTimeout(3000)

    // //Xpath-------
    // await page.locator("#s-result-sort-select_1").click()
    // await page.waitForTimeout(3000)

    //variable attached to xpath for text
    let text="Avg. Customer Review"
    await page.locator(`//a[@class='a-dropdown-link' and text()="${text}"]`).click()
})