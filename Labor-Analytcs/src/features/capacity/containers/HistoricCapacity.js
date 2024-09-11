import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ChartsColors, Texts } from "../../../config";
import { Creators } from "../reduxSagas";
import Chart from "chart.js";
import Style from "../styles/HistoricCapacityStyle";
import {
  ChartDescription,
  DescriptionGroup,
  IntegratedComponentHolder,
  SkeletonLoader,
} from "../../../components";

function HistoricCapacity({
  theme,
  historicCapacityData,
  historicCapacityIsFetching,
  historicCapacityRequest,
}) {
  const chartSeparation = React.useRef();
  const chartCheckout = React.useRef();
  const chartLoad = React.useRef();

  const mount = React.useCallback(() => {
    historicCapacityRequest();
  }, [historicCapacityRequest]);

  useEffect(mount, [mount]);

  useEffect(() => {
    if (historicCapacityData && !historicCapacityIsFetching) {
      new Chart(
        chartSeparation.current,
        historicCapacityData.separation.chartData
      );
      new Chart(chartCheckout.current, historicCapacityData.checkout.chartData);
      new Chart(chartLoad.current, historicCapacityData.load.chartData);
    }
  }, [historicCapacityData, historicCapacityIsFetching]);

  const texts = Texts["pt-BR"].charts.historicCapacity;
  const colors = ChartsColors.commonLineChart;

  const renderChart = React.useCallback(
    (chartRef) => {
      return (
        <>
          {historicCapacityIsFetching ? (
            <SkeletonLoader
              height="100px"
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
          <DescriptionGroup>
            <ChartDescription
              color={colors.referenceLine}
              loading={historicCapacityIsFetching}
            >
              {texts.peak}
            </ChartDescription>
            <ChartDescription
              color={colors.averageLine}
              loading={historicCapacityIsFetching}
            >
              {texts.average}
            </ChartDescription>
          </DescriptionGroup>
        </>
      );
    },
    [historicCapacityIsFetching, texts, colors]
  );

  return (
    <IntegratedComponentHolder
      showReload={!historicCapacityData && !historicCapacityIsFetching}
      reloadMessage={texts.notFound.message}
      reloadCallback={historicCapacityRequest}
      reloadLabel={texts.notFound.buttonLabel}
    >
      {renderChart(chartSeparation)}
      {renderChart(chartCheckout)}
      {renderChart(chartLoad)}
    </IntegratedComponentHolder>
  );
}

function mapStateToProps(state) {
  const { historicCapacityData, historicCapacityIsFetching } = state.capacity;
  return {
    historicCapacityData,
    historicCapacityIsFetching,
  };
}

function mapDispatchToProps(dispatch) {
  const { historicCapacityRequest } = Creators;
  return {
    historicCapacityRequest() {
      return dispatch(historicCapacityRequest());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoricCapacity);
