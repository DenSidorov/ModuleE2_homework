/*
Задание 7.
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент,
то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
*/

let array = ['a', null, 4, 8, 0, 15, 10, 16, 23, 42, 0, '+', NaN];
let even = 0;
let odd = 0;
let zero = 0;
let another = 0;
for (i = 0; i < array.length; i++) {
    let x = array[i];
    if (isNaN(+x) || x == null) {
        another += 1;
    } else if (x % 2 !== 0) {
        odd +=1;
    } else if (x == 0) {
        zero += 1;
    } else if (x % 2 == 0) {
        even += 1;
    }
}
console.log('Массив = ' + array);
console.log('количество чётных чисел = ' + even);
console.log('количество нечётных чисел = ' + odd);
console.log('количество 0 = ' + zero);
console.log('количество остальных элементов = ' + another);