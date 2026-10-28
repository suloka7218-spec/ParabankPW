class PBbillPayPage
{
    constructor(page)
    {
        this.billPayLink=page.locator("//a[text()='Bill Pay']")
        this.payeeName=page.locator("//input[@name='payee.name']")
        this.address=page.locator("//input[@name='payee.address.street']")
        this.city=page.locator("//input[@name='payee.address.city']")
        this.state=page.locator("//input[@name='payee.address.state']")
        this.zipCode=page.locator("//input[@name='payee.address.zipCode']")
        this.pnoneNum=page.locator("//input[@name='payee.phoneNumber']")
        this.accNum=page.locator("//input[@name='payee.accountNumber']")
        this.verifyAccNum=page.locator("//input[@name='verifyAccount']")
        this.amount=page.locator("//input[@name='amount']")
        this.sendpaymentBtn=page.locator("//input[@value='Send Payment']")
        this.succMsg=page.locator("div#billpayResult")
    }
}
export default PBbillPayPage