import {expect, test} from "@playwright/test"
import PBregisterPage from "../../PageObjectModel/ParaBankPOM/PBregisterPage.page.js"
import PBfundTransferPage from "../../PageObjectModel/ParaBankPOM/PBfundTransferPage.page.js"
import PBtestData from "../../testData/PBtestData.json"
import { url } from "node:inspector"

//Hooks
test.beforeAll(async({browser})=>{
    console.log("Connect to Db");
})
test.afterAll(async ({browser})=>{
    console.log("Disconnect from Db");
})
test.beforeEach(async ({page})=>{
    console.log("Launch Url");
    await page.goto(PBtestData.urll)
})
test.afterEach(async({page})=>{
    console.log("LogOut");
    let register=new PBregisterPage(page)
    await register.logOut.click()
})

test("@regression", async({page})=>{
    
    let register=new PBregisterPage(page)
    //await page.goto(PBtestData.urll)
    await register.regLink.click()
    await register.firstName.fill(PBtestData.firstname)
    await register.lastName.fill(PBtestData.lastname)
    await register.address.fill(PBtestData.address)
    await register.city.fill(PBtestData.city)
    await register.state.fill(PBtestData.state)
    await register.zipCode.fill(PBtestData.zipcode)
    await register.pnoneNum.fill(PBtestData.phoneNum)
    await register.ssnNum.fill(PBtestData.ssn)
    const rn = Math.floor(Math.random() * 100); 
    let uname=PBtestData.username
    console.log(uname);
    
    let ranName=`${uname}${rn}`
    console.log(ranName);
    
    await register.username.fill(ranName)
    await register.password.fill(PBtestData.password)
    await register.confirmPass.fill(PBtestData.confirmPass)
    await page.waitForTimeout(2000)
    await register.regBtn.click()
    await page.waitForTimeout(3000)
    
    await expect(page.locator("//h1[contains(text(),'Welcome')]")).toHaveText(`Welcome ${ ranName}`)

    let fundTransfer=new PBfundTransferPage(page)
    await fundTransfer.transferFundLink.click()
    
    await fundTransfer.transferBtn.click()
    await page.waitForTimeout(3000)

    let erMsg=await fundTransfer.errorMsg.textContent()


    await expect(erMsg).toContain("Error!")
    

})