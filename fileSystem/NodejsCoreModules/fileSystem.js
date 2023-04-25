const fs = require("fs");


// for writing the data and creating a new file
fs.writeFileSync("newFile.txt","we are reading about the file modules")

// for updating the data whole in any file  just update the newfile.txt  and say "we are just very awesome"

fs.writeFileSync("newFile.txt","we are just very awesome")


// for appending the data  i am writing this 

fs.appendFileSync("newFile.txt" , "we are reading about the file modules")
fs.appendFileSync("newFile.txt" , "we are reading about the file modules")

// for reading the data it will give in buffer rember that 

const buff_data = fs.readFileSync("newFile.txt");
// <Buffer 77 65 20 61 72 65 20 6a 75 73 74 20 76 65 72 79 20 
//61 77 65 73 6f 6d 65 77 65 20 61 72 65 20 72 65 61 64 69 6e 67 20 61 62 6f 75 74 20 74 68 65 
//20 66 ... 48 more bytes>

console.log(buff_data.toString());

