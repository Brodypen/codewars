/*
What I've learned:
Repetition learning of reduce and infix operator.
*/

export function squareSum(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num ** 2, 0);
}
f