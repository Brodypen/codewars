/*
Description:
Minimize Sum Of Array (Array Series #1)
Given an array of intgers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
The sort() method does not always behave as expected (for example, it does not always sort numbers in numerical order).
This was a issue for me as I didn't realize that the sort() method sorts by string value, not by number value.


*/

// export function minSum(arr: number[]): number {
//   const newArr = arr;
//   newArr.sort(function (a, b) {
//     return a - b;
//   });
//   let sum = 0;
//   console.log(newArr);
//   for (let i = 0; i < arr.length / 2; i++) {
//     console.log(sum);
//     sum += newArr[i] * newArr[arr.length - i - 1];
//   }
//   console.log(sum);
//   return sum;
// }

// Best practice!
export function minSum(arr: number[]) {
  return [...arr]
    .sort((a, b) => a - b)
    .reduce((sum, x, i, sorted) => sum + x * sorted.pop()!, 0);
}
// They don't return arr.sort because they don't want to mutate the original array.
// So they use the spread operator to create a new array.

// Reduce is a great way to sum up an array. I also like the use of the pop() method to get the last element of the array.
