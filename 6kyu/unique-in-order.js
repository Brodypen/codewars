// var uniqueInOrder = function (iterable) {
//   //your code here - remember iterable can be a string or an array
//   if (!iterable) {
//     return [];
//   }
//   let result = [iterable[0]];
//   const newIterable = [...iterable];
//   for (let i = 1; i < newIterable.length; i++) {
//     if (newIterable[i - 1] != newIterable[i]) {
//       result.push(newIterable[i]);
//     }
//   }
//   return result;
// };


// Too much! Look at this.
var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};
