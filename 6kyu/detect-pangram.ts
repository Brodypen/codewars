// export const isPangram = (phrase: string): boolean => {
//   const alphabets = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   const alphaSet = new Set(alphabets);
//   console.log(phrase);
//   for (const letter of phrase.toLowerCase()) {
//     alphaSet.delete(letter);
//   }
//   return alphaSet.size === 0;
// };

// Cool solution below
export const isPangram = (phrase: string): boolean =>
  new Set(phrase.toLowerCase().match(/[a-z]/g)).size === 26