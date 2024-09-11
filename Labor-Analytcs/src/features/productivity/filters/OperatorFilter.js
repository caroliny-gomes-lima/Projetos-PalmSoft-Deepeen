import React from "react";
import InputAutoComplete from "../../../components/inputs/InputAutoComplete";
import { Texts } from "../../../config";

function VisionFilterContainer(props) {
  const texts = Texts["pt-BR"].header.productivityFilters.operator;
  return (
    <InputAutoComplete
      name="operator"
      disableError
      small
      alternativeColors={2}
      marginInput={2}
      options={props.options}
      placeholder={texts.placeholder}
    />
  );
}

export default VisionFilterContainer;
