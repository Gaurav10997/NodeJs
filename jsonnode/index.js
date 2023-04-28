const fs = require("fs")

const bioData = {
    name : "Guarav Mandal" ,
    Designation: "Full stack developer",
    RollNo: "735",
    emailId:"avdhika@gmail.com",
}
const jsonBioData = JSON.stringify(bioData) 

// fs.writeFile("jsonData.json" , jsonBioData , (e)=>{
//     console.log(e);
// })


fs.readFile("jsonData.json" , "utf-8" , (e,data)=>{
    const originalData = JSON.parse(data)
    console.log(data);
    console.log(originalData);
})
