/*
Straight forward, create a phone number from an array of 10 numbers.

*/
export function createPhoneNumber(numbers: number[]): string {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6, 10).join("")}`;
}

// Other cool solution
// export function createPhoneNumber(numbers: number[]): string {
//   let phoneNumber: string = "(xxx) xxx-xxxx";

//   for (let i = 0; i < numbers.length; i++) {
//     phoneNumber = phoneNumber.replace("x", numbers[i].toString());
//   }

//   return phoneNumber;
// }