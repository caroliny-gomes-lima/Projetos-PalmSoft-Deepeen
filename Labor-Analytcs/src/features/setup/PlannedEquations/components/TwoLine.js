import React from "react";

function TwoLine({
  v1,
  v2,
  v3,
  v4,
  iconButton,
  iconButton1,
  iconButton2,
  iconButton3,
  iconButton4,
}) {
  return (
    <div>
      <div>{v1}</div>
      <div>{v2}</div>
      <div>{v3}</div>
      <div>{v4}</div>
      <div>{iconButton}</div>
      <div>{iconButton1}</div>
      <div>{iconButton2}</div>
      <div>{iconButton3}</div>
      <div>{iconButton4}</div>
    </div>
  );
}

export default TwoLine;
