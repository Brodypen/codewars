/*
Product Of Maximums Of Array (Array Series #2)

What I have learned.

Splice and Slice are both used to remove elements from an array. Splice mutates the original array, while slice does not.
Splice syntax is array.splice(start, deleteCount, item1, item2, ...), where start is the index to start at, deleteCount is the number of elements to remove, and item1, item2, ... are the elements to add to the array.
Slice syntax is array.slice(start, end), where start is the index to start at, and end is the index to end at (not included). If end is not specified, it will slice until the end of the array.
*/

// First Submission
// export function maxProduct(numbers: number[], size: number): number {
//   // your code here
//   const newNumbers = [...numbers].sort((a,b) => b-a)
//   let sum = newNumbers[0];
//   for(let i = 1; i < size; i++){
//     sum *= newNumbers[i];
    
//   }
//   return sum;
// }

export function maxProduct(numbers: number[], size: number): number {
  // Does not mutate original array
  return [...numbers]
    .sort((a, b) => b - a)
    .splice(0, size)
    .reduce((sum, n) => sum * n, 1);
}
// Best Practice, can use either splice or slice.