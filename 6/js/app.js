const even = [2, 4, 6, 8];
// map - возьмет каждый элемент массива и применит функцию к этому элементу
// полученное значение будет помещено в новый массив и этот новый массив map return(вернет)
// в данном случае return [2 + 1, 4 +1, 6 + 1, 8 + 1]
const odd = even.map(element => element + 1);
console.log(odd); // [3,5,7,9]

// кроме элемента функция map имеет доступ к индексу этого элемента массива
const digits = even.map((element, index) => element + index);
// в данном случае return [2+0, 4+1, 6+2, 8+3], т.е. element + index
console.log(digits); // [2,5,8,11]

// А это наиболее частый паттерн использования map
const root = document.querySelector("#root");

const arr = ["Home", "Contacts", "About"];
const items = arr => arr.map(e => `<li>${e}</li>`).join("");

root.innerHTML = `<ul>
  ${items(arr)}
</ul>`;

// Напишите map для массива even и верните новые массивы для функций + 10, -10, *10, /10, %10, **2
// затем напишите функцию, которая берет массив и добавляет строку в таблицу
// создайте таблицу в html, добавьте id таблице и затем по аналогии с
// const root = document.querySelector("#root"); добавляйте в таблицу результаты
// + 10, -10, *10, /10, %10, **2
