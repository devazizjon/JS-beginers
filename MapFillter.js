// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// funcMap = array.map((item, index) => {
//     return item * 2
//     // console.log(item);

// })
// console.log(funcMap);

// const funcfilters = array.filter((item, index)=>{
//     if(item%2==0){
//         return true;
//     }
// })

// const funcfilters = array.filter(item => item % 2 == 0)
// console.log(funcfilters);


/////////////////============================================================================
const friends = [{
    name: 'Sarvarjon',
    surname: 'Xayrullayev',
    age: 14,
    jop: 'Doctor'
},
{
    name: 'Sardor',
    surname: 'Rashidov',
    age: 32,
    jop: 'taxi'
},
{
    name: 'Azizjon',
    surname: 'Mavlonov',
    age: 33,
    jop: 'Military'

},
{
    name: 'nizom',
    surname: 'Rashidov',
    age: 11,
    jop: 'taxi'
}, {
    name: 'malika',
    surname: 'Rashidov',
    age: 18,
    jop: 'taxi'
}, {
    name: 'Sardor',
    surname: 'Rashidov',
    age: 23,
    jop: 'taxi'
},
]

// const person=friends.map((item) =>{
//     console.log(item.age);
// })
const person = friends.filter((item) => item.age >= 18)
console.log(person);
//==================================filter 
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

//let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])

////////////////////////////////////======================================sortb
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
//===================
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
//======
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// [1, 2, 3, 4, 5]

/////====================================
var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  
  // sort by value
  items.sort(function (a, b) {
    return a.value - b.value;
  });
  
  // sort by name
  items.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
  //===================================
  let stringArray = ['Blue', 'Humpback', 'Beluga'];
let numericStringArray = ['80', '9', '700'];
let numberArray = [40, 1, 5, 200];
let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // [700, 80, 9]
numericStringArray.sort(compareNumbers); // [9, 80, 700]

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, 700, 80, 9]
mixedNumericArray.sort(compareNumbers); // [1, 5, 9, 40, 80, 200, 700]
//======================
var items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
//==============================
// the array to be sorted
const data = ['delta', 'alpha', 'charlie', 'bravo'];

// temporary array holds objects with position and sort-value
const mapped = data.map((v, i) => {
  return { i, value: someSlowOperation(v) };
})

// sorting the mapped array containing the reduced values
mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

const result = mapped.map(v => data[v.i]);
///===================================Reducse
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
//================
[0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
  });
  
//======
var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
  }, []);
  // flattened равен [4, 5, 2, 3, 0, 1]

  ///=====================
  // Шаги алгоритма ECMA-262, 5-е издание, 15.4.4.22
// Ссылка (en): http://es5.github.io/#x15.4.4.22
// Ссылка (ru): http://es5.javascript.ru/x15.4.html#x15.4.4.22
if ('function' !== typeof Array.prototype.reduceRight) {
    Array.prototype.reduceRight = function(callback/*, initialValue*/) {
      'use strict';
      if (null === this || 'undefined' === typeof this) {
        throw new TypeError('Array.prototype.reduce called on null or undefined');
      }
      if ('function' !== typeof callback) {
        throw new TypeError(callback + ' is not a function');
      }
      var t = Object(this), len = t.length >>> 0, k = len - 1, value;
      if (arguments.length >= 2) {
        value = arguments[1];
      } else {
        while (k >= 0 && !k in t) {
          k--;
        }
        if (k < 0) {
          throw new TypeError('Reduce of empty array with no initial value');
        }
        value = t[k--];
      }
      for (; k >= 0; k--) {
        if (k in t) {
          value = callback(value, t[k], k, t);
        }
      }
      return value;
    };
  }
//================================================================ Every Arry
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
//=================================================
// Arrow function
// every((element) => { ... } )
// every((element, index) => { ... } )
// every((element, index, array) => { ... } )

// // Callback function
// every(callbackFn)
// every(callbackFn, thisArg)

// // Inline callback function
// every(function callbackFn(element) { ... })
// every(function callbackFn(element, index) { ... })
// every(function callbackFn(element, index, array){ ... })
// every(function callbackFn(element, index, array) { ... }, thisArg)  

///=====================
if (!Array.prototype.every) {
    Array.prototype.every = function(callbackfn, thisArg) {
      'use strict';
      var T, k;
  
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }
  
      // 1. Let O be the result of calling ToObject passing the this
      //    value as the argument.
      var O = Object(this);
  
      // 2. Let lenValue be the result of calling the Get internal method
      //    of O with the argument "length".
      // 3. Let len be ToUint32(lenValue).
      var len = O.length >>> 0;
  
      // 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
      if (typeof callbackfn !== 'function' && Object.prototype.toString.call(callbackfn) !== '[object Function]') {
        throw new TypeError();
      }
  
      // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
      if (arguments.length > 1) {
        T = thisArg;
      }
  
      // 6. Let k be 0.
      k = 0;
  
      // 7. Repeat, while k < len
      while (k < len) {
  
        var kValue;
  
        // a. Let Pk be ToString(k).
        //   This is implicit for LHS operands of the in operator
        // b. Let kPresent be the result of calling the HasProperty internal
        //    method of O with argument Pk.
        //   This step can be combined with c
        // c. If kPresent is true, then
        if (k in O) {
          var testResult;
          // i. Let kValue be the result of calling the Get internal method
          //    of O with argument Pk.
          kValue = O[k];
  
          // ii. Let testResult be the result of calling the Call internal method
          // of callbackfn with T as the this value if T is not undefined
          // else is the result of calling callbackfn
          // and argument list containing kValue, k, and O.
          if(T) testResult = callbackfn.call(T, kValue, k, O);
          else testResult = callbackfn(kValue,k,O)
  
          // iii. If ToBoolean(testResult) is false, return false.
          if (!testResult) {
            return false;
          }
        }
        k++;
      }
      return true;
    };
  }
// ===================
function isBigEnough(element, index, array) {
    return element >= 10;
  }
  [12, 5, 8, 130, 44].every(isBigEnough);   // false
  [12, 54, 18, 130, 44].every(isBigEnough); // true
//===----------------------------------------------------------------
function isSubset(array1, array2) {
    // returns true if array2 is a subset of array1
    
    return array2.every(function (element) {
      return array1.includes(element);
    });
  }
  
  console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
  console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
  ///================================================================
  [12, 5, 8, 130, 44].every(x => x >= 10);   // false
[12, 54, 18, 130, 44].every(x => x >= 10); // true
//================================================================
// ---------------
// Modifying items
// ---------------
let arr = [1, 2, 3, 4];
arr.every( (elem, index, arr) => {
  arr[index+1] -= 1
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 2
})

// Loop runs for 3 iterations, but would
// have run 2 iterations without any modification
//
// 1st iteration: [1,1,3,4][0] -> 1
// 2nd iteration: [1,1,2,4][1] -> 1
// 3rd iteration: [1,1,2,3][2] -> 2

// ---------------
// Appending items
// ---------------
arr = [1, 2, 3];
arr.every( (elem, index, arr) => {
  arr.push('new')
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 4
})

// Loop runs for 3 iterations, even after appending new items
//
// 1st iteration: [1, 2, 3, new][0] -> 1
// 2nd iteration: [1, 2, 3, new, new][1] -> 2
// 3rd iteration: [1, 2, 3, new, new, new][2] -> 3

// ---------------
// Deleting items
// ---------------
arr = [1, 2, 3, 4];
arr.every( (elem, index, arr) => {
  arr.pop()
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 4
})

// Loop runs for 2 iterations only, as the remaining
// items are `pop()`ed off
//
// 1st iteration: [1,2,3][0] -> 1
// 2nd iteration: [1,2][1] -> 2
//=======================================SOME ARRYS
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
//==========================
// SINTACS
// Arrow function
// some((element) => { ... } )
// some((element, index) => { ... } )
// some((element, index, array) => { ... } )

// // Callback function
// some(callbackFn)
// some(callbackFn, thisArg)

// // Inline callback function
// some(function callbackFn(element) { ... })
// some(function callbackFn(element, index) { ... })
// some(function callbackFn(element, index, array){ ... })
// some(function callbackFn(element, index, array) { ... }, thisArg)
//===================
// Production steps of ECMA-262, Edition 5, 15.4.4.17
// Reference: https://es5.github.io/#x15.4.4.17
if (!Array.prototype.some) {
    Array.prototype.some = function(fun, thisArg) {
      'use strict';
  
      if (this == null) {
        throw new TypeError('Array.prototype.some called on null or undefined');
      }
  
      if (typeof fun !== 'function') {
        throw new TypeError();
      }
  
      var t = Object(this);
      var len = t.length >>> 0;
  
      for (var i = 0; i < len; i++) {
        if (i in t && fun.call(thisArg, t[i], i, t)) {
          return true;
        }
      }
  
      return false;
    };
  }
  //...================================================================
  function isBiggerThan10(element, index, array) {
    return element > 10;
  }
  
  [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
  [12, 5, 8, 1, 4].some(isBiggerThan10); // true
//================
[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true
//================
const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true

  ///================================================================
  const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true
//================= FIND ARRYS
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
//=========================
// Arrow function
// find((element) => { ... } )
// find((element, index) => { ... } )
// find((element, index, array) => { ... } )

// // Callback function
// find(callbackFn)
// find(callbackFn, thisArg)

// // Inline callback function
// find(function callbackFn(element) { ... })
// find(function callbackFn(element, index) { ... })
// find(function callbackFn(element, index, array){ ... })
// find(function callbackFn(element, index, array) { ... }, thisArg)

//=============
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];
  
  function isCherries(fruit) {
    return fruit.name === 'cherries';
  }
  
  console.log(inventory.find(isCherries));
  // { name: 'cherries', quantity: 5 }
  //=============================
  const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];
  
  const result = inventory.find( ({ name }) => name === 'cherries' );
  
  console.log(result) // { name: 'cherries', quantity: 5 }
//===================
function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  
  console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
  console.log([4, 5, 8, 12].find(isPrime)); // 5
  ///==================================
  // Declare array with no elements at indexes 2, 3, and 4
const array = [0,1,,,,5,6];

// Shows all indexes, not just those with assigned values
array.find(function(value, index) {
  console.log('Visited index ', index, ' with value ', value);
});

// Shows all indexes, including deleted
array.find(function(value, index) {
  // Delete element 5 on first iteration
  if (index === 0) {
    console.log('Deleting array[5] with value ', array[5]);
    delete array[5];
  }
  // Element 5 is still visited even though deleted
  console.log('Visited index ', index, ' with value ', value);
});
// expected output:
// Deleting array[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6
//============================================ FINDINDEX ARRAY =================================================
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
//=======================
// Arrow function
// findIndex((element) => { ... } )
// findIndex((element, index) => { ... } )
// findIndex((element, index, array) => { ... } )

// // Callback function
// findIndex(callbackFn)
// findIndex(callbackFn, thisArg)

// // Inline callback function
// findIndex(function callbackFn(element) { ... })
// findIndex(function callbackFn(element, index) { ... })
// findIndex(function callbackFn(element, index, array){ ... })
// findIndex(function callbackFn(element, index, array) { ... }, thisArg)
  
//================
function isPrime(num) {
    for (let i = 2; num > i; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
  console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)
  