function DNAStrand(dna) {
  const tableDNA = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };
  return dna
    .split("")
    .map((symbol) => tableDNA[symbol])
    .join("");
}
