import{test} from "@playwright/test";
test("browser controls",async({page})=>{
    await page.goto("https://www.google.com")
console.log(await page.title());
//     let size=await page.viewportSize()
//     console.log(size);
//    await page.setViewportSize({width:1000,height:500})
//     let size1=await page.viewportSize()
//     console.log(size1); 


//title
await page.goto("https://www.amazon.in/")
console.log(await page.title());
})