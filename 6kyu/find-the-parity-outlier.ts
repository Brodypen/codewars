// export function findOutlier(integers: number[]): number {
//   // There are two parts, find if outlier is even/odd and find the outlier in the array.
//   // Perhaps a hashmap where you can only be even or odd, if there is another even return the odd number.
//   const map1 = new Map();
//   for (const nums of integers){
//     console.log(nums)
//     console.log(map1)
//     if(map1.has(Math.abs(nums)%2)){
       
//       if(map1.has(Math.abs((nums+1))%2)){
//       return map1.get(Math.abs((nums+1))%2)
//         }
//     }
//     map1.set(Math.abs(nums%2), nums)
//   }
//   return integers[integers.length - 1];
  
// }
// Terrible solution, but this is in O(n) time and O(n) space. There is a way to do it with O(1) space.

export function findOutlier(integers: number[]): number {
  if (integers.slice(0, 3).filter((i) => i % 2 !== 0).length > 1) {
    return integers.find((v) => v % 2 === 0) || 0;
  } else {
    return integers.find((v) => v % 2 !== 0) || 0;
  }
}
// Great solution. Find if the first three nums are even and odd, then just find the first even or odd number.
