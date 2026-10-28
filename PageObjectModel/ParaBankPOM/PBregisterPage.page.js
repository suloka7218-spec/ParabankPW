import PBtestData from "../../testData/PBtestData.json"
class PBregisterPage{
    constructor(page)
    {
        this.regLink=page.locator("//a[text()='Register']")
        this.firstName=page.locator("//input[@name='customer.firstName']")
        this.lastName=page.locator("//input[@name='customer.lastName']")
        this.address=page.locator("//input[@name='customer.address.street']")
        this.city=page.locator("//input[@name='customer.address.city']")
        this.state=page.locator("//input[@name='customer.address.state']")
        this.zipCode=page.locator("//input[@name='customer.address.zipCode']")  
        this.pnoneNum=page.locator("//input[@name='customer.phoneNumber']")
        this.ssnNum=page.locator("//input[@name='customer.ssn']")
        this.username=page.locator("//input[@name='customer.username']")
        this.password=page.locator("//input[@name='customer.password']")
        this.confirmPass=page.locator("//input[@name='repeatedPassword']")
        this.regBtn=page.locator("//input[@value='Register']")
        this.logOut= page.locator("//a[@href='logout.htm']")
    }
    // async regUser()
    // {
    // await page.goto(PBtestData.urll)
    // await register.regLink.click()
    // await register.firstName.fill(PBtestData.firstname)
    // await register.lastName.fill(PBtestData.lastname)
    // await register.address.fill(PBtestData.address)
    // await register.city.fill(PBtestData.city)
    // await register.state.fill(PBtestData.state)
    // await register.zipCode.fill(PBtestData.zipcode)
    // await register.pnoneNum.fill(PBtestData.phoneNum)
    // await register.ssnNum.fill(PBtestData.ssn)
    // const rn = Math.floor(Math.random() * 100); 
    // let uname=PBtestData.username
    // console.log(uname);
    
    // let ranName=`${uname}${rn}`
    // console.log(ranName);
    
    // await register.username.fill(ranName)
    // await register.password.fill(PBtestData.password)
    // await register.confirmPass.fill(PBtestData.confirmPass)
    // await page.waitForTimeout(2000)
    // await register.regBtn.click()
    // await page.waitForTimeout(5000)
    // }
}
export default PBregisterPage