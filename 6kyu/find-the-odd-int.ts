/*
Given an array, find the int that appears an odd number of times.
*/
// My solution, it sorts in O(nlogn) time then iterates through the array in O(n) time.
export const findOdd = (xs: number[]): number => {
  const newArr = [...xs].sort();
  let result = 0;
  let appearanceCounter = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == newArr[i + 1]) {
      appearanceCounter++;
    } else if (appearanceCounter % 2 == 0) {
      return newArr[i];
    } else {
      appearanceCounter = 0;
    }
  }
  return result;
};

// Other solutions
// export const findOdd = (xs: number[]): number => {
//   return xs.reduce((a, b) => a ^ b);
// };
// This is cool using Bitwise XOR, but not the best practice.

// Favorite solution
// export const findOdd = (xs: number[]): number => {
//   return xs.find((a) => xs.filter((b) => b === a).length % 2 === 1) || 0;
// };
// Great use to filter and .find, love this one.
