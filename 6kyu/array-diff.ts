/*
Given two arrays, remove the values in array a, which are present in array b.
*/
// My solution
export function arrayDiff(a: number[], b: number[]): number[] {
  return [...a].filter((anum) => !b.includes(anum));
}
