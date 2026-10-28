class PBfundTransferPage
{
    constructor(page)
    {
        this.transferFundLink=page.locator("//a[text()='Transfer Funds']")   
        this.amount=page.locator("//input[@id='amount']")
        this.toAcc=page.locator("select#toAccountId")
        this.transferBtn=page.locator("//input[@value='Transfer']")
        this.transferCompleteMsg=page.locator("//div[@id='showResult']")
        this.errorMsg=page.locator("div#showError")
        
    }
}
export default PBfundTransferPage