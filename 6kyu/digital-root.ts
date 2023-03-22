/*
Find the digital root of a number.
*/
export const digitalRoot = (n: number): number => {
  if (n < 10) {
    return n;
  }

  let num = 0;
  while (n >= 10) {
    num += n % 10;
    n = Math.floor(n / 10);
  }
  return digitalRoot(num + n);
};

// Clever solution
// export function digitalRoot(n: number): number {
//   return ((n - 1) % 9) + 1;
// }