import React from "react";
import Synonym from "./Synonym.js";

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
            <em>{definition.example}</em>
            <br />
            <Synonym synonym={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
