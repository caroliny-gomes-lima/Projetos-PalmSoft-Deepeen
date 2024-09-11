import React from "react";
import { Select } from "../../../components";
import { Texts } from "../../../config";

function VisionFilterContainer() {
  const texts = Texts["pt-BR"].header.productivityFilters.process;
  return (
    <Select
      name="process"
      disableError
      defaultValue={"process"}
      options={[
        {
          value: "all",
          label: texts.allLabel,
        },
        {
          value: "process",
          label: texts.processLabel,
        },

        {
          value: "separation",
          label: texts.separationLabel,
        },
        {
          value: "checkout",
          label: texts.checkoutLabel,
        },
        {
          value: "load",
          label: texts.loadLabel,
        },
      ]}
    />
  );
}

export default VisionFilterContainer;
