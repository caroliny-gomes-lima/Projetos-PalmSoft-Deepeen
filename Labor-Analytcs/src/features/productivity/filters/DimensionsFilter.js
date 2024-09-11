import React from "react";
import { Select } from "../../../components";
import { Texts } from "../../../config";

function VisionFilterContainer() {
  const texts = Texts["pt-BR"].header.productivityFilters.dimensions;
  return (
    <Select
      name="dimensions"
      disableError
      defaultValue={"center"}
      options={[
        {
          value: "center",
          label: texts.centerLabel,
        },

        {
          value: "team",
          label: texts.teamLabel,
        },
        {
          value: "clients",
          label: texts.clientsLabel,
        },
      ]}
    />
  );
}

export default VisionFilterContainer;
