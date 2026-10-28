import {test} from "@playwright/test"
import path from "path"
import fs from "fs"
test("upload file",async ({page})=>{
// await page.goto("https://testautomationpractice.blogspot.com/")
// //single file upload
// await page.locator("#singleFileInput").setInputFiles("C:/Users/Administrator/Desktop/Playwright/tests/uploadfile/JEWELS.txt")
// await page.waitForTimeout(5000)
// await page.locator("//button[text()='Upload Single File']").click()
// await page.waitForTimeout(5000)

// //multiple file upload
// //we have to pass the path of the files in an array
// await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/Administrator/Desktop/Playwright/tests/uploadfile/SYNTAXES.txt", "C:/Users/Administrator/Desktop/Playwright/tests/uploadfile/JEWELS.txt"])
// await page.getByRole("button",{name:"Upload Multiple Files"}).click()
// await page.waitForTimeout(5000)

// //instead of directly passing the path of the file we can use the "__dirname" which is going to return us the 
// //path of the current file which we are running
// await page.goto("https://testautomationpractice.blogspot.com/")
// console.log(__dirname);
// //"../../" traverse back
// await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"../../tests/uploadfile/JEWELS.txt"))
// await page.waitForTimeout(5000)
// await page.locator("//button[text()='Upload Single File']").click()
// await page.waitForTimeout(5000)

// //by passing the path of local machine
// await page.goto("https://testautomationpractice.blogspot.com/")
// await page.locator("#singleFileInput").setInputFiles("C:/Users/Administrator/Desktop/prakashXpath.txt")
// await page.locator("//button[text()='Upload Single File']").click()
// await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/Administrator/Desktop/JavaScript.docx","C:/Users/Administrator/Desktop/prakashXpath.txt"])
// await page.getByRole("button",{name:"Upload Multiple Files"}).click()
// await page.waitForTimeout(5000)


//To remove the attached files
await page.goto("https://testautomationpractice.blogspot.com/")
await page.locator("#singleFileInput").setInputFiles("C:/Users/Administrator/Desktop/prakashXpath.txt")
await page.locator("#singleFileInput").setInputFiles([])
await page.locator("//button[text()='Upload Single File']").click()
await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/Administrator/Desktop/JavaScript.docx","C:/Users/Administrator/Desktop/prakashXpath.txt"])
await page.locator("#multipleFilesInput").setInputFiles([])
await page.getByRole("button",{name:"Upload Multiple Files"}).click()
await page.waitForTimeout(5000)

})
test.only("download file",async ({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByPlaceholder("Enter text here").fill("Engineer")
    //to change the name instead of suggested name
    await page.locator("#fileName").fill("newfile.txt")
    let [downloadFile]=await Promise.all([page.waitForEvent("download"),await page.locator("#downloadButton").click()])
    //local system path to save the downloaded file
    let downloadFolder="C:/Users/Administrator/Desktop/Playwright/ZdownlodedFileFromPW"
    //let downloadFolder="C:/Users/Administrator/Desktop/Playwright/tests/downloadedFiles"
    let filename=downloadFile.suggestedFilename()
    await downloadFile.saveAs(path.join(downloadFolder,filename))
   // instead of "downloadeFolder"--   "__dirname,"../../downloadFile we can pass
    await page.waitForTimeout(3000)

    //verify if downloded file is saved
    let fullpath=path.join(downloadFolder,filename)
    if(fs.existsSync(fullpath))
    {
        console.log(`file exists: ${fullpath}`);  
    }
    else{console.log(`no such file exists`);
    }
    
})

// //instead of using Promise.all() we can replace with below code
// let download=page.waitForEvent("download")
// await page.locator.("#downloadButton").click()
// let downloadFile=await download