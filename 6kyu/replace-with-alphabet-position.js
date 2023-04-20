// function alphabetPosition(text) {
//   return text
//     .split("")
//     .filter((l) => l.toLowerCase() != l.toUpperCase())
//     .map((letter) => letter.toUpperCase().charCodeAt(0) - 64)
//     .join(" ");
// }

//Some optomizations you can do
// text.toUpperCase() then split. So you only need to upperCase once.
// Or you can even do this.
// .map((letter) => letter.charCodeAt(0) % 32) so you don't need to check upperCase/lowerCase

function alphabetPosition(text) {
  return text
    .split("")
    .filter((l) => l.toLowerCase() != l.toUpperCase())
    .map((letter) => letter.charCodeAt(0) % 32)
    .join(" ");
}

// Lastly you can do .replace(/[^a-zA-Z]/g, "") to remove all non letters.