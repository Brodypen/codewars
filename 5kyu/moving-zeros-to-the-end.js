function moveZeros(arr) {
  let secondArr = [];
  let newArr = [];
  arr.filter((val) => (val !== 0 ? newArr.push(val) : secondArr.push(val)));
  return [...newArr, ...secondArr];
}
