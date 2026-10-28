class vtigerOrganizationsPage
{
    constructor(page)
    {

        this.signOutimg=page.locator("//img[@src='themes/softed/images/user.PNG']")
        this.signOutLink=page.locator("//a[text()='Sign Out']")
        this.headermsg=page.locator("//span[@class='dvHeaderText']")

    }
}
export default vtigerOrganizationsPage