import React from "react";
import { Input } from "../../../components";
import { Texts } from "../../../config";

function VisionFilterContainer() {
  const texts = Texts["pt-BR"].header.productivityFilters.operator;
  return (
    <Input
      disableError
      small
      alternativeColors
      placeholder={texts.placeholder}
      name="operator"
    />
  );
}

export default VisionFilterContainer;
