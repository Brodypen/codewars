/*
Reverse words that are five or more letters long.
Great learning exercise for using the split, reverse, and join methods.
*/
// My submission
export function spinWords(words: string): string {
  return words
    .split(" ")
    .map((str: string) =>
      str.length >= 5 ? str.split("").reverse().join("") : str
    )
    .join(" ");
}
