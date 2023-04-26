// My solution, but NOT THE BEST.
function sumTwoSmallestNumbers(numbers) {
  let [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}
// Testing
// This is the best performace solution, since it is O(n).
// function sumTwoSmallestNumbers(numbers) {
//   var min = Number.MAX_SAFE_INTEGER;
//   var secondMin = Number.MAX_SAFE_INTEGER;

//   var n;
//   for (let i = 0; i < numbers.length; i++) {
//     n = numbers[i];
//     if (n < min) {
//       secondMin = min;
//       min = n;
//     } else if (n < secondMin) {
//       secondMin = n;
//     }
//   }

//   return min + secondMin;
// }
