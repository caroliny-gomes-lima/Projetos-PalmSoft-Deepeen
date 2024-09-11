import { Spacing } from "config";
import React from "react";
import Style from "../styles/TurnsStyles";

function InputData({ data, type }) {
  return (
    <Style.StyledInput $type={type}>
      <div style={{ padding: type === 2 ? Spacing(1.5) : Spacing(0.5) }}>
        {data === null ? "Não aplica" : data}
      </div>
    </Style.StyledInput>
  );
}

export default React.memo(InputData);
