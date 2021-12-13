import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics";

export default function Results(props) {
  console.log(props.result);

  if (props.result) {
    return (
      <div>
        <h2>{props.result[0].word}</h2>
        <Phonetics phonetics={props} />

        {props.result[0].meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
