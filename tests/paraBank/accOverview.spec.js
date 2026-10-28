
import { test, expect } from "../../customFixture/costomFixture.js";
 import openNewAccPage from "../../PageObjectModel/ParaBankPOM/PBopenNewAccPage.page.js"
 import accOpenAndDetailsPage from "../../PageObjectModel/ParaBankPOM/accOpenAndDetailsPage.page.js"
 import PBaccOverviewPage from "../../PageObjectModel/ParaBankPOM/PBaccOverviewPage.js"
 

test("account Overview", async({registerPage,page})=>{
    let opennewAcc=new openNewAccPage(page)
    await opennewAcc.openNewAccLink.click()
    await page.waitForTimeout(5000)
    await opennewAcc.typeOfAcc.selectOption("SAVINGS")
    await opennewAcc.openNewAccBtn.click()
    await page.waitForTimeout(5000)
     let text=await opennewAcc.openAccMsg.textContent()
     console.log(text);
     let accDetail=new accOpenAndDetailsPage(page)
    let newAccnum=await accDetail.newAccNum.textContent()
    console.log(newAccnum)

     let accOverview=new PBaccOverviewPage(page)
     await accOverview.accOverviewLink.click()
     await expect(page.locator(`#accountTable a:text-is("${newAccnum}")`)).toBeVisible()

     if(newAccnum){
        await page.getByRole('link', {name: newAccnum}).click()
        console.log(`Account number clicked, ${newAccnum}`);
     }
        else{
           console.log('acc number doesnot exists');
        }
     
})