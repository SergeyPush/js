// filter и map возвращают новый массив (filter не всегда, но пытается это сделать)
// reduce не возвращает новый массив. Он возвращает одно общее для массива значение

const digits = [1, 2, 3, 4, 5];

let sum = 0;

digits.map(e => (sum = e + sum));

console.log("sum = ", sum);

// вместо внешней переменной sum функция reduce
// использует встроенную переменную - аккумулятор
// запись accum + element то же что и accum = accum + element
// запись ,0 - это начальное значение для accum - необязательно
const adding = digits.reduce((accum, element) => accum + element, 0);
console.log("adding = ", adding);

console.log("/* ====================================================== */");
let mult = 1;
digits.map(e => (mult = e * mult));
console.log("mult = ", mult);

const multing = digits.reduce((accum, element) => accum * element, 1);
console.log("multing = ", multing);

console.log("/* ====================================================== */");
// то же без укзания начальных значений
// если начальное значение не задать, то accum присвоит первое значение элемента и
// начнет подсчет не с первого, а со второго элемента массива
const a = digits.reduce((accum, element) => accum + element);
const m = digits.reduce((accum, element) => accum * element);
console.log("a = ", a);
console.log("m = ", m);

console.log("/* ====================================================== */");
const menu = ["home", "contacts", "about"];
const str =
  menu.reduce(
    (accum, elem) => accum + '  <li><a href="#">' + elem + "</a></li>\n",
    "<ul>\n"
  ) + "</ul>";
console.log(str);

/*
  задача - написать функцию, кторая  посчитает среднее арифметическое массива чисел
  одну такую функцию надо написать на map, вторую на reduce
*/

let avgMap = 0;
digits.map(e => (avgMap += e));
console.log(avgMap / digits.length);

const avgReduce = digits.reduce((accum, element) => accum + element) / digits.length;
console.log(avgReduce);