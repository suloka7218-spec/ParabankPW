class openNewAccPage
{
    constructor(page)
    {   this.openNewAccLink=page.locator("//a[@href='openaccount.htm']")
        this.typeOfAcc=page.locator("//select[@id='type']")
        this.openNewAccBtn=page.locator("//input[@value='Open New Account']")
        this.newAccNum=page.locator("a#newAccountId")
        this.openAccMsg=page.locator("//div[@id='openAccountResult']")
    }
}
export default openNewAccPage