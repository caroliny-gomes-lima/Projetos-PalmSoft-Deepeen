import React from "react";
import { Select } from "../../../components";
import { Texts } from "../../../config";

function VisionFilterContainer() {
  const texts = Texts["pt-BR"].header.productivityFilters.vision;
  return (
    <Select
      name="vision"
      disableError
      defaultValue={0}
      options={[
        {
          value: 0,
          label: texts.annualLabel,
        },

        {
          value: 1,
          label: texts.monthlyLabel,
        },
        {
          value: 2,
          label: texts.quarterlyLabel,
        },
      ]}
    />
  );
}

export default VisionFilterContainer;
