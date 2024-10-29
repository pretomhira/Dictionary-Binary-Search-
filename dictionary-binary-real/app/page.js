"use client";
import { useState } from "react";
import { binarySearch } from "./binarySearch";
import DictionaryList from "./dictionaryList";

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
    <div className="max-w-3xl mx-auto p-5 flex flex-row  gap-5 bg-orange-300 rounded-md mt-10 shadow-md">
      <div className="flex flex-col gap-3">
        <div className="text-xl font-bold bg-orange-400 px-2 rounded-md w-fit">
          Dictionary Lookup
        </div>
        <div className="flex flex-row gap-3">
          <input
            className="border border-black rounded-sm px-1"
            value={input}
            onChange={handleInputChange}
            placeholder="Enter a word"
          />
          <button
            className="border border-black rounded-sm bg-gray-300 px-1"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <p className="text-xl font-serif font-thin p-2 bg-orange-200 h-32">
          {result}
        </p>
      </div>
      <DictionaryList />
    </div>
  );
}
