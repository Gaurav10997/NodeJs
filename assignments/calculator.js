// NODEJS - CALCULATOR
// Create an argument based calculator in nodejs
// the code takes arguments from terminal and then depending on arguments gives output
// eg node index.js add 1 2 will return 3
// support following operations:
// add, sub, mult, divide, sin, cos, tan, random
// eg node index.js random will just generate random number for you
// use crypto module to generate random number. you can also decide to get length from args
// this function helps us to take input from terminal 



const crypto = require("crypto");
const args = process.argv.slice(2);


// this is just for iterating the values in args 
// args.forEach((arg)=>{
//         console.log(arg);
// })
// function Add(...arguments){
//     console.log(arguments.length)
// }

if(args.length==3){
    switch(args[0]){
        case "add":
            console.log(Number(Number(args[1])+Number(args[2])));
            break;
        case "mult":
            console.log(Number(Number(args[1])*Number(args[2])));
            break;
        case "div":
            console.log(Number(Number(args[1])/Number(args[2])));
            break;
        default:
            console.log("Invalid CASE");
    }
}
else if(args.length==2){
    switch(args[0]){
        case "sin":
            console.log(Math.sin(Number(args[1])));
            break;
        case "cos":
            console.log(Math.cos(Number(args[1])));
            break;
        default:
        console.log("Invalid CASE");
       
    }
}
else if(args.length==1){
    if(args[0]=="random"){
        console.log(crypto.randomInt(0, 1000000));
    }

}
