import React from "react";

export default function Synonym(props) {
  if (props.synonym) {
    return (
      <div>
        {props.synonym.map(function (synonym, index) {
          return (
            <div key={index}>
              <ul>
                <li>{synonym}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}