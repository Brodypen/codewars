export const pigIt = (a: string): string => {
  return a
    .split(" ")
    .map((word) =>
      word.match(/[A-Za-z]/) ? word.slice(1) + word.slice(0, 1) + "ay" : word
    )
    .join(" ");
};
