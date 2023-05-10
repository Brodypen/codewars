const decToHex = (dec: number): string => {
  if (dec <= 0) {
    return "00";
  }
  if (dec >= 255) {
    return "FF";
  }
  return dec.toString(16).toUpperCase().padStart(2, "0");
};
export function rgb(r: number, g: number, b: number): string {
  return `${decToHex(r)}${decToHex(g)}${decToHex(b)}`;
}

// What I've learned
// You can pass a radix to toString() to convert to a different base
// You can use padStart to pad a string with a char to a certain length
