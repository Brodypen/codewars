/*
Description:
You're a square!
Given a number, return true if it is a perfect square, false if it is not.
*/
// First submission
// const isSquare = (n: number): boolean => {
//   return Math.round(Math.sqrt(n)) ** 2 === n;
// };
// export default isSquare;

// This is better, since default can be used to export a function. Rather than another line.
// I would keep it consistent with the codebase, i.e if the codebase uses arrow functions, then use arrow functions.
// Number.isInteger is a better way to check rather than Math.round then squaring and comparing to n.
export default function isSquare(n: number): boolean {
  return Number.isInteger(Math.sqrt(n));
}
