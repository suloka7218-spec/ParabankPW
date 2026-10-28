import {test} from "@playwright/test"
import fs from "fs"
let datafile=fs.readFileSync("C:/Users/Administrator/Desktop/Playwright/testData/singlesetdata.json")
//fs--file system which comes with nodejs,we dont have to istall it seperatly, fs provides some of the methods
//throgh which we can read write delete or modify the files in your system or in specific directory
let data=JSON.parse(datafile)

//[{"greet":"hello"},{"greet":"hiii"},{"greet":"byee"}]---should be in singlesetdata.json file
// test("get data from json", async ({page})=>{
//    // console.log(data.greet);
//    data.forEach(d => {
//     console.log(d.greet);
//    });
// })
test.skip("get data from jsonExample", async ({page})=>{
    await page.goto(data.url)
    await page.locator("input#username").fill(data.username)
    await page.locator("input#password").fill(data.password)
    await page.locator("button#submit").click()
    let title=await page.title()
    console.log(title);
    if(title=="Logged In Successfully | Practice Test Automation")
    {
        console.log("Valid cred");
    }
    else{
        console.log("Invalid cred");
    }
})

test.only("multiple set of data",async({page})=>{
    //for each will not work
    // data.forEach(d => {
    //     let url=d.url
    //     let username=d.username
    //     let password=d.password
    //     await page.goto(url)
    // });

    for(let testdata of data){
        let url=testdata.url
        let un=testdata.username
        let ps=testdata.password
        await page.goto(url)
        await page.locator("input#username").fill(un)
        await page.locator("input#password").fill(ps)
        await page.locator("button#submit").click()

        let title=await page.title()
    if(title=="Logged In Successfully | Practice Test Automation")
    {
        console.log("Valid cred");
    }
    else{
        console.log("Invalid cred");
    }
 
    }
})
