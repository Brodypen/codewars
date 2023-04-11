// export function isIsogram(str: string): boolean {
//   // We will use a set, if there is the letter in the set, return false.
//   let lettersSet = new Set<string>();
//   // We have toLowerCase as same chars may not be the same case.
//   for (const letter of str.toLowerCase()) {
//     if (lettersSet.has(letter)) {
//       return false;
//     }
//     lettersSet.add(letter);
//   }
//   return true;
// }

// Way better solution!
export function isIsogram(str: string): boolean {
  return new Set(str.toLowerCase()).size === str.length;
}