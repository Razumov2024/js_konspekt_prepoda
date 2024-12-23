// 1) Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата

// const squareSide = +prompt("Введите сторону квадрата");
// const result = squareSide * squareSide;
// console.log(result);

// 2) Запросите у пользователя число, возведите это число во 3-ю степень и выведите на экран.

// const userNumber = +prompt("Введите число");
// console.log(userNumber ** 3);

// 3) Сделать цикл который выводит 'bla' 'blabla' 'blablabla' 'blablablabla'

// for (let i = 1; i <= 4; i++) {
//   switch (i) {
//     case 1:
//       console.log("bla");
//       break;
//     case 2:
//       console.log("blabla");
//       break;
//     case 3:
//       console.log("blablabla");
//       break;
//     case 4:
//       console.log("blablablabla");
//       break;
//   }
// }

// const subStr = 'bla';
// let resultString = '';
// let a = 2;
// for (let i = 1; i <= 4; i++) {
//     // resultString = resultString + subStr;
//     resultString += subStr;

//     console.log(resultString);
// }

// i = 1 => '' + 'bla' => 'bla'
// i = 2 => 'bla' + 'bla' => 'blabla'
// i = 3 => 'blabla' + 'bla' => 'blablabla'
// i = 4 => 'blablabla' + 'bla' => 'blablablabla'

// 4) Вывести # столько раз, сколько указал пользователь.

// const count = +prompt("Введите количество символов #");

// const sign = "#";
// let resultString = "";

// for (let i = 0; i < count; i++) {
//   resultString += sign;
// }

// console.log(resultString);

// 5) Пользователь ввел число, а на экран вывелись все числа от введенного до 0.

// const count = +prompt("Введите число");

// if (count > 0) {
//     for (let i = count; i >= 0; i--) {
//         console.log(i);
//     }
// } else {
//     for (let i = count; i <= 0; i++) {
//         console.log(i);
//     }
// }

// 6) сделать цикл который выводит нечетные числа от 40 до 140

// for (let i = 40; i <= 140; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
