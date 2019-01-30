const digits = [18, 0, -12, 141, -25];

const positive = digits.filter(e => e > 0);
const zero = digits.filter(e => e === 0);
const withoutZero = digits.filter(e => e !== 0);
const negative = digits.filter(e => e < 0);

console.log("positive = ", positive);
console.log("zero = ", zero);
console.log("withoutZero = ", withoutZero);
console.log("negative = ", negative);

const names = ["home", "about", "contacts"];

const selected = "contacts";

const notSelected = names.filter(e => e !== selected);

console.log(notSelected);

/*
  Задача написать функцию,
  которая возвращает массив
  невыделенных имен, т.е.
  names[i] !== selected

*/