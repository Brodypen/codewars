/*
https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

given a integer return string "Even" or "Odd" depending on the number oddity.
Refactor to arrow function
*/
// export function even_or_odd(n: number): string {
//   return n % 2 ? "Odd" : "Even";
// }

// Best practice would be setting n%2 === 0, and then switching the truth values for better readability.
export const even_or_odd = (n: number): string => {
  return n % 2 ? "Odd" : "Even";
};