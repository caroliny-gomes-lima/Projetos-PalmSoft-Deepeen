import React from "react";
import { Select } from "../../../components";
import { Texts } from "../../../config";

function DedicatedTeam({ onChange }) {
  const texts = Texts["pt-BR"].header.productivityFilters.dedicatedTeam;
  return (
    <Select
      name="dedicatedTeam"
      disableError
      defaultValue={false}
      onChange={onChange}
      options={[
        {
          value: true,
          label: texts.yes,
        },

        {
          value: false,
          label: texts.no,
        },
      ]}
    />
  );
}

export default DedicatedTeam;
