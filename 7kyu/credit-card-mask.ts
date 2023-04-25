export function maskify(cc: string): string {
  if (cc.length <= 4) {
    return cc;
  }
  let result = "";
  for (let i = 0; i < cc.length - 4; i++) {
    result += "#";
  }
  return result + cc.slice(-4);
}

// You can use regex like so
// export function maskify(cc: string): string {
//   return cc.replace(/.(?=.{4})/g, "#");
// }