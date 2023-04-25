// NODEJS - FILE EDITOR
// create a simple nodejs program to edit files, based on arguments passed.
// the program will support basic file reading, deleting, creating and appending operations
// node index.js read test.txt will output the content of file
// similarly append CONTENT test.txt will append the 'content' at the end of the file
// delete test.txt will delete the file
// create test.txt will create a new file
// rename test.txt new.txt will rename the file
// list . will list everything in current directory. (other paths should also support)
const fs = require("fs")

const argumentFromcommandLine =  process.argv.slice(2);

const operation = argumentFromcommandLine[0];
switch(operation){
    case "create":
        fs.writeFileSync(`${argumentFromcommandLine[1]}.txt`,`${argumentFromcommandLine[2]}`)
        break;
    case "update":
        fs.appendFileSync(`${argumentFromcommandLine[1]}.txt`,`${argumentFromcommandLine[2]}`)
        break;
    case "read":
        const data = fs.readFileSync(`${argumentFromcommandLine[1]}.txt`,"utf-8");
        console.log(data);
        break;
    case "delete":
        fs.unlinkSync(`${argumentFromcommandLine[1]}.txt`)
        break;
    default:
        console.log("Invalid arguments try again");
}