import React from "react";
import { Texts } from "../../../../config";
import Styles from "../styles/filtersStyles";
import { InputAutoComplete } from "../../../../components";
import { FormHolder } from "../../../../FormConfig";

function StudioFilter({ sendParameters, name }) {
  const Title = Texts["pt-BR"].beHome;

  const onChangeStayType = (e, newInputValue) => {
    sendParameters(newInputValue);
  };

  const typeStay = [
    {
      value: 0,
      label: "Todos",
    },
    {
      value: "S",
      label: "Hospedagem",
    },
    {
      value: "L",
      label: "Moradia",
    },
  ];

  return (
    <>
      <FormHolder>
        <Styles.FilterContent>
          <Styles.FilterTitle>
            {Title.PrevisionFlow.filters.typeStudio}
          </Styles.FilterTitle>

          <InputAutoComplete
            name={name}
            onChange={onChangeStayType}
            disableError
            options={typeStay}
          />
        </Styles.FilterContent>
      </FormHolder>
    </>
  );
}

export default StudioFilter;
