/*
Задание 6.
Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.
*/

let array = [4, 8, 15, 4, 4, 16, 23, 42];
console.log('Массив = ' + array);
let y = 0;
for (i = 0; i < array.length; i++) {
    x = array[i];
    for (j = i + 1; j < array.length; j++) {
        if (x == array[j]) {
            y += 1;
        }
    }
}
console.log(Boolean(y))