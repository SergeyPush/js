
  /* Попробуем изучить один из самых 
      популярных методов встроки. 
      Теория вот 
      https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/String/slice
      Пример вот 
  */
  const hi = "Hello World";
  hi.length // длинна строки 12 символов
  const h = hi.slice(0,1);  // H
  const e = hi.slice(1,2);  // e
  const hello = hi.slice(0, 5); // Hello
  const world = hi.slice(6);// World
  const d = hi.slice(-1);  // d  - отрицательное число = отсчет с конца строки
 
// Задача - сделать новую строку без заглавных букв  "hello world"
  const result = h.toLowerCase()+hello.slice(1, )+' w'+world.slice(1, );
  console.log(result);
  console.assert(result === "hello world")


