alert("Введите два значения, чтобы получить результат от деления с остатком");
let firstValue = prompt("Первое число:");
let secondValue = prompt("Второе число:");
firstValue = Number(firstValue);
secondValue = Number(secondValue);
let result = firstValue % secondValue;
alert("Ответ: " + firstValue + "%" + secondValue + "=" + result); 
