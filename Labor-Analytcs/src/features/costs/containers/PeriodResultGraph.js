import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Creators } from "../reduxSagas";
import { CircularProgress } from "@material-ui/core";
import Style from "../styles/PeriodResultStyles";
import Chart from "chart.js";

function PeriodResultGraph({
  theme,
  periodResultBarChartData,
  periodResultBarChartIsFetching,
  costsPeriodResultBarChartRequest,
}) {
  const chartRef = React.useRef();
  const mount = React.useCallback(() => {
    costsPeriodResultBarChartRequest();
  }, [costsPeriodResultBarChartRequest]);

  useEffect(mount, [mount]);

  useEffect(() => {
    if (periodResultBarChartData && !periodResultBarChartIsFetching) {
      new Chart(chartRef.current, periodResultBarChartData.chartData);
    }
  }, [periodResultBarChartData, periodResultBarChartIsFetching]);

  return (
    <>
      {periodResultBarChartIsFetching ? (
        <CircularProgress />
      ) : (
        <Style.Container>
          <canvas ref={chartRef} />
        </Style.Container>
      )}
    </>
  );
}

function mapStateToProps(state) {
  const {
    periodResultBarChartData,
    periodResultBarChartIsFetching,
  } = state.costs;
  return {
    periodResultBarChartData,
    periodResultBarChartIsFetching,
  };
}

function mapDispatchToProps(dispatch) {
  const { costsPeriodResultBarChartRequest } = Creators;
  return {
    costsPeriodResultBarChartRequest() {
      return dispatch(costsPeriodResultBarChartRequest());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PeriodResultGraph);
