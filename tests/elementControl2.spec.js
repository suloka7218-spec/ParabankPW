import{test} from "@playwright/test";
test("elements control2",async({page})=>{
    //element.all()
// await page.goto("https://www.flipkart.com/")
// let eleLocators=await page.locator("//div[@class='CTTtEa']").all()//all the elements matching to ("//div[@class='CTTtEa']") this address will return
// console.log(eleLocators); 

// //element.all() and waitFor()
// await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
// await page.locator("//section[@class='poppins text-[14px]']").first().waitFor()//waiting for the webelement to be loaded
// console.log(await page.locator("//section[@class='poppins text-[14px]']").all())

//isVisible()
//page.locator("selector").isVisible
await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
//await page.locator("//input[@id='phone']").fill("asdf")
//isVisible() doesnot have autowait so we have fill value or we can use waitfor() method
await page.locator("//input[@id='phone']").waitFor()//wait for default set time that is 30 sec, we can change this time in configuration file
// console.log(await page.locator("//input[@id='phone']").isVisible())
// console.log(await page.locator("//input[@id='phone']").isEnabled())
// console.log(await page.locator("//input[@id='phone']").isDisabled())
// console.log(await page.locator("//input[@id='phone']").isEditable())//works for <input>,<textarea>, <select>
console.log(await page.locator("//input[@id='male']").isEditable())//radio button
console.log(await page.locator("//input[@id='male']").isChecked())
await page.locator("//input[@id='male']").click()
console.log(await page.locator("//input[@id='male']").isChecked())

// console.log(await page.locator("//select[@id='select5']").isEditable);//dropdown

})