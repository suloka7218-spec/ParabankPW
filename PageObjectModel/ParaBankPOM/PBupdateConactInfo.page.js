class PBupdateConactInfo
{
    constructor(page)
    {
        this.updateContactInfoLink=page.locator("//a[@href='updateprofile.htm']")
        this.upCity=page.locator("//input[@name='customer.address.city']")
        this.upProfileBtn=page.locator("//input[@value='Update Profile']")
        this.succMsg=page.locator("div#updateProfileResult")
    }
}
export default PBupdateConactInfo 