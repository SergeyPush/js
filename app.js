console.log("-------- примитивный тип данных ------------");
let digit = 1;
let word = 'one';
let bool = true;
let falsy1 = null;
let falsy2 = undefined;

console.log(digit);
console.log(word);
console.log(bool);
console.log(falsy1);
console.log(falsy2);

console.log("-------- ссылочный тип данных ------------");
const array = [digit, word, bool, falsy1, falsy2];
const object = {
    'the number': digit,
    'the string': word,
    'the boolean': bool,
    'the null': falsy1,
    'the undefined': undefined, 
}

console.table(array);
console.table(object);