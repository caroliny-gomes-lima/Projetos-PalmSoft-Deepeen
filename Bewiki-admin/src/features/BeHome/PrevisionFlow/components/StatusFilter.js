import React from "react";
import { Texts } from "../../../../config";
import Styles from "../styles/filtersStyles";
import { InputAutoComplete } from "../../../../components";

function StatusFilter({ sendParameters, name, options, defaultValue }) {
  const Title = Texts["pt-BR"].beHome;

  const onChangeStayType = (e, newInputValue) => {
    sendParameters(newInputValue);
  };

  return (
    <>
      <Styles.FilterContent status>
        <Styles.FilterTitle>
          {Title.PrevisionFlow.filters.status}
        </Styles.FilterTitle>

        <InputAutoComplete
          defaultValue={defaultValue}
          name={name}
          onChange={onChangeStayType}
          disableError
          options={options}
          small
        />
      </Styles.FilterContent>
    </>
  );
}

export default StatusFilter;
