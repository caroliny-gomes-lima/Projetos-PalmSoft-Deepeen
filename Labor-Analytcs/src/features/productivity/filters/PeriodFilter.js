import React from "react";
import { InputDateMMyyyy, InputDateYYYY } from "../../../components";
import { Texts } from "../../../config";
import { Validations } from "../../../lib";
import Styles from "../styles/FilterStyles";

function getDefaultDate(addDate = 0, addMonth = 0) {
  const date = new Date();
  date.setDate(date.getDate() + addDate);
  date.setMonth(date.getMonth() + addMonth);
  return date;
}

function getMaxDate(date, vision, formConfig) {
  const responseDate = new Date(date);
  switch (vision) {
    case 1: //trimestral
      responseDate.setMonth(date.getMonth() + 2);
      break;
    case 2: //semestral
      responseDate.setMonth(date.getMonth() + 5);
      break;
    default:
      return date;
  }
  formConfig.setValue("endPeriod", responseDate);
  return responseDate;
}

function VisionFilterContainer({ vision, formConfig }) {
  const [date, setDate] = React.useState(null);
  const texts = Texts["pt-BR"].header.productivityFilters.period;
  return (
    <Styles.PeriodContainer>
      {vision === 0 ? (
        <Styles.PeriodGroupContainer $withMargin>
          <Styles.PeriodText>{texts.toMonth}</Styles.PeriodText>
          <InputDateMMyyyy
            disableError
            small
            alternativeColors
            defaultValue={getDefaultDate(0, -1)}
            name="startPeriod"
            validation={(value) => Validations.isDATE(value)}
          />
        </Styles.PeriodGroupContainer>
      ) : vision === 3 ? (
        <Styles.PeriodGroupContainer $withMargin>
          <Styles.PeriodText>{texts.toAnual}</Styles.PeriodText>
          <InputDateYYYY
            disableError
            small
            alternativeColors
            defaultValue={getDefaultDate(0, -1)}
            name="startPeriod"
            validation={(value) => Validations.isDATE(value)}
          />
        </Styles.PeriodGroupContainer>
      ) : (
        <>
          <Styles.PeriodGroupContainer $withMargin>
            <Styles.PeriodText>{texts.fromLabel}</Styles.PeriodText>
            <InputDateMMyyyy
              disableError
              small
              alternativeColors
              onChange={(v, date) => setDate(date)}
              defaultValue={getDefaultDate(0, vision === 3 ? -3 : -6)}
              name="startPeriod"
              validation={(value) => Validations.isDATE(value)}
            />
          </Styles.PeriodGroupContainer>

          <Styles.PeriodGroupContainer>
            <Styles.PeriodText>{texts.toLabel}</Styles.PeriodText>
            <InputDateMMyyyy
              disableError
              small
              alternativeColors
              name="endPeriod"
              defaultValue={getDefaultDate(0, -1)}
              maxDate={date ? getMaxDate(date, vision, formConfig) : null}
              minDate={date ? getMaxDate(date, vision, formConfig) : null}
              disabled={!date}
              validation={(value) => Validations.isDATE(value)}
            />
          </Styles.PeriodGroupContainer>
        </>
      )}
    </Styles.PeriodContainer>
  );
}

export default VisionFilterContainer;
