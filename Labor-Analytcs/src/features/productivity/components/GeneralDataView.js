import React from "react";
import Style from "../styles/GeralDataStyle";
import { ChartsColors, Texts } from "../../../config";
import { ChartDescription } from "../../../components";
import { SessionStorage } from "lib";
import { parseISO } from "date-fns";

function GeneralDataView({ data, isFetching }) {
  const texts = Texts["pt-BR"].charts.geralDataProductivity;
  const colors = ChartsColors.globalDoughnut;
  const iDate = parseISO(SessionStorage.getItem("shippingStartDate"));
  const eDate = parseISO(SessionStorage.getItem("shippingEndDate"));
  return (
    <>
      <Style.Container>
        <ChartDescription
          noMargin
          color={colors.primary}
          loading={isFetching}
          loadingWidth={250}
        >
          {texts.period}
        </ChartDescription>
        {console.log(SessionStorage.getItem("shippingStartDate"))}
        <Style.DataContainer font={2}>
          {`${iDate.toLocaleDateString()} -
            ${eDate.toLocaleDateString()}`}
        </Style.DataContainer>
        <ChartDescription
          noMargin
          color={colors.primary}
          loading={isFetching}
          loadingWidth={250}
        >
          {texts.totalOts}
        </ChartDescription>
        <Style.DataContainer>{data.totalOt}</Style.DataContainer>
        <ChartDescription
          noMargin
          color={colors.primary}
          loading={isFetching}
          loadingWidth={250}
        >
          {texts.weight}
        </ChartDescription>
        <Style.DataContainer>{data.weightPerOt}</Style.DataContainer>
        <ChartDescription
          noMargin
          color={colors.primary}
          loading={isFetching}
          loadingWidth={250}
        >
          {texts.lines}
        </ChartDescription>
        <Style.DataContainer>{data.linesPerOt}</Style.DataContainer>
      </Style.Container>
    </>
  );
}
export default GeneralDataView;
