/*
What I've learned:

parseInt() is a function that returns an integer from a string. A radix can be specified to indicate the base (Default is 10).) 
*/
// My solution
// export function narcissistic(value: number): boolean {
//   let narcissiticNumber = 0;
//   let valueCopy = value;
//   let len = value.toString().length;
//   for (let i = 0; i < len; i++) {
//     narcissiticNumber += (valueCopy % 10) ** len;
//     valueCopy = Math.floor(valueCopy / 10);
//   }
//   return narcissiticNumber === value;
// }
// Best practice
export const narcissistic = (value: number): boolean =>
  value ===
  value
    .toString()
    .split("")
    .reduce((acc, n, _, xs) => acc + parseInt(n) ** xs.length, 0);
