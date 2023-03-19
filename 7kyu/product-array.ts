/*
What I've learned:
Repeat of reduce and map. Can squeeze into one line like so.

*/
// export function productArray(nums: number[]): number[] {
//   return nums.map(newArr) => nums.reduce((sum, num) => sum * num) /newArr);
// }

export function productArray(nums: number[]): number[] {
  const totalProduct = nums.reduce((sum, num) => sum * num, 1);
  return nums.map((newArr) => totalProduct / newArr);
}
