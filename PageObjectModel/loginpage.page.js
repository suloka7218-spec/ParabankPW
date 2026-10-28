class loginpage{
    constructor(page){
        this.usernameTtextField=page.locator("input#username")
        this.passwordTextField=page.locator("input#password")
        this.subButton=page.locator("button#submit")
    }
}
export default loginpage