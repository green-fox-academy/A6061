'use strict';

// export function firstAnagram(anagram: string): string {
//   return anagram.toLowerCase().split("").sort().join("");
// }

// export function toCompare(anagramCompare: string): string {
//   return anagramCompare.toLowerCase().split("").sort().join("");
// }

export function anagram(anagramCompare: string, toCompare: string): boolean {

  let string1: string = anagramCompare.toLowerCase().split("").sort().join("");
  let string2: string = toCompare.toLowerCase().split("").sort().join("");

  if (string1 === string2) {
    return true;
  }
  return false;
}