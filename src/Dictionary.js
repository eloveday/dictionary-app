import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [word, changeWord] = useState("");

  function displayWord(response) {
    console.log(response.data);
  }

  function searchWord(event) {
    event.preventDefault();
    alert(`Searching for ${word}...`);

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiURL).then(displayWord);
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
