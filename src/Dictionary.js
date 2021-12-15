import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, changeWord] = useState("");
  let [results, setResult] = useState(null);

  function displayWord(response) {
    setResult(response.data);
  }

  function searchWord(event) {
    event.preventDefault();

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiURL).then(displayWord);
  }

  function handleChange(response) {
    changeWord(response.target.value);
  }

  return (
    <div className="dictionary">
      <section>
        <div className="dictionaryForm">
          <h1>Which word would you like to look up?</h1>
          <form onSubmit={searchWord}>
            <input type="search" autoFocus={true} onChange={handleChange} />
          </form>
        </div>
      </section>
      <Results result={results} />
    </div>
  );
}
