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
    <div style={containerStyle}>
      <h2>Dictionary</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {dictionary.map((entry, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            <strong>{entry.word}</strong>: {entry.definition}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DictionaryList;
