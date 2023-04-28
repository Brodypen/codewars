function toCamelCase(str) {
  return str
    .split(/[-_]/)
    .map((str, index) =>
      index != 0 ? str.charAt(0).toUpperCase() + str.slice(1) : str
    )
    .join("");
}
