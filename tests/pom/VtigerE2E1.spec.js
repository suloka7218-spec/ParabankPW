import {test} from "@playwright/test"
//import vtigerLogPage from "../../PageObjectModel/vtigerLogPage.page.js"
import vtigerHomePage from "../../PageObjectModel/vtigerHomePage.page.js"
import vtigerCreateOrgPage from "../../PageObjectModel/vtigerCreateOrgPage.page.js"
import vtigerOrganizationsPage from "../../PageObjectModel/vtigerOrganizationsPage.page.js"
import logindata from "../../testData/vtigerData.json"
import testdata from "../../testData/vtigerTestData.json"
test("",async ({page})=>{
    let loginpage=new vtigerLogPage(page)
    let HomePage=new vtigerHomePage(page)
    let CreateOrgPage=new vtigerCreateOrgPage(page)
    let OrganizationsPage=new vtigerOrganizationsPage(page)

    const rn = Math.floor(Math.random() * 100); 
    //console.log(rn);
    let orgname=testdata.orgName
    let ranName=`${orgname}${rn}`
     let url=logindata.url
    let usn=logindata.usn
    let pwd=logindata.pwd
    //launch the url
    await page.goto(url)
    //pass username
    await loginpage.username.fill(usn)
    //pass password 
    await loginpage.password.fill(pwd)
    //click on login
    await loginpage.loginBtn.click()
    //click on organisation
    await HomePage.orgLink.click()
    //click on create organisation
    await HomePage.createOrgBtn.click()
    //pass org name
    await CreateOrgPage.orgnameTextField.fill(ranName)
    //clcik on save
    await CreateOrgPage.saveBtn.click()
    //verfy for the organisation created
    let text=await OrganizationsPage.headermsg.textContent()
    console.log(text);
    
    if(text.includes(orgname))
    {
        console.log("Organization created successfully");   
    }
    else{
        console.log("Organization not created");
        
    }
    //signout
    await OrganizationsPage.signOutimg.hover()
    await OrganizationsPage.signOutLink.click()
    await page.waitForTimeout(4000)


})