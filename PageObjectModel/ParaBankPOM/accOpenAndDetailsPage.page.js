class accOpenAndDetailsPage{
    constructor(page)
    {
        this.newAccNum=page.locator("a#newAccountId")
        this.accDetails=page.locator("//h1[text()='Account Details']")
    }
}
export default accOpenAndDetailsPage