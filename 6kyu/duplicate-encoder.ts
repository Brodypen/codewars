// export function duplicateEncode(word: string) {
//   // ...
//   let wordSet = word
//     .toLowerCase()
//     .split("")
//     .reduce((total: any, letter: string) => {
//       total[letter] ? total[letter]++ : (total[letter] = 1);
//       return total;
//     }, {});
//   console.log(wordSet);
//   let result = "";
//   for (const w of word.toLowerCase()) {
//     if (wordSet[w] === 1) {
//       result += "(";
//     } else {
//       result += ")";
//     }
//   }
//   return result;
// }

// Clever solution.
// export function duplicateEncode(word: string) {
//   // ...
//   return word
//     .toLowerCase()
//     .split("")
//     .map((a, i, w) => {
//       return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
//     })
//     .join("");
// }
// Very cool, by using indexOf and lastIndexOf you can tell if there is a duplicate.
// However runtime is O(n^2) because you do indexOf and lastIndexOf for each letter.

export function duplicateEncode(word: string) {
  const dict = {};

  for (let ch of word) {
    if (dict[ch.toLowerCase()]) {
      dict[ch.toLowerCase()] = ")";
    } else {
      dict[ch.toLowerCase()] = "(";
    }
  }

  return word
    .split("")
    .map((ch) => dict[ch.toLowerCase()])
    .join("");
}
// This is similar to my solution, but much cleaner and concise! I would just make another word as toLowerCase, instead of calling
// toLowerCase each time.

// export function duplicateEncode(word: string) {
//   const chars = word.toLowerCase().split("");

//   return chars
//     .map((char) => (chars.filter((c) => c === char).length > 1 ? ")" : "("))
//     .join("");
// }
// Another great solution, however it is O(n^2) because you are filtering for each letter.