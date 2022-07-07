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
