// function reduceImpl(arr, callback, initial) {
//   let prev = initial;
//   for (let i = 0; i < arr.length; i++) {
//     prev.push(callback(prev, arr[i]));
//   }
//   return prev;
// }

// function fn(prev, curr) {
//   return curr * 2;
// }

// console.log(reduceImpl([1, 2, 3, 4, 5, 6], fn, []));

// function copyWithin(arr, target, start, end) {
//   let slice = arr.slice(start, end);
//   arr[target] = slice;
//   let res = arr.flat();
//   res.length = arr.length;
//   console.log(res);
// }

// console.log(copyWithin([1, 2, 3, 4, 5, 6], 2, 2, 5));

// console.log([1, 2, 3, 4, 5, 6].copyWithin(2,2,5));

// const lecture = {
//   teacher: "Vardges",
//   ask(question) {
//     console.log(this.teacher, question);
//   },
// };

// setTimeout(lecture.ask, 10, "why we lost this binding");
// setTimeout(lecture.ask.bind(lecture), 10, "why we lost this binding");

// var teacher = "Vardges";

// function ask(question) {
//   console.log(this.teacher, question);
// }

// function askAgain(question) {
//   "use strict";
//   console.log(this.teacher, question);
// }
// ask("what is the non strict");
// askAgain();
