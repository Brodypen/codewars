// function getSum(a, b) {
//   if (b < a) {
//     a = b + a;
//     b = a - b;
//     a = a - b;
//   }
//   let result = a;
//   for (let i = a + 1; i <= b; i++) {
//     result += i;
//   }
//   return result;
// }
// Better solution here.
const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

