// Шаблонные строки

const name = "Artur";

const hi = "Hi! My name is " + name;
const hello = `Hi! My name is ${name}`;

hi === hello;  // true, т.е. строки совпадают!

const threeLine = "First line" + "\n" + "Second line" + "\n" + "Third line";
const the3line = `First line
Second line
Third line`  
  
threeLine === the3line; // true, т.е. строки совпадают!

/* Задача - написать строку html с переменной и подставить туда значения
  для пунктов меню Home, About, Contacts
*/
const menu = `<ul>
  <li><a href="#">${home}</a></li>
  <li><a href="#">${about}</a></li>
  <li><a href="#">${contacts}</a></li>
</ul>`


