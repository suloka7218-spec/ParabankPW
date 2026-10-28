class PBrequestLoanPage
{constructor(page){

    this.requestLoanLink=page.locator("//a[@href='requestloan.htm']")
    this.loanAmount=page.locator("//input[@id='amount']")
    this.downPayment=page.locator("//input[@id='downPayment']")
    this.fromAcc=page.locator("select#fromAccountId")
    this.applyNowBtn=page.locator("//input[@value='Apply Now']")
    this.succMsg=page.locator("div#requestLoanResult")
}}
export default PBrequestLoanPage