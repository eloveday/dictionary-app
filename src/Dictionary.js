import React, { useState } from "react";

export default function Dictionary() {
  let [word, changeWord] = useState("");
  function searchWord(event) {
    event.preventDefault();
    alert(`Searching for ${word}...`);
  }

  function handleChange(response) {
    changeWord(response.target.value);
  }

  return (
    <div className="dictionaryForm">
      <h1>Which word would you like to look up?</h1>
      <form onSubmit={searchWord}>
        <input type="search" autoFocus={true} onChange={handleChange} />
      </form>
    </div>
  );
}
