class vtigerHomePage{
    constructor(page)
    {
        this.orgLink=page.locator("//a[text()='Organizations']")
        this.createOrgBtn=page.locator("//img[@alt='Create Organization...']")
    }
}
export default vtigerHomePage