import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ChartsColors, Texts } from "../../../config";
import { Creators } from "../reduxSagas";
import Chart from "chart.js";
import Style from "../styles/HistoricProductivityStyle";
import {
  ChartDescription,
  ChartDivider,
  DescriptionGroup,
  IntegratedComponentHolder,
  SkeletonLoader,
} from "../../../components";

function HistoricProductivity({
  theme,
  historicProductivityData,
  isFetching,
  globalProductivityRequest,
}) {
  const chartRef = React.useRef();

  const [averageDatas, setAverageDatas] = React.useState({});

  useEffect(() => {
    if (historicProductivityData && !isFetching) {
      const { chartData, productivityBenchmark, averageProductivity } =
        historicProductivityData;
      new Chart(chartRef.current, chartData);
      setAverageDatas({
        productivityBenchmark,
        averageProductivity,
      });
    }
  }, [setAverageDatas, historicProductivityData, isFetching]);

  const texts = Texts["pt-BR"].charts.historicProductivity;
  const colors = ChartsColors.historicProductivity;

  const renderChart = React.useCallback(
    (chartRef) => {
      return (
        <>
          {isFetching ? (
            <SkeletonLoader
              height="250px"
              width="100%"
              style={{ margin: "auto" }}
            >
              <Style.GraphContainer></Style.GraphContainer>
            </SkeletonLoader>
          ) : (
            <Style.GraphContainer>
              <canvas ref={chartRef}></canvas>
            </Style.GraphContainer>
          )}
          <ChartDivider />
          <DescriptionGroup>
            <ChartDescription
              color={colors.productivityLine}
              loading={isFetching}
              loadingWidth={220}
            >
              {texts.productivityVariation}
            </ChartDescription>
            <ChartDescription
              color={colors.averageLine}
              loading={isFetching}
              loadingWidth={220}
            >
              {texts.productivityBenchmark}
              {": "}
              {averageDatas.productivityBenchmark}
            </ChartDescription>
            <ChartDescription
              color={colors.referenceLine}
              loading={isFetching}
              loadingWidth={220}
            >
              {texts.averageProductivity}
              {": "}
              {averageDatas.averageProductivity}
            </ChartDescription>
          </DescriptionGroup>
        </>
      );
    },
    [averageDatas, isFetching, texts, colors]
  );

  return (
    <IntegratedComponentHolder
      showReload={!historicProductivityData && !isFetching}
      reloadMessage={texts.notFound.message}
      reloadCallback={globalProductivityRequest}
      reloadLabel={texts.notFound.buttonLabel}
    >
      {renderChart(chartRef)}
    </IntegratedComponentHolder>
  );
}

function mapStateToProps(state) {
  const { historicProductivityData, isFetching } = state.productivity;
  return {
    historicProductivityData,
    isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  const { globalProductivityRequest } = Creators;
  return {
    globalProductivityRequest: function () {
      return dispatch(globalProductivityRequest());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoricProductivity);
