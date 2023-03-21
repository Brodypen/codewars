/*
Find the highest and lowest number in a string of numbers.
*/

// My solution O(n)
export class Kata {
  static highAndLow(numbers: string): string {
    let max = Number.NEGATIVE_INFINITY;
    let min = Number.POSITIVE_INFINITY
    const arrOfNums = numbers.split(' ').map(function(str){
      let strToInt = parseInt(str);
      if(max < strToInt){
        max = strToInt;
      }
      if(min > strToInt){
        min = strToInt;
      }
    });
    return `${max} ${min}`;
  }
}
// A lot of other solutions find the max and min in two passes, but one pass is better.
// Also the Math.min and Math.max do not work with large arrays.
// Lastly, the other solution I found was great was using .reduce to find the max and min in one pass. This is also good.