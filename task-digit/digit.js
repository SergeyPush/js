console.log('Число в JS: 64-битные значения двойной точности формата IEEE 754')

console.log('===== целые числа =====');
let integer = 2 + 1;
let negativeInteger = -2 - 1;
let power = 1.23e3;
console.log('integer = ', integer);
console.log('negativeInteger = ', negativeInteger);
console.log('power = ', power);

console.log('===== дробные числа =====');
let fractional = .2 + .1;
console.log('двоичная система плохо работает с 10-ми дробями - пример:');
console.log('fractional = ', fractional);
let negativePower = 1.23e-3;
console.log('negativePower = ', negativePower);

console.log('===== запись чисел в недесятичном формате =====');
console.log('16-ричная запись 0x1ff числа 511 = ', 0x1ff);
console.log('2-ная запись 0b111111111 числа 511 = ', 0b111111111);


