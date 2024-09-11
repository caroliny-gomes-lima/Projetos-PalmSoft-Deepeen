import React from "react";
import { InputDate } from "../../../components";
import { Texts } from "../../../config";
import { Validations } from "../../../lib";
import Styles from "../styles/FilterStyles";

function VisionFilterContainer() {
  const texts = Texts["pt-BR"].header.productivityFilters.period;
  return (
    <Styles.PeriodContainer>
      <Styles.PeriodGroupContainer $withMargin>
        <Styles.PeriodText>{texts.fromLabel}</Styles.PeriodText>
        <InputDate
          disableError
          small
          alternativeColors
          placeholder="00/00/0000"
          name="startPeriod"
          validation={(value) => Validations.isDATE(value)}
        />
      </Styles.PeriodGroupContainer>

      <Styles.PeriodGroupContainer>
        <Styles.PeriodText>{texts.toLabel}</Styles.PeriodText>
        <InputDate
          disableError
          small
          alternativeColors
          placeholder="00/00/0000"
          name="endPeriod"
          validation={(value) => Validations.isDATE(value)}
        />
      </Styles.PeriodGroupContainer>
    </Styles.PeriodContainer>
  );
}

export default VisionFilterContainer;
