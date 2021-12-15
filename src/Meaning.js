import React from "react";
import Synonym from "./Synonym.js";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div>
      <strong>{props.meaning.partOfSpeech}</strong>
      <br />

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {definition.definition}
            <br />
            <div className="example">
              <em>{definition.example}</em>
            </div>
            <br />
            <Synonym synonym={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
