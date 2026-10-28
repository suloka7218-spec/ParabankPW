import {test} from "@playwright/test";
test.fail("test annotations", async({page})=>{
    console.log("test 1")
    //await page.goto("hsdjsjh1234");//test is failing(so in console it is passed)
})

test("test 2", async({browserName})=>{
    test.skip(browserName==="firefox")//conditional skipping(this statement is flase b/c firefox is commented in configuration file)
    console.log("test 2");
})

test("test 3", async()=>{
    //test.slow()
    console.log("test 3");   
})

test("test 4", async()=>{
    console.log("test 4");   
})
//test.only--to execute particular test and ignore others
//test.fail--to make test to be failed(expected to be failed)
//test.fixme--there is some issue in particular test and it has to fix so skip that test
//test.slow--the is taking more time to execute
//test.describe--used to declare the tests as groups
//test.timeout--set the default timeout for particular test