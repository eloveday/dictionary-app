import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div>
      <strong>{props.meaning.partOfSpeech}</strong>
      <br />
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {" "}
            {definition.definition}
            <br />
            <em>{definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}
