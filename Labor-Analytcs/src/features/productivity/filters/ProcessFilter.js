import React from "react";
import { Select } from "../../../components";

function VisionFilterContainer({ options }) {
  return (
    <Select
      name="process"
      disableError
      defaultValue={options[0].value}
      options={options}
    />
  );
}
export default VisionFilterContainer;
