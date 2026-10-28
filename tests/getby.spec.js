import{test} from "@playwright/test";
test("get by methods",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.getByLabel("Email",{exact:false}).fill("aa123@gmail.com")
//for partial text {exact:false}, for complete text {exact:true}
await page.getByLabel("Password:").fill("asdfg@12")

//getByText
await page.getByText("Remember me?").click()

//altText
await page.getByAltText("Tricentis Demo Web Shop").click();

//getByTitle
await page.getByTitle("Show details for $25 Virtual Gift Card").first().click();//first() for 1st matching element

//getByRole
await page.getByRole("button",{name:'Add to wishlist'}).click()

//getByTestId
await page.goto("https://www.saucedemo.com/")
//we have to make changes in configuration file
//we have put (testIdAttribute:"data-test",) in config file in use:{  before trace:
await page.getByTestId("password").fill("dsfjhd")
})