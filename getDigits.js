const width = "24.5px";
const integer = parseInt(width);
const fractional = parseFloat(width);
console.log("integer", integer);
console.log("fractional", fractional);

const concatenation = "сложение" + " 2-х " + "строк";
console.log(concatenation); // "сложение 2-х строк"

/* 
  Задача - переписать выражение 
  const sum = rate + bonus;
  так, чтобы получилась строка
  "1200.50$" 

  Например  запись 
  100 + "грн" 
  станет строкой "100грн"
*/

const rate = parseInt("1000$");
const bonus = parseFloat("200.50$").round(2);
console.log(typeof(bonus));

const sum = (rate + bonus).toFixed(2) + '$';

console.assert(sum === "1200.50$", "Ошибка при вычислении sum");
console.log(sum);
