/*
Array Leaders (Array Series #3)
What I learned: I remembered how the unshift method is to add elements to the beginning of an array.
Also the big O notation is more effective for this first one than the second one.
*/
export function arrayLeaders(numbers: number[]): number[] {
  const newNumbers: number[] = [];
  let sum = 0;
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] > sum) {
      newNumbers.unshift(numbers[i]);
    }
    sum += numbers[i];
  }
  return newNumbers;
}

// Second solution, less effective as no memory storage of sum. However, it is more readable.

// export const arrayLeaders = (numbers: number[]) =>
//   numbers.filter(
//     (item, i) => item > numbers.slice(i + 1).reduce((a, b) => a + b, 0)
//   );
//