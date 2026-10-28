import {test} from "@playwright/test"

test("check1",async ({page})=>{
    //This script will wait for 3sec
    //page.setDefaultTimeout(3000)//set timeout is only for this script,now it will not for 30sec
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    await page.locator("//input[@value='Upi']").check();
    //here i have intensionally change the locator PW will wait till 30 sec searching for the element
    //if not found it will throw timeout error
    await page.locator("//input[@value='Upia']").check();
})

test("check2",async ({page})=>{
    //This script will wait till 30sec
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    await page.locator("//input[@value='Upia']").check();
})

test.skip("check3",async ({page})=>{
    
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    await page.locator("//input[@value='walleteee']").check({timeout:1000});//this timeout is only for this line
})