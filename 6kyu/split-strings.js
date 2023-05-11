function solution(str) {
//   console.log(str);
  const result = [];
  for (let i = 0; i < str.length - 1; i += 2) {
    result.push(str[i] + str[i + 1]);
  }

  if (str.length % 2 === 1) {
    result.push(str[str.length - 1] + "_");
  }
  return result;
}
// However, a smart solution could be adding '_' to the end of the string before the for loop, so everything is even!
// function solution(s) {
//   return (s + "_").match(/.{2}/g) || [];
// }
// regex solution, pretty cool to learn!