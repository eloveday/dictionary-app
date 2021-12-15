import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetics.result[0].phonetics);
  return (
    <div>
      {props.phonetics.result[0].phonetics.map(function (phonetics, index) {
        return (
          <div key={index} className="phonetics">
            {phonetics.text}

            <a href={phonetics.audio} target="_blank" rel="noreferrer">
              Listen
            </a>
          </div>
        );
      })}
    </div>
  );
}
