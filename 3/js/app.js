const root = document.querySelector("#root");
// массивы - как и у строки отсчет с 0.
// доступ не у букве, а значению только по индексу
// CRUD - CREATE, READ, UPDATE, DELETE универсальные базовые операции
// CREATE для массивов
const arr = [];
const arr1 = [1, 2, "любое значение любого типа"];
const arr2 = [arr1, "даже другой массив"];
const ARRAY = ["Home", "Contacts", "About"];

// READ  для массивов
1 === arr1[0]; // true
2 === arr1[1]; // true
"любое значение любого типа" === arr1[2]; // true

// UPDATE  для массивов
array.push("Это значение будет в конце массива");
array.unshift("Это значение будет в начале массива");
console.group("UPDATE");
console.log(ARRAY);
console.groupEnd("UPDATE");

// DELETE  для массивов
// Это значение удалит в конце массива последний элемент и веренет его
array.pull();
// Это значение удалит в начале массива первый элемент и веренет его
array.shift();
console.group("DELETE");
console.log(ARRAY);
console.groupEnd("DELETE");

/* Задача - в предыдущем задании создать массив ['article', 'section'  и т.д]
  Затем добавить с помощью методов массива несколько новых article и section
*/
