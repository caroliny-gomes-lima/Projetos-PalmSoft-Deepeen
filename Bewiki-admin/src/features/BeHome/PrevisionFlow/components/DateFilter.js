import React from "react";
import { Texts } from "../../../../config";
import Styles from "../styles/filtersStyles";
import { InputDate } from "../../../../components";
import { FormHolder } from "../../../../FormConfig";

function DateFilter({ sendParameters, name }) {
  const Title = Texts["pt-BR"].beHome;

  return (
    <>
      <FormHolder>
        <Styles.FilterContent>
          <Styles.FilterTitle>
            {Title.PrevisionFlow.filters.date}
          </Styles.FilterTitle>

          <InputDate name={name} disableError />
        </Styles.FilterContent>
      </FormHolder>
    </>
  );
}

export default DateFilter;
