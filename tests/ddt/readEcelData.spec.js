import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"
test("read single data", async ({page})=>{
    let book=new excel.Workbook()
   await book.xlsx.readFile(path.join(__dirname,"../../testData/excelData.xlsx"))
    let sheet= book.getWorksheet("Sheet1")
    let data= sheet.getRow(1).getCell(1).toString()//.value to read the data as it is
    console.log(data);
})

//to read multiple data
test("read multiple data", async ({page})=>{
  let book=new excel.Workbook()
  await book.xlsx.readFile(path.join(__dirname,"../../testData/excelData.xlsx"))
  let sheet=book.getWorksheet("Sheet2")
  for(let row=1;row<=sheet.actualRowCount;row++){
    for(let c=1;c<=sheet.actualColumnCount;c++){
        let data=sheet.getRow(row).getCell(c).toString()
        console.log(data);
        
    }
  }

})
test.only("pass testdata to the app", async ({page})=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testData/excelData.xlsx"))
    let sheet=book.getWorksheet("Sheet3")
    let alldata=[]
    for(let r=1;r<=sheet.actualRowCount;r++)
    {
        let row=sheet.getRow(r)
       let url= row.getCell(1).toString()
       let un=row.getCell(2).toString()
       let ps=row.getCell(3).toString()
       alldata.push({url:url,un:un,ps:ps})
    }
    console.log(alldata);
    for(let d of alldata)
    {
    await page.goto(d.url)
await page.waitForTimeout(3000)
await page.locator("//input[@name='username']").fill(d.un)
await page.locator("//input[@name='password']").fill(d.ps)
await page.locator("//input[@value='Log In']").click()
await page.waitForTimeout(3000)
    }
    

})
