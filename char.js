const str = "Hello world!";

const isPresentL = str.includes("l");
const indexL = str.indexOf("l");
const letterL = str.charAt(indexL);


const indexH = str.indexOf("H");


console.log("isPresent = ", isPresentL);
console.log("indexL = ", indexL);
console.log("letterL = ", letterL);


let result = str[indexH];

console.log(result);


console.assert(result==='hello world');