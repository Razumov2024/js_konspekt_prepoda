// - однострочный комментарий

/*
fghfghfgh
fghfghfghf
sefsdgsg
dgdgdgd
*/

/* многострочный комментарий */

// типы данных
// 8 шт

// 1. number - 8 11.2 - число
// 2. string - 'stroka' "222" `test!@432.8` - строка
// 3. boolean - true/false  - правда/ложь
// 4. null - null - ничего
// 5. undefined - undefined - ничего
// 6. BigInt - 123n
// 7. Symbol - символ - уникальный идентификатор
// 8. Object - объект - {ключ: значение}

// переменные

// var, let, const

// let num = 5;
// let str = '5';
// let bool = true;
// let und;

// num = '15.2';

// const test = '432';
// test = '24234234'; => ошибка

// let num = 2323; => ошибка
// const test = '432'; => ошибка


// var testVar = 22;

// var testVar = '667';


// let - объявление переменной
// можно перезаписать, как тип, так и значение

// const - объявление константы
// перезаписать значение нельзя
// нужно проинициализировать (т.е. присвоить значение)
// Нельзя: const x;

// var - переменная, не используем
// можно объявить более 1 переменной с одинаковым именем


// \ - экранирование символа
// `` - можно писать/вставлять многострочный текст
// `` (бектики) - template string (шаблонная строка)
// ${ИМЯ_ПЕРЕМЕННОЙ} - интерполяция - соединение строк с помощью вставки значения переменной. Применяется вместе с ``
// let str = 'Boy\'s ball';
// let str2 = "Boy's ball";
// let str3 = `Boy's ball`;

// let helloMessage = `Привет, дорогой ${str}`;

// const GLOBAL_SETTINGS = 3.14;

// V8


// {} - литерал объекта
// const obj = {
//     age: 22,
//     name: 'John',
//     gender: 'male',
//     isStudent: true,
//     location: {
//         city: 'Gomel',
//         street: 'sovetskaya'
//     }
// };

// let str = 'trgdfg' => литерал строки
// let newStr = new String('dsfdsf')


// console.log(obj);
// console.log(str);



// prompt, alert, confirm

// prompt(message, defaultValue)
// message - сообщение
// defaultValue - значение в инпуте по умолчанию

// const userName = prompt('Введите Ваше имя');

// console.log(userName);


// alert(message)
// alert('Пароль не подошел');



// confirm

// const result = confirm('Вам понравилось у нас?');




// -----------------------------------------
// ЗАДАЧИ
// -----------------------------------------

// 1
// console.log('Запускаем таймер');
// alert(5)
// alert(4)
// alert(3)
// alert(2)
// alert(1)
// alert(0)
// console.log('Обратный отсчет законен');

// 2
// const myName = 'Jenya';
// const mySurname = 'Famaliya';
// const myFavoriteDrink = 'tea';
// const myFavoriteAnimal = 'cat';
// console.log(myName);
// console.log(mySurname);
// console.log(myFavoriteDrink);
// console.log(myFavoriteAnimal);


