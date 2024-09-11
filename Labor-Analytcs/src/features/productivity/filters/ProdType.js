import React from "react";
import { Select } from "../../../components";
import { Texts } from "../../../config";

function ProdType() {
  const texts = Texts["pt-BR"].header.productivityFilters.prodType;
  return (
    <Select
      name="prodType"
      disableError
      defaultValue={1}
      options={[
        {
          value: 1,
          label: texts.media,
        },

        {
          value: 2,
          label: texts.effective,
        },
      ]}
    />
  );
}

export default ProdType;
