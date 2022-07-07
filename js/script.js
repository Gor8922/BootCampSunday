// function foo(arr, num) {
//   let result = [];
//   if (num === undefined) {
//     result.push(arr[0]);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (i <= num - 1) {
//       result.push(arr[i]);
//     }
//   }
//   console.log(result);
// }
// foo([1, 2, 3, 4, 5, 6, 7], 3);
// foo([1, 2, 3, 4, 5, 6, 7]);
// function boo(obj, n) {
//   if (obj[n]) {
//     console.log(obj[n]);
//   } else {
//     obj.dummy = null;
//   }
//   console.log(obj);
// }
// boo({ name: "Gor" }, "na");
// function workStr(arr) {
//   let result = "";
//   for (i = 0; i < arr.length; i++) {
//     result += arr[i] + " ";
//   }
//   return result;
// }
// console.log(workStr(["barev", "hajox"]));
//
// const obj = {};
// Object.defineProperty(obj, "a", {
//   value: 1,
//   configurable: true,
//   writable: true,
//   enumerable: true,
// });
// console.log(obj);
// const obj1 = {};
// Object.defineProperty(obj1, "aa", {
//   value: 15,
// });
// obj1.aa = 14;
// console.log(obj1);
// function foo(obj, key, value) {
//   let c = Object.getOwnPropertyDescriptor(obj, key);
//   if (c.writable) {
//     obj[key] = value;
//   } else {
//     console.log(false);
//   }
//   console.log(obj);
// }
// foo({ aa: "esoi" }, "aa", 5);
// function boo(obj) {
//   return Object.keys(obj);
// }
// console.log(
//   boo({
//     name: "HHayk",
//     age: 25,
//   })
// );
// function boo(obj) {
//   return Object.values(obj);
// }
// console.log(
//   boo({
//     name: "HHayk",
//     age: 25,
//   })
// );
// function goo(obj) {
//   let res = [];
//   for (let el in obj) {
//     res.push([el, obj[el]]);
//   }
//   return res;
// }
// console.log(
//   goo({
//     name: "HHayk",
//     age: 25,
//     hobby: "chess",
//     score: 25,
//   })
// );
// function compies(obj1, obj2) {
//   let res = Object.assign(obj1, obj2);
//   return res;
// }
// console.log(
//   compies(
//     {
//       name: "HHayk",
//       age: 25,
//     },
//     {
//       hobby: "chess",
//       score: 25,
//     }
//   )
// );
// function arrConc(arr1, arr2) {
//   let newArr = [];
//   for (let el of arr1) {
//     newArr.push(el);
//   }
//   for (let el of arr2) {
//     newArr.push(el);
//   }
//   console.log(newArr);
// }
// arrConc([1, 2, 3], [4, 5, 6]);

//  Array every, map methods implemet AGAINNNN
// function everyMethod(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     const cond = callback(arr[i], i, arr);
//     if (!cond) return false;
//   }
//   return true;
// }
// function argument(item) {
//   if (item < 10) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(everyMethod([1, 2, 10, 4], argument));

// function map(arr, callback) {
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr1.push(callback(arr[i]));
//   }
//   return arr1;
// }
// function call(elem) {
//   return elem + 2;
// }
// console.log(map([1, 2, 10, 4], call))

// function filter(arr, callback) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let res = callback(arr[i], i, arr);
//     if (res) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// function callFilter(elem) {
//   return elem === 10;
// }
// console.log(filter([1, 2, 10, 4], callFilter));

// function reduceR(arr, callback, initial) {
//   let prev = initial;
//   for (let i = 0; i < arr.length; i++) prev = callback(prev, arr[i]);
//   return prev;
// }

// function sqrt(prev, curr) {
//   return prev + curr;
// }

// console.log(reduceR([1, 2, 10, 4], sqrt, 0));

// const studentsArray = [
//   {
//     name: "Armen",
//     age: 20,
//     gpa: 3,
//     grades: [1, 50, 30, 55, 88, 100],
//   },
//   {
//     name: "Anna",
//     age: 28,
//     gpa: 4,
//     grades: [1, 3, 5, 7],
//   },
//   {
//     name: "Kim",
//     age: 24,
//     gpa: 1,
//     grades: [6, 88, 5, 99],
//   },
// ];

// function aaa(arr) {
//   return arr.map((elem) => {
//     let res = elem.grades.reduce((prev, curr) => {
//       return prev + curr;
//     });
//     return (elem.average = res / elem.grades.length);
//   });
// }

// console.log(aaa(studentsArray));
