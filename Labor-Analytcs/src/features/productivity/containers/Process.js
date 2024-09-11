import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ChartsColors, Texts } from "../../../config";
import { Creators } from "../reduxSagas";
import Chart from "chart.js";
import Style from "../styles/ProcessStyle";
import {
  SkeletonLoader,
  IntegratedComponentHolder,
  ChartDescription,
  Title,
} from "../../../components";

function Process({ processData, isFetching, globalProductivityRequest }) {
  const chartCheckout = React.useRef();
  const chartSeparation = React.useRef();

  useEffect(() => {
    if (processData && !isFetching) {
      if (processData.checkout) {
        new Chart(chartCheckout.current, processData.checkout.chartData);
      }
      if (processData.separation) {
        new Chart(chartSeparation.current, processData.separation.chartData);
      }
    }
  }, [processData, isFetching]);

  const texts = Texts["pt-BR"].charts.productivityProcess;
  const colors = ChartsColors.processProductivity;

  const renderChart = React.useCallback(
    (chartRef, name) => {
      return (
        <Style.ProcessItemContainer>
          {isFetching ? (
            <SkeletonLoader>
              <Style.GraphContainer></Style.GraphContainer>
            </SkeletonLoader>
          ) : (
            <Style.GraphContainer>
              <Title>{texts[name].name}</Title>
              <canvas ref={chartRef}></canvas>
            </Style.GraphContainer>
          )}
          <div style={{ marginTop: 30 }}>
            <ChartDescription
              noMargin
              color={colors[`${name}Ideal`]}
              loading={isFetching}
            >
              {texts[name].planned}
            </ChartDescription>
            <ChartDescription
              noMargin
              color={colors[`${name}Actual`]}
              loading={isFetching}
            >
              {texts[name].current}
            </ChartDescription>
          </div>
        </Style.ProcessItemContainer>
      );
    },
    [isFetching, texts, colors]
  );

  return (
    <IntegratedComponentHolder
      direction="row"
      showReload={!processData && !isFetching}
      reloadMessage={texts.notFound.message}
      reloadCallback={globalProductivityRequest}
      reloadLabel={texts.notFound.buttonLabel}
    >
      {renderChart(chartSeparation, "separation")}
      {renderChart(chartCheckout, "checkout")}
    </IntegratedComponentHolder>
  );
}

function mapStateToProps(state) {
  const { processData, isFetching } = state.productivity;
  return {
    processData,
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
export default connect(mapStateToProps, mapDispatchToProps)(Process);
