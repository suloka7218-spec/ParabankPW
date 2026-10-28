import { test as base, expect } from "@playwright/test";
import PBregisterPage from "../PageObjectModel/ParaBankPOM/PBregisterPage.page.js"
import fs from "fs"
import data from "../testData/PBtestData.json"
// let datafiles = fs.readFileSync("C:/Users/Administrator/Desktop/Playwright/testData/PBtestData.json")
// let data = JSON.parse(datafiles)

export const test = base.extend({
    registerPage: async ({ page}, use) => {

    let register=new PBregisterPage(page)
    await page.goto(data.urll)
    await register.regLink.click()
    await register.firstName.fill(data.firstname)
    await register.lastName.fill(data.lastname)
    await register.address.fill(data.address)
    await register.city.fill(data.city)
    await register.state.fill(data.state)
    await register.zipCode.fill(data.zipcode)
    await register.pnoneNum.fill(data.phoneNum)
    await register.ssnNum.fill(data.ssn)
    const rn = Math.floor(Math.random() * 100); 
    let uname=data.username
    console.log(uname);
    
    let ranName=`${uname}${rn}`
    console.log(ranName);
    
    await register.username.fill(ranName)
    await register.password.fill(data.password)
    await register.confirmPass.fill(data.confirmPass)
    await page.waitForTimeout(2000)
    await register.regBtn.click()
    await page.waitForTimeout(5000)
    await expect(page.locator("//h1[contains(text(),'Welcome')]")).toHaveText(`Welcome ${ ranName}`)

    await use(page)
        
    }
    })
    export {expect }