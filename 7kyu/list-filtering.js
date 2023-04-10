function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((item) => typeof item === typeof 1);
}

// I also like this
// function filter_list(l) {
//   return l.filter((v) => typeof v == "number");
// }