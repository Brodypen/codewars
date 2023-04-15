export function xo(str: string): boolean {
  // your code here
  let xCounter = 0;
  let oCounter = 0;
  for (let letter of str.toLowerCase()) {
    if (letter === "x") xCounter++;
    if (letter === "o") oCounter++;
  }
  return xCounter === oCounter;
}

// Cool solution. Remove x or o and compares length.
// export function xo(str: string) {
//   return (
//     str.toLowerCase().split("x").length == str.toLowerCase().split("o").length
//   );
// }