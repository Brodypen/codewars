// export function accum(s: string): string {
//   let result = ""
//   const str = s.toUpperCase()
//   let i = 0
//   let j = 0
  
//   for (i = 0; i < str.length; i++){
//     result += str[i]
//     for(j = 0; j < i; j++){
//       result += str[i].toLowerCase()
//     }
//     result += "-"
//   }
//   return result.slice(0,-1)
// }

export function accum(s: string): string {
  return s
    .split("")
    .map((elem, index) => elem.toUpperCase() + elem.toLowerCase().repeat(index))
    .join("-");
}
// Very cool solution with .repeat()!