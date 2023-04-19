// export function findShort(s: string): number {
//   const sArr = s.split(" ");
//   let minWord = sArr[0].length;
//   for (const word of sArr) {
//     if (word.length < minWord) {
//       minWord = word.length;
//     }
//   }
//   return minWord;
// }

// This solution is nice.
export function findShort(s: string): number {
  return Math.min(...s.split(" ").map((w) => w.length));
}