const str = "Строка текста";

const arr = str.split("");

console.log(arr);
//[ 'С', 'т', 'р', 'о', 'к', 'а', ' ', 'т', 'е', 'к', 'с', 'т', 'а' ]

arr.push(".");
const result = arr.join("");
console.log(result);
// "Строка текста."

const index = arr.indexOf(" ");
console.log(index); // 6

arr[index + 1] = arr[index + 1].toUpperCase();
arr.join("");
console.log(arr);
// "Строка Tекста."

const lowCaseString = str.split(" ");
// [ 'Строка', 'текста' ]
console.log(lowCaseString);

arr1 = lowCaseString[1].split("")
arr1[0] = arr1[0].toUpperCase();
const res = arr1.join("");
console.log(res);
lowCaseString.pop();
lowCaseString.push(res);

console.log(lowCaseString.join(" "));