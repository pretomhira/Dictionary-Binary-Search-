"use client";
import { useState } from "react";
import DictionaryList from "./dictionaryList";

// Binary search function
function binarySearch(word) {
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
export default function Home() {
  const [input, setInput] = useState(""); // User input
  const [result, setResult] = useState(""); // Search result

  // Handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    const trimmedInput = input.trim().toLowerCase();
    const searchResult = binarySearch(trimmedInput);
    setResult(searchResult);
  };

  return (
    <div className="columns-2">
      <div>
        <h1>Dictionary Lookup</h1>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter a word"
        />
        <button onClick={handleSearch}>Search</button>
        <p>{result}</p>
      </div>
      <DictionaryList />
    </div>
  );
}
