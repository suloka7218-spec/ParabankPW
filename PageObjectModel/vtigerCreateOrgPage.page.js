class vtigerCreateOrgPage
{
    constructor(page)
    {
        this.orgnameTextField=page.locator("//input[@name='accountname']")
        this.saveBtn=page.locator("//input[@class='crmbutton small save']").first()
        
    }
}
export default vtigerCreateOrgPage