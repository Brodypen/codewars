// export function getMiddle(s: string) {
//   return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 ? 1 : 2);
//     // substr is deprecated, so don't use this.
// }

export function getMiddle(s: string) {
  const middle = Math.ceil(s.length / 2) - 1;
  return s.slice(middle, s.length - middle);
}
// Tried to use slice first, but didnt figure out the s.length - middle part.
