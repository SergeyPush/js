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
ARRAY.push("Это значение будет в конце массива");
ARRAY.unshift("Это значение будет в начале массива");
console.group("UPDATE");
console.log(ARRAY);
console.groupEnd("UPDATE");

// DELETE  для массивов
// Это значение удалит в конце массива последний элемент и веренет его
ARRAY.pull;
// Это значение удалит в начале массива первый элемент и веренет его
ARRAY.shift;
console.group("DELETE");
console.log(ARRAY);
console.groupEnd("DELETE");

/* Задача - в предыдущем задании создать массив ['article', 'section'  и т.д]
  Затем добавить с помощью методов массива несколько новых article и section
*/
const content = [];

const article1 = `
  <article>Article1 text<article>`
const article2 = `
  <article>Article2 text<article>`
const article3 = `
  <article>Article3 text<article>`
const article4 = `
  <article>Article4 text<article>`

const articles1 = [];
articles1.push(article1);
articles1.push(article2);
const articles2 = []
articles2.push(article3, article4);

const section1 = `
<section>
  <h2>Section1 title</h2>
  ${articles1}
</section>
`
const section2 = `
<section>
  <h2>Section2 title</h2>
  ${articles2}
</section>
`

content.push(section1, section2);
root.innerHTML = content;
root.insertAdjacentHTML("beforebegin", `<h1>My site</h1>`)