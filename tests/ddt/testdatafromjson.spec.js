import {test} from "@playwright/test"
import fs from "fs"
import data from "../../testData/data.json"
import { log } from "console"
test("",async ({page})=>{
    //for valid credentials
    for(let d of data.valid){
        await page.goto(d.url)
        await page.locator("input#username").fill(d.username)
        await page.locator("input#password").fill(d.password)
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
     //For invalid credentials
     for(let d of data.invalid){
        await page.goto(d.url)
        await page.locator("input#username").fill(d.username)
        await page.locator("input#password").fill(d.password)
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

test.only("  ",async({page})=>{
    for(let key in data)
    {
        console.log(key);
        for(let d of data[key]){
             await page.goto(d.url)
        await page.locator("input#username").fill(d.username)
        await page.locator("input#password").fill(d.password)
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
    }
})