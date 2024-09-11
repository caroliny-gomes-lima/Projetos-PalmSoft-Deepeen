import React from "react";
import { Select } from "../../../components";
import { Texts } from "../../../config";

function VisionFilterContainer({ setVision, formConfig }) {
  const texts = Texts["pt-BR"].header.productivityFilters.vision;

  function getDefaultDate(addDate = 0, addMonth = 0) {
    const date = new Date();
    date.setDate(date.getDate() + addDate);
    date.setMonth(date.getMonth() + addMonth);
    return date;
  }

  function updateVision(value) {
    setVision(value);
    switch (value) {
      case 0:
        //formConfig.setValue("endPeriod", getDefaultDate(0, -1)  );
        formConfig.setValue("startPeriod", getDefaultDate(0, -1));
        break;
      case 1:
        formConfig.setValue("endPeriod", getDefaultDate(0, -1));
        formConfig.setValue("startPeriod", getDefaultDate(0, -3));
        break;
      case 2:
        formConfig.setValue("endPeriod", getDefaultDate(0, -1));
        formConfig.setValue("startPeriod", getDefaultDate(0, -6));
        break;
      case 3:
        //formConfig.setValue("endPeriod", getDefaultDate(0, -1)  );
        formConfig.setValue("startPeriod", new Date());
        break;

      default:
        break;
    }
  }
  return (
    <Select
      name="vision"
      disableError
      defaultValue={0}
      onChange={(value) => updateVision(value)}
      options={[
        {
          value: 0,
          label: texts.monthlyLabel,
        },
        {
          value: 1,
          label: texts.quarterlyLabel,
        },
        {
          value: 2,
          label: texts.biannualLabel,
        },
        {
          value: 3,
          label: texts.annualLabel,
        },
      ]}
    />
  );
}

export default VisionFilterContainer;
