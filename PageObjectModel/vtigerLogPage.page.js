class vtigerLogPage{
    constructor(page)
{
    this.username=page.locator("//input[@name='user_name']")
    this.password=page.locator("//input[@name='user_password']")
    this.loginBtn=page.locator("#submitButton")
}
}
export default vtigerLogPage