export function persistence(num: number): number {
  let persistenceCounter = 0;
  while (num > 9) {
    num = multiplyNums(num);
    persistenceCounter++;
  }
  return persistenceCounter;
}
let multiplyNums = (n: number): number => {
  return n == 0 ? 1 : (n % 10) * multiplyNums(Math.floor(n / 10));
};
