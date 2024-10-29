import { dictionary } from "./data";
// Binary search function
export function binarySearch(word) {
  let left = 0;
  let right = dictionary.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midWord = dictionary[mid].word;

    if (midWord === word) {
      return dictionary[mid].definition; // Word found
    } else if (midWord < word) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }

  return "Word not found in dictionary."; // Not found
}
