import { test, expect } from '@playwright/test';
import PBregisterPage from '../../PageObjectModel/ParaBankPOM/PBregisterPage.page.js';
import openNewAccPage from '../../PageObjectModel/ParaBankPOM/PBopenNewAccPage.page.js';
import accOpenAndDetailsPage from '../../PageObjectModel/ParaBankPOM/accOpenAndDetailsPage.page.js';
import PBtestData from '../../testData/PBtestData.json';
import dotenv from 'dotenv';

dotenv.config();


test.beforeAll(async({browser})=>{
    console.log("Connect to Db");
})
test.afterAll(async ({browser})=>{
    console.log("Disconnect from Db");
})
test.beforeEach(async ({page})=>{
    console.log("Launch Url");
    //await page.goto(process.env.Base_Url)
})
test.afterEach(async({page})=>{
    console.log("LogOut");
    let register=new PBregisterPage(page)
    await register.logOut.click()
})


test("@smoke", async({page})=>{
    let opennewAcc=new openNewAccPage(page)
    let register=new PBregisterPage(page)
    //await page.goto(PBtestData.urll)
      await page.goto(process.env.Base_Url)
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
    await page.waitForTimeout(4000)
    
    await expect(page.locator("//h1[contains(text(),'Welcome')]")).toHaveText(`Welcome ${ ranName}`)


    await opennewAcc.openNewAccLink.click()
    await page.waitForTimeout(3000)
    await opennewAcc.typeOfAcc.selectOption("SAVINGS")
    await opennewAcc.openNewAccBtn.click()
    await page.waitForTimeout(3000)
     let text=await opennewAcc.openAccMsg.textContent()
     console.log(text);

    let accDetail=new accOpenAndDetailsPage(page)
    await accDetail.newAccNum.click()
   let text1=await accDetail.accDetails.textContent()
   await expect(text1).toContain("Account Details");
    await page.waitForTimeout(3000)
    
})