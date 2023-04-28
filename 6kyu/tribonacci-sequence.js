function tribonacci(signature, n) {
  if (n < 4) {
    return signature.slice(0, n);
  }
  for (let i = 3; i < n; i++) {
    signature.push(signature[i - 3] + signature[i - 2] + signature[i - 1]);
  }
  return signature;
}

// Other people did this for loop and remove the if statement.
// function tribonacci(signature, n) {
//   for (var i = 0; i < n - 3; i++) {
//     // iterate n times
//     signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
//   }
//   return signature.slice(0, n); //return trib - length of n
// }