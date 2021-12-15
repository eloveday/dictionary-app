import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.result) {
    return (
      <div>
        <section>
          {" "}
          <h2>{props.result[0].word}</h2>
          <Phonetics phonetics={props} />
        </section>
        <section>
          {" "}
          {props.result[0].meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
