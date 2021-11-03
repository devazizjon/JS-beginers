// let array = ['assalomalekum', 'salom', 'salomalekum', 'valekum assalom']
// for ( index = 0; index < array.length; index++) {
//     let item = array[index];
//     console.log(item); //s
//     // console.log(index); //s
//     // console.log(array); //s
// }
// let array = ['assalomalekum', 'salom', 'salomalekum', 'valekum assalom']
// array.forEach(function (it, i, array) {
//     console.log(`${it}======${i}======${array} `); //
// })
// let array = ['assalomalekum', 'salom', 'salomalekum', 'valekum assalom']
// array.map(function (it, i, array) {
//     console.log(`${it}======${i}======${array} `);
// })

// const arr = ['Mohina', 21, 'Sevara', 11, 'Dildora', 22, '']
// const [name1, name2, name3, name4] = arr
// console.log(name1);

// const arr = ['Mohina', 21, 'Sevara', 11, 'Dildora', 22, '']

// arr.map(function (item, index, array) {
//     console.log(index, item);
// })
// console.log(...arr); //stringify


// const arr = ['sadlk', 'asd', 'ads', 'adsads']
// const arry = ['sa', 'asd', 'sadd', 'fdf', 'fdf']
// const all = [...arr, ...arry]
// console.log(all); //massiv
// console.log(...all); //string

// const arr = ['sadlk', 'asd', 'ads', 'adsads', 'jj', 'sddf', 'sdfsf', 'sdffsd', 'sdffs']

// const [name1, name2, name3, ...res] = arr
// console.log(arr)

// const number = [2, 2, 7, 7, 4, 5]
// let sum = (a, b, ...res) => {
//     console.log(res);
//     return a + b
// }
// console.log(sum(...number));

// const array = [{
//         name: 'anna',
//         age: 21
//     },
//     {
//         name: 'Dildora',
//         age: 21
//     }
// ]
// for (let index = 0; index <= array.length - 1; index++) {
//     console.log(array[index].age);
// }
// array.forEach(function (item, index, array) {
//     console.log(index, item, array);
// })

// array.map(function (item, index, array) {
//     console.log(index, item);
// })        








////////=======================================
var myArray = [
    [1, 2, 3],//0
    [4, 5, 6],//1
    [7, 8, 9],//2
    [
        [10, 11, 12],//0
        13,//1
        14//2
    ]//3
];

for (i = 0; i < myArray.length; i++) {
   
    console.log(myArray[i][0]) ;
}