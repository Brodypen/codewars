export function findUniq(arr: Array<number>): number {
  arr = arr.sort();
  return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0];
}
