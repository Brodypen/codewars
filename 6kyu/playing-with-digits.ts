// export class G964 {
//   public static digPow = (n: number, p: number) => {
//     const bigNum = (n: number, p: number): number => {
//       console.log(n);
//       console.log("p", p);
//       if (n < 10) {
//         return Math.pow(n, p);
//       }
//       return (
//         Math.pow(Math.floor(n % 10), p) + bigNum(Math.floor(n / 10), p - 1)
//       );
//     };

//     const total = bigNum(n, p + n.toString().length - 1);

//     return total % n === 0 ? total / n : -1;
//   };
// }

export class G964 {
  public static digPow = (number: number, power: number) => {
    const sumOfPowers = number
      .toString()
      .split("")
        .map((digit) => parseInt(digit))
      .reduce(
        (total, currentNumber, index) =>
          total + Math.pow(currentNumber, power + index),
        0
      );

    return sumOfPowers % number ? -1 : sumOfPowers / number;
  };
}
