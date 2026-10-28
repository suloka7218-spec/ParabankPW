class PBaccOverviewPage
{
    constructor(page)
    {
        this.accOverviewLink=page.locator("//a[@href='overview.htm']")
        this.accNum=page.locator("//table[@id='accountTable']//tr[1]/td[1]/a")
        this.accDetails=page.locator("//div[@id='accountDetails']")
        
    }
}
export default PBaccOverviewPage