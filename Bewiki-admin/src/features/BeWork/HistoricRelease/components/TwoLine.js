import React from "react";

function TwoLine({ v1, v2, v3, v4, iconButton }) {
  return (
    <div>
      <div>{v1}</div>
      <div>{v2}</div>
      <div>{v3}</div>
      <div>{v4}</div>
      <div>{iconButton}</div>
    </div>
  );
}

export default TwoLine;
