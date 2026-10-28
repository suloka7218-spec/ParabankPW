import{test} from "@playwright/test";
test("elements control",async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
await page.locator("#name").fill("sudha")
//input value
let text=await page.locator("#name").inputValue()
console.log(text);

await page.locator("#email").type("asdf123@gmail.com")//type() method is deprecated
console.log(await page.locator("#email").inputValue());

//allTextContents()
// let names=await page.locator("//section[@class='poppins text-[14px]']").allTextContents()
// console.log(names);


//innerText() and textContent()
// await page.locator("//button[text()='Register']").click();
// //await page.pause(3000)
// let text=await page.locator("//section[text()='Radio Button']").innerText()//we can use textContent() also
// console.log(text);

//getAttribute()
//element.getAttribute("att_name")
//page.locator('selector').getAttribute('AN')
let attValue=await page.locator("//input[@id='password']").getAttribute('placeholder')
console.log(attValue);
})