import React from "react";
import { Texts } from "../../../../config";
import Styles from "../styles/filtersStyles";
import { InputAutoComplete } from "../../../../components";
import { FormHolder } from "../../../../FormConfig";

function ModalityFilter({ sendParameters, name }) {
  const Title = Texts["pt-BR"].beHome;

  const onChangeStayType = (e, newInputValue) => {
    sendParameters(newInputValue);
  };

  const typeStay = [
    {
      value: null,
      label: "TODOS",
    },
    {
      value: "SHORT_STAY",
      label: "HOSPEDAGEM",
    },
    {
      value: "LONG_STAY",
      label: "MORADIA",
    },
  ];

  return (
    <>
      <FormHolder>
        <Styles.FilterContent>
          <Styles.FilterTitle>
            {Title.PrevisionFlow.filters.modality}
          </Styles.FilterTitle>
          
          <InputAutoComplete
            defaultValue={{
              value: null,
              label: "TODOS",
            }}
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

export default ModalityFilter;
