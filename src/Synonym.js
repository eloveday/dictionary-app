import React from "react";
import "./Synonym.css";

export default function Synonym(props) {
  if (props.synonym) {
    return (
      <div className="synonym">
        {props.synonym.map(function (synonym, index) {
          return <div className="item">{synonym}</div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
