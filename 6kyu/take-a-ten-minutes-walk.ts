export function isValidWalk(walk: string[]) {
  if (walk.length !== 10) {
    return false;
  }
  let walkFreq: { [index: string]: any } = {};

  walk.map((dir) => (walkFreq[dir] = walkFreq[dir] + 1 || 1));
  return walkFreq["n"] === walkFreq["s"] && walkFreq["w"] === walkFreq["e"];
}
// My solution is good, other things we could change is setting walkFreq with a type and n: 0, s:0 ... in the object.
// Also line 5 should be [key: string]: number.