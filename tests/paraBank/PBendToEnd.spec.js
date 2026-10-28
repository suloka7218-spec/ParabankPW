import {expect, test} from "@playwright/test"
import PBregisterPage from "../../PageObjectModel/ParaBankPOM/PBregisterPage.page.js"
import PBopenNewAccPage from "../../PageObjectModel/ParaBankPOM/PBopenNewAccPage.page.js"
import accOpenAndDetailsPage from "../../PageObjectModel/ParaBankPOM/accOpenAndDetailsPage.page.js"
import PBfundTransferPage from "../../PageObjectModel/ParaBankPOM/PBfundTransferPage.page.js"
import PBbillPayPage from "../../PageObjectModel/ParaBankPOM/PBbillPayPage.page.js"
import PBfindTransactionPage from "../../PageObjectModel/ParaBankPOM/PBfindTransactionPage.page.js"
import PBrequestLoanPage from "../../PageObjectModel/ParaBankPOM/PBrequestLoanPage.page.js"
import PBtestData from "../../testData/PBtestData.json"
import PBbillPayData from "../../testData/PBbillPayData.json"
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
    //await page.waitForTimeout(2000)
    await register.regBtn.click()
    //await page.waitForTimeout(3000)
    await expect(page.locator("//h1[contains(text(),'Welcome')]")).toHaveText(`Welcome ${ ranName}`)

    //open new account
    let opennewAcc=new PBopenNewAccPage(page)

    await opennewAcc.openNewAccLink.click()
    await page.waitForTimeout(2000)
    await opennewAcc.typeOfAcc.selectOption("SAVINGS")
    await opennewAcc.openNewAccBtn.click()
    await page.waitForTimeout(2000)
    let accNum=await opennewAcc.newAccNum.textContent()
    console.log(accNum);
    
    let text=await opennewAcc.openAccMsg.textContent()
    console.log(text);
     //Account details
    let accDetail=new accOpenAndDetailsPage(page)
   
    await accDetail.newAccNum.click()
    await page.waitForTimeout(2000)
    let text1=await accDetail.accDetails.textContent()
    await expect(text1).toContain("Account Details");
    //await page.waitForTimeout(3000)

    //Fund transfer
    let fundTransfer=new PBfundTransferPage(page)
    await fundTransfer.transferFundLink.click()
    await fundTransfer.amount.fill(PBtestData.fundTransferAmount)
    //await page.waitForTimeout(3000)
    await fundTransfer.toAcc.selectOption(accNum)
    await fundTransfer.transferBtn.click()
    //await page.waitForTimeout(3000)
    let msg=await fundTransfer.transferCompleteMsg.textContent()

    await expect(msg).toContain("Transfer Complete!")

    //Bill Pay
     let billPay=new PBbillPayPage(page)
    await billPay.billPayLink.click()
    await billPay.payeeName.fill(PBbillPayData.payeeName)
    await billPay.address.fill(PBbillPayData.address)
    await billPay.city.fill(PBbillPayData.city)
    await billPay.state.fill(PBbillPayData.state)
    await billPay.zipCode.fill(PBbillPayData.zipCode)
    await billPay.pnoneNum.fill(PBbillPayData.phoneNum)
    await billPay.accNum.fill(accNum)
    await billPay.verifyAccNum.fill(accNum)
    await billPay.amount.fill(PBbillPayData.amount)
    await billPay.sendpaymentBtn.click()
    let msg1=await billPay.succMsg.textContent()
    console.log(msg1);
    await expect(billPay.succMsg).toContainText("Bill Payment Complete")

    //Find transaction
    let findTransaction=new PBfindTransactionPage(page)
    await findTransaction.findTransactionLink.click()
    await findTransaction.selAcc.selectOption(accNum)
    
const now = new Date();
const mm = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
const dd = String(now.getDate()).padStart(2, '0');
const yyyy = now.getFullYear();

const formattedDate = `${mm}-${dd}-${yyyy}`;
console.log(formattedDate);
  await findTransaction.findByDate.fill(formattedDate)
  await findTransaction.findTransactionBtn.click()
  //await page.waitForTimeout(5000)   
  
  //Loan Request
    let requestLoanPage=new PBrequestLoanPage(page)
    await requestLoanPage.requestLoanLink.click()
    await requestLoanPage.loanAmount.fill("100")
    await requestLoanPage.downPayment.fill("20")
    await requestLoanPage.fromAcc.selectOption(accNum)
    await requestLoanPage.applyNowBtn.click()
    let msg2=await requestLoanPage.succMsg.textContent()
    await expect(msg2).toContain("Loan Request Processed")
    await page.waitForTimeout(5000)
    


})