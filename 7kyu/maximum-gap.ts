/*

What I've learned:
Repeated sort,

*/
// First submission
// export function maxGap(nums: number[]): number {
//   const newNum: number[] = [...nums].sort((a, b) => a - b);
//   let largestGap = 0;
//   for (let i = 0; i < newNum.length - 1; i++) {
//     if (largestGap < newNum[i + 1] - newNum[i]) {
//       largestGap = newNum[i + 1] - newNum[i];
//     }
//   }
//   return largestGap;
// }
// Second submission
export function maxGap(nums: number[]): number {
  let arr: number[] = [...nums].sort((x, y) => x - y);
  return Math.max(...arr.map((x, i, a) => a[i + 1] - x).slice(0, -1));
}
// Better readability.