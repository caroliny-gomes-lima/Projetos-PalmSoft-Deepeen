import React from "react";
import { Texts } from "../../../../config";
import Style from "../../equations/styles/EquationParametersStyle";

function ValueOfL({ letter }) {
    const texts = Texts["pt-BR"].setup.performedEquations.performedEquationParameters;
    return (
        <Style.Label>
            {texts.checkoutTime}
            <Style.LabelBold>&nbsp; {letter} </Style.LabelBold>
            <Style.LabelExLight>(s)</Style.LabelExLight>
        </Style.Label>
    );
}

export default ValueOfL;