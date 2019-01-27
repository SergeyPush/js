const variable = 511;

const TWO = (variable).toString(2); // "111111111"
const EIGHT = (variable).toString(8); // "777"
const TEN = (variable).toString(10); // "511"
const SIXTEEN = (variable).toString(16).toUpperCase(); // "1FF"

console.log("Число 511 в различных системах счисления:");
console.log("двоичная", TWO);
console.log("метод toString() возвращает", typeof TWO);

console.log("==========================");
console.assert(TWO === "111111111", "TWO");
console.assert(EIGHT === "777", "EIGHT");
console.assert(TEN === "511", "TEN");
console.assert(SIXTEEN === "1FF", "SIXTEEN");
