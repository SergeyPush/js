// Часть кода работает только в браузере. Не используйте nodejs в данном случае

/*
* function - описывает код, который можно повторять многократно, обратившись по имени функции
* add - имя функции
* (a, b) - параметры функции. Т.е. внутри функции описывается
        что необходимо сделать с параметрами, например сложить a + b
* {} - ограничивает область видимости функции, т.е. переменную result видно только внутри
        этих фигурных кавычек
*  После служебного слова return в одну строку описывается какой результат функция вернет
*  Если результат занимает несколько строк, то резльтат надо обернуть ()
*/

function sub(a, b) {
    const result = a - b;
    return result;
}

/* вызов функции по имени и передача аргументов. Аргумент - это значения,
  которые будут вычисляться как описано вычисление параметров.
*/
console.log("sub(30, 20) = " + sub(30, 20)); // 10

// Значение имеет порядок записи аргументов.
console.log("sub(20, 30) = " + sub(20, 30)); // -10

// Функция возвращает результат в точку вызова
const cent = sub(30, 20) + "0";
console.log(cent); // "100"

/**
 * Аналогичная запись функции в более коротком виде
 *  mult это имя функции
 *  => заменяет слово функция
 */

const mult = (a, b) => {
    return a * b;
};
//  если не используем {} то можно не использовать служебное слово return и {}
const sum = (a, b) => a + b;

/* VOID функции - не имеют return.
   Эти функции ничего не возвращают через return, а изменяют
   состояние вне самой функции ( в данном случае состояние веб-страницы)
*/

// функция для добавления заголовка на страницу html
const elem = document.querySelector("#root");
const hello = "Hello World";

const addTitle = (parent, title) => {
    parent.innerHTML = `<h1>${title}</h1>`;
};

addTitle(elem, hello);
// проверить результат в консоли

// Задача = написать функцию, которая принимает строку и возвращает строку - зеркальное отражение.
// В задаче используйте метод массива reverse()

console.log("abc".split("").reverse()); // ['c', 'b', 'a']

const reverse = (str, parent = elem) => {

    const res = str.split("").reverse().join("");
    parent.insertAdjacentHTML("beforeend", `<p>${res}</p>`);
}

reverse("Hello world")