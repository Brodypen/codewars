// My solution
// export class Kata {
//   static squareDigits(num: number): number {
//     const stringNum = num.toString();
//     let newNum: string = "";
//     for (let sNum of stringNum) {
//       newNum += parseInt(sNum) ** 2;
//     }
//     return parseInt(newNum);
//   }
// }
// Best solution
export class Kata {
  static squareDigits(num: number) {
    return +num
      .toString()
      .split("")
      .map((n) => Math.pow(+n, 2))
      .join("");
  }
}
