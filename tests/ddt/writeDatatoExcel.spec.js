import {test} from "@playwright/test"
import path from "path"
import excel from "exceljs"
test("write data", async ({page})=>{
   let book=new excel.Workbook()
   await book.xlsx.readFile(path.join(__dirname,"../../testData/excelData.xlsx"))
   let sheet=book.getWorksheet("Sheet6")
   if(!sheet){
    sheet=book.addWorksheet("Sheet6")
   }
   //sheet.getRow(1).getCell(1).value="Kishan"
   //await book.xlsx.writeFile(path.join(__dirname,"../../testData/excelData.xlsx"))

   await page.goto("https://www.amazon.in/")
   await page.locator("//input[@role='searchbox']").fill("shoes")
   await page.locator("//div[@role='row']").first().waitFor()
   let allOpt=await page.locator("//div[@role='row']").allTextContents()
   console.log(allOpt);
   for(let text of allOpt)
   {
    let i=allOpt.indexOf(text)
    sheet.getRow(i+1).getCell(1).value=text
   }
   await book.xlsx.writeFile(path.join(__dirname,"../../testData/excelData.xlsx"))
   

})