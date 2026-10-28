class PBfindTransactionPage
{
    constructor(page)
    {
        this.findTransactionLink=page.locator("//a[@href='findtrans.htm']")
        this.selAcc=page.locator("select#accountId")
        this.findByDate=page.locator("input#transactionDate")
        this.findTransactionBtn=page.locator("button#findByDate")
        this.errMsg=page.locator("span#transactionDateError")
    }
}
export default PBfindTransactionPage