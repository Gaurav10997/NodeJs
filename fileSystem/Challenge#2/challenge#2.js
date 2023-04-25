// 1: Create a folder named it Thapa

// 2: Create a file in it named bio.txt and data into it.
// 3: Add more data in the end of existing data 

// 4: Read the data without getting the buffer data at first.

// 5: Add more data into the file at the end of the existing data.

// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder


const fs = require("fs")

// fs.mkdir("thapa",(e)=>{
//     console.log(e);
// })
fs.writeFile("./thapa/bio.txt","my name is faurav mandal",(e)=>{
    console.log(e);
})

fs.appendFile("./thapa/bio.txt", "i am software developer" ,(e) =>{
    console.log(e);
})

fs.rename("./thapa/bio.txt" ,"./thapa/new.txt",(e)=>{
    console.log(e);
})

// fs.unlink("./thapa/new.txt",(e)=>{
//     console.log(e);
// })
fs.rmdir("./thapa" ,(e)=>{
    console.log(e);
})
