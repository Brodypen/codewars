// Count the vowels in a string
// My solution
export class Kata {
  static getCount(str: string): number {
    const vowels = new Set<string>(["a", "e", "i", "o", "u"]);
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.has(str[i])) {
        count++;
      }
    }
    return count;
  }
}
// Clever solution
// export class Kata {
//   static getCount(str: string) {
//     return [...str].filter((char) => "aeiou".includes(char)).length;
//   }
// }
// Love the use of filter here.
