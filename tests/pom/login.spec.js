import {test} from "@playwright/test"
import loginpage from "../../PageObjectModel/loginpage.page.js"
import logindata from "../../testData/loginData.json"
test("", async({page})=>{
    let lnPage=new loginpage(page)
    let url=logindata.url
    let usn=logindata.usn
    let pwd=logindata.pwd
    //launch the url
    await page.goto(url)
    //pass usn
    await lnPage.usernameTtextField.fill(usn)
    //pass pwd
    await lnPage.passwordTextField.fill(pwd)
    //click on submit
    await lnPage.subButton.click()
    await page.waitForTimeout(3000)
})