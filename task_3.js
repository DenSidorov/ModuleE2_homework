/*
Задание 3.
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
*/
let str = prompt('Задача №3. Введите строку:');
newStr = ''
for (i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
}
alert('Перевёрнутая строка: ' + newStr)