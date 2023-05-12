// type pairsType = {
//   [key: string]: any;
// };
// export function dirReduc(arr: string[]): string[] {
//   const pairs: pairsType = {
//     NORTH: "SOUTH",
//     SOUTH: "NORTH",
//     EAST: "WEST",
//     WEST: "EAST",
//   };
//   let result: string[] = [];
//   for (const dir of arr) {
//     if (result && pairs[dir] === result[result.length - 1]) {
//       result.pop();
//     } else {
//       result.push(dir);
//     }
//   }

//   return result;
// }
// cleaner way below
export function dirReduc(arr: string[]): string[] {
  const opposites: { [item: string]: string } = {
    SOUTH: "NORTH",
    NORTH: "SOUTH",
    WEST: "EAST",
    EAST: "WEST",
  };
  let stack: string[] = [];
  for (let dir of arr) {
    stack[stack.length - 1] === opposites[dir] ? stack.pop() : stack.push(dir);
  }
  return stack;
}