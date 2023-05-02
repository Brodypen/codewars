// export function findEvenIndex(arr: number[]): number {
//   if (arr.length < 2) {
//     return 0;
//   }
//   let l = 0;
//   let leftSide = 0;
//   let r = arr.length - 1;
//   let rightSide = arr.slice(1).reduce((total, curr) => total + curr, 0);
//   while (l < r) {
//     if (leftSide === rightSide) {
//       return l;
//     }
//     leftSide += arr[l];
//     rightSide -= arr[l + 1];
//     l++;
//   }
//   if (leftSide === rightSide) {
//     return l;
//   }
//   return -1;
// }

// This dowhile is much better!
export function findEvenIndex(arr: number[]): number {
  let i = 0,
    lSum = 0,
    rSum = arr.reduce((acc, cur) => acc + cur, 0);

  do {
    const n = arr[i];
    rSum -= n;
    if (lSum === rSum) {
      return i;
    }
    lSum += n;
    i++;
  } while (i < arr.length);

  return -1;
}
// It removes the checking at the end, and looks so much cleaner!