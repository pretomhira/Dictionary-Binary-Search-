// src/DictionaryList.js
import React from "react";
import { dictionary } from "./data"; // Make sure this path is correct based on your file structure

const DictionaryList = () => {
  // Styles for the scrollable list container
  const containerStyle = {
    width: "300px", // Set the desired width
    height: "400px", // Set the desired height
    overflowY: "scroll", // Enable vertical scrolling
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "8px",
  };

  return (
    <div className="w-96 h-96 overflow-scroll border border-black rounded-md p-5">
      <div>
        <h2 className="text-xl font-semibold absolute bg-orange-400 px-2 rounded-md">
          Words
        </h2>
      </div>
      <div className="pt-10">
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {dictionary.map((entry, index) => (
            <li key={index} className="flex flex-col">
              <div className="font-semibold">{entry.word}</div>
              <div className="text-sm font-thin font-serif">
                {entry.definition}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DictionaryList;
