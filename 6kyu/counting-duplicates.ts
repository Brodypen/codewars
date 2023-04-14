// export function duplicateCount(text: string): number {
//   //...
//   let objCounter = text
//     .toLowerCase()
//     .split("")
//     .reduce(
//       (count: any, item: any) => ((count[item] = count[item] + 1 || 1), count),
//       {}
//     );
//   let counter = 0;
//   for (let prop in objCounter) {
//     if (objCounter[prop] > 1) {
//       counter++;
//     }
//   }
//   return counter;
// }

export function duplicateCount(text: string): number {
  let array = text.toLowerCase().split("");
  return [...new Set(array.filter((e, i) => array.indexOf(e) !== i))].length;
}
