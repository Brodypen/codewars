export class Kata {
  static disemvowel(str: string): string {
    const vowelArray = ["a", "e", "i", "o", "u"];

    return str
      .split("")
      .filter((letter) => !vowelArray.includes(letter.toLowerCase()))
      .join("");
  }
}
// Cool regex solution
// export class Kata {
//   static disemvowel(str: string): string {
//     return str.replace(/[aeiou]+/gi, "");
//   }
// }