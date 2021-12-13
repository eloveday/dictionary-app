import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics.result[0].phonetics);
  return (
    <div>
      {props.phonetics.result[0].phonetics.map(function (phonetics, index) {
        return (
          <div key={index}>
            {phonetics.text}
            <br />
            <a href={phonetics.audio} target="_blank" rel="noreferrer">
              Listen
            </a>
          </div>
        );
      })}
    </div>
  );
}
