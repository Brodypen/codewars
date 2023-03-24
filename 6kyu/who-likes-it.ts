/*
Return who likes it.
*/
// My submission
// export const likes = (a: string[]): string => {
//   let returnString = "";
//   switch (a.length) {
//     case 0: {
//       returnString = `no one likes this`;
//       break;
//     }
//     case 1: {
//       returnString = `${a[0]} likes this`;
//       break;
//     }
//     case 2: {
//       returnString = `${a[0]} and ${a[1]} like this`;
//       break;
//     }
//     case 3: {
//       returnString = `${a[0]}, ${a[1]} and ${a[2]} like this`;
//       break;
//     }
//     default: {
//       returnString = `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
//     }
//   }
//   return returnString;
// };
// Clean one
export function likes(names: string[]): string {
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}