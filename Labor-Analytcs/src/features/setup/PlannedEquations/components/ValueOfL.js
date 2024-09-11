import React from "react";
import { Texts } from "../../../../config";
import Style from "../styles/EquationParametersStyle";

function ValueOfL({ letter }) {
  const texts = Texts["pt-BR"].setup.PlannedEquations.equationParameters;
  return (
    <Style.Label>
      {texts.valueOf}
      <Style.LabelBold>&nbsp; {letter} </Style.LabelBold>
      <Style.LabelExLight>(s)</Style.LabelExLight>
    </Style.Label>
  );
}

export default ValueOfL;
