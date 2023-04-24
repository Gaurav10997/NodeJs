
// 1: Create a folder named it Thapa

// 2: Create a file in it named bio.txt and data into it.
// 3: Add more data in the end of existing data 

// 4: Read the data without getting the buffer data at first.

// 5: Add more data into the file at the end of the existing data.

// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder

const fs = require("fs");
// fs.mkdirSync("Thapa");
// fs.writeFileSync("./Thapa/bio.txt","we are reading about the file modules")


// fs.appendFileSync("./Thapa/bio.txt","  Adding More data")
// console.log(fs.readFileSync("./Thapa/bio.txt", "utf8")); 

// fs.renameSync("./Thapa/bio.txt","./Thapa/biology.txt")
// fs.unlinkSync("./Thapa");
fs.rmdirSync("Thapa")