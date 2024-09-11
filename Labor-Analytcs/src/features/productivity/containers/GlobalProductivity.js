import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ChartsColors, Texts } from "../../../config";
import { Creators } from "../reduxSagas";
import Chart from "chart.js";
import Style from "../styles/GlobalProductivityStyle";
import {
  ChartDescription,
  ChartDivider,
  IntegratedComponentHolder,
  SkeletonLoader,
} from "../../../components";
import { SessionStorage } from "../../../lib";
import { BlockTitle } from "../../../pages/styles/defaultStyles";

function getDefaultDate(addDate = 0, addMonth = 0) {
  const date = new Date();
  date.setDate(date.getDate() + addDate);
  date.setMonth(date.getMonth() + addMonth);
  return date;
}

function formatDate(date, end) {
  let newDateFixed;
  let month = new Date(date).getMonth();
  let year = new Date(date).getFullYear();
  const today = new Date();
  if (end) {
    if (today.getMonth() === month) {
      newDateFixed = new Date(year, month, today.getDate());
    } else {
      newDateFixed = new Date(year, month + 1, 0);
    }
  } else {
    newDateFixed = new Date(year, month, 1);
  }

  return newDateFixed ? new Date(newDateFixed).toISOString() : null;
}

function GlobalProductivity({
  globalProductivityData,
  isFetching,
  globalProductivityRequest,
  statusProcessFiltersRequest,
  clearData,
}) {
  const chartRef = React.useRef();
  const chartReff = React.useRef();

  const mount = React.useCallback(() => {
    const filters = {
      shippingStartDate: formatDate(getDefaultDate(0, -1)),
      shippingEndDate: formatDate(getDefaultDate(0, -1), true),
    };
    SessionStorage.setItem("shippingStartDate", filters.shippingStartDate);
    SessionStorage.setItem("shippingEndDate", filters.shippingEndDate);
    SessionStorage.setItem("filters", filters);
    globalProductivityRequest(filters);
    statusProcessFiltersRequest(filters);

    const inter = setInterval(function () {
      statusProcessFiltersRequest();
    }, 15000);

    return () => {
      clearInterval(inter);
      clearData();
    };
  }, [globalProductivityRequest, statusProcessFiltersRequest, clearData]);

  useEffect(mount, [mount]);

  useEffect(() => {
    if (globalProductivityData && !isFetching) {
      new Chart(chartRef.current, globalProductivityData.chartData);
      new Chart(chartReff.current, globalProductivityData.chartMark);
    }
  }, [globalProductivityData, isFetching]);

  const texts = Texts["pt-BR"].charts.globalProductivity;
  const colors = ChartsColors.globalDoughnut;

  const renderChart = React.useCallback(
    (chartRef, chartReff) => {
      return (
        <div>
          {isFetching ? (
            <SkeletonLoader
              variant="circle"
              height="300px"
              width="300px"
              style={{ margin: "auto" }}
            >
              <Style.GraphContainer
                data={globalProductivityData}
                loading={isFetching}
              ></Style.GraphContainer>
            </SkeletonLoader>
          ) : (
            <Style.GraphContainer
              data={globalProductivityData}
              loading={isFetching}
            >
              <canvas
                style={{
                  position: "absolute",
                  minHeight: 200,
                }}
                ref={chartRef}
              ></canvas>
              <canvas
                style={{
                  position: "absolute",
                  minHeight: 200,
                }}
                ref={chartReff}
              ></canvas>
            </Style.GraphContainer>
          )}

          <ChartDivider />
          <ChartDescription
            noMargin
            color={colors.primary}
            loading={isFetching}
            loadingWidth={250}
          >
            {texts.chartDescription}
          </ChartDescription>
        </div>
      );
    },
    [isFetching, texts, colors, globalProductivityData]
  );

  return (
    <>
      <BlockTitle>{texts.name()}</BlockTitle>
      <IntegratedComponentHolder
        showReload={!globalProductivityData && !isFetching}
        reloadMessage={texts.notFound.message}
        reloadCallback={() => globalProductivityRequest()}
        reloadLabel={texts.notFound.buttonLabel}
      >
        {renderChart(chartRef, chartReff)}
      </IntegratedComponentHolder>
    </>
  );
}

function mapStateToProps(state) {
  const { globalProductivityData, isFetching } = state.productivity;
  return {
    globalProductivityData,
    isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  const { globalProductivityRequest, exit, statusProcessFiltersRequest } =
    Creators;
  return {
    globalProductivityRequest: function (filters) {
      return dispatch(globalProductivityRequest(filters));
    },

    statusProcessFiltersRequest: function (filters) {
      return dispatch(statusProcessFiltersRequest(filters));
    },
    clearData: function (filters) {
      return dispatch(exit(filters));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalProductivity);
