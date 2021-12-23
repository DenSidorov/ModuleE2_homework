/*
Задание 4.
Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
*/

let namber
let max = 0
let min = 100
namber = Math.ceil(Math.random() * (max - min) + min);

alert(namber)