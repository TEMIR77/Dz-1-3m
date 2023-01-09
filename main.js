// 1. перепишите функцию через рекурсию
// function printArrayValues(arr) {
//  for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i], 'array');
//  }
// }

// printArrayValues([1, 2, 3]);

//1


// let i = 0;
 
// function consoleRec(arr) {
//    console.log(arr[i]);
//    i++;
//    if (i < arr.length) consoleRec(arr);
// }
 
// console.log(consoleRec([1,2,3]), 'array' )
   


// 2. проверка на знании с работой массивами
// дано такой массив let arr = [4,5,6]
// создайте новый массив при этом сначало заполните массив
// 1,2,3 а потом копируйте arr и добавьте остальные цифры до 10и
// ожидаемый результат должен так [1,2,3,4,5,6,7,8,9,10]

//2
// 








// 3. Получить последний элемент из массива
// let arr = [1,2,3,4,5] - получить 5

////3
// let arr = [1, 2, 3, 4, 5]

// function  panf(arr) {
//     return arr[arr.length - 1];
// }
// console.log( panf (arr));



// 4. Напишите функцию countChar который считает переданный символ в массиве
// countChar('loremipsumdolor', 'o'); должен вернуть 3 так как о 3 раза участвует

let text = 'loremipsumdolor'
let regex  = /o/g;
console.log(text.match(regex));
