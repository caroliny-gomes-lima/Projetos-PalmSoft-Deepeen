import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ChartsColors, Texts } from "../../../config";
import { Creators } from "../reduxSagas";
import Chart from "chart.js";
import Style from "../styles/GlobalCapacityStyle";
import {
  ChartDescription,
  ChartDivider,
  DescriptionGroup,
  IntegratedComponentHolder,
  SkeletonLoader,
} from "../../../components";

function GlobalCapacity({
  globalCapacityData,
  globalCapacityIsFetching,
  globalCapacityRequest,
}) {
  const chartRef = React.useRef();
  const mount = React.useCallback(() => {
    globalCapacityRequest();
  }, [globalCapacityRequest]);

  useEffect(mount, [mount]);

  useEffect(() => {
    if (globalCapacityData && !globalCapacityIsFetching) {
      new Chart(chartRef.current, globalCapacityData.chartData);
    }
  }, [globalCapacityData, globalCapacityIsFetching]);

  const texts = Texts["pt-BR"].charts.capacityGlobal;
  const colors = ChartsColors.globalDoughnut;

  const renderChart = React.useCallback(
    (chartRef) => {
      return (
        <>
          {globalCapacityIsFetching ? (
            <SkeletonLoader
              variant="circle"
              height="250px"
              width="250px"
              style={{ margin: "auto" }}
            >
              <Style.GraphContainer></Style.GraphContainer>
            </SkeletonLoader>
          ) : (
            <Style.GraphContainer>
              <canvas style={{ minHeight: 250 }} ref={chartRef}></canvas>
            </Style.GraphContainer>
          )}
          <ChartDivider />
          <DescriptionGroup>
            <ChartDescription
              subDescription={globalCapacityData?.peakValue + "%"}
              color={colors.primary}
              loading={globalCapacityIsFetching}
              loadingWidth={80}
            >
              {texts.peak}
            </ChartDescription>

            <ChartDescription
              subDescription={globalCapacityData?.occupation}
              color={colors.dots}
              loading={globalCapacityIsFetching}
              loadingWidth={100}
            >
              {texts.occupation}
            </ChartDescription>

            <ChartDescription
              subDescription={globalCapacityData?.ftes}
              color={colors.dots}
              loading={globalCapacityIsFetching}
              loadingWidth={80}
            >
              {texts.fte}
            </ChartDescription>
          </DescriptionGroup>
        </>
      );
    },
    [globalCapacityIsFetching, globalCapacityData, texts, colors]
  );

  return (
    <IntegratedComponentHolder
      showReload={!globalCapacityData && !globalCapacityIsFetching}
      reloadMessage={texts.notFound.message}
      reloadCallback={globalCapacityRequest}
      reloadLabel={texts.notFound.buttonLabel}
    >
      {renderChart(chartRef)}
    </IntegratedComponentHolder>
  );
}

function mapStateToProps(state) {
  const { globalCapacityData, globalCapacityIsFetching } = state.capacity;
  return {
    globalCapacityData,
    globalCapacityIsFetching,
  };
}

function mapDispatchToProps(dispatch) {
  const { globalCapacityRequest } = Creators;
  return {
    globalCapacityRequest() {
      return dispatch(globalCapacityRequest());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalCapacity);
