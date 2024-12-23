// Math

// toString()

// const num = 22;

// const result = num.toString();

// console.log('значение исходной переменной:',num);
// console.log('тип данных исходной переменной:', typeof num);

// console.log(result);
// console.log(typeof result);

// toFixed(number) => возвращает строку, с указанным количеством знаков после запятой

// const a = 8;
// const b = 3;

// const result = a / b;

// console.log(result);
// console.log(result.toFixed(2));

// Number('123')
// parseInt()
// parseFloat()
// анализируют переданный аргумент и возвращают число
// parseInt - возвращает целое число (пример: 10)
// parseFloat - возвращает число с плавающей запятой (пример: 10.5)
// если не удалось преобразовать => NaN
// число должно быть в начале строки

// const num = prompt("Введите число");

// console.log(parseInt(num));
// console.log(parseFloat(num));

// Number.isInteger()
// проверяет целое ли число и тип данных number
// если да, то вернет true
// иначе false

// const num1 = 10;
// const num2 = 2.22;

// console.log(Number.isInteger(num1));
// console.log(Number.isInteger(num2));

// Math

// const PI = Math.PI

// console.log(PI);

// округление

// const a = 8;
// const b = 3;

// const result = a / b;
// console.log('result', result)

// console.log(Math.ceil(result)); // округление в большую сторону
// console.log(Math.floor(result)); // округление в меньшую сторону
// console.log(Math.round(result)); // округление по правилам математики
// console.log(Math.trunc(result)); // отбрасывает дробную часть

// const x = -2;
// console.log(Math.abs(x)) // модуль числа

// Math.pow(ЧТО, СТЕПЕНЬ)
// const num = 3;

// console.log(Math.pow(num, 2));

// квадратный корень
// console.log(Math.sqrt(84))




// максимальное и минимальное значение
// console.log(Math.max(10, 5, 9, 11, 2, 6, 7));
// console.log(Math.min(10, 5, 9, 11, 2, 6, 7));



// Math.random()
// случайное число, с плавающей запятой, от 0 до 1, включая 0, исключая 1
// console.log(Math.random() * 10)

// console.log(Math.floor(Math.random() * 10))





// console.log(Math.random().toString(36).slice(2, 10)) // 0-9 a-z

// const randomColor = Math.floor(Math.random() * 16777215).toString(16)
// console.log(`#${randomColor}`);
// console.log('#' + randomColor);

// document.body.style.backgroundColor = '#' + randomColor;