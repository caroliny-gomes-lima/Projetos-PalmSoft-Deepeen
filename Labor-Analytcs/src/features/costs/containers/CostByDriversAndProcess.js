import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Creators } from "../reduxSagas";
import { Grid } from "@material-ui/core";
import Style from "../styles/OrderingGridStyle";
import CostByDrivers from "../components/CostByDrivers";
import CostByProcess from "../components/CostByProcess";

function OrderingIdle({
  theme,
  dimensionsChartDataIsFetching,
  dimensionsChartData,
  dimensionsTableDataIsFetching,
  dimensionsTableData,
  processChartDataIsFetching,
  processChartData,
  processTableDataIsFetching,
  processTableData,
  costsDimensionsTableRequest,
  costsDimensionsChartRequest,
  costsProcessChartRequest,
  costsProcessTableRequest,
}) {
  const mount = React.useCallback(() => {
    costsDimensionsTableRequest();
    costsDimensionsChartRequest();
    costsProcessChartRequest();
    costsProcessTableRequest();
  }, [
    costsDimensionsTableRequest,
    costsDimensionsChartRequest,
    costsProcessChartRequest,
    costsProcessTableRequest,
  ]);

  useEffect(mount, [mount]);

  return (
    <>
      <Style.Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CostByDrivers
              table={dimensionsTableData}
              graph={dimensionsChartData}
              fetchingTable={dimensionsTableDataIsFetching}
              fetchingGraph={dimensionsChartDataIsFetching}
            />
          </Grid>
          <Grid item xs={6}>
            <CostByProcess
              table={processTableData}
              graph={processChartData}
              fetchingTable={processTableDataIsFetching}
              fetchingGraph={processChartDataIsFetching}
            />
          </Grid>
        </Grid>
      </Style.Container>
    </>
  );
}

function mapStateToProps(state) {
  const {
    dimensionsChartDataIsFetching,
    dimensionsChartData,
    dimensionsTableDataIsFetching,
    dimensionsTableData,
    processChartDataIsFetching,
    processChartData,
    processTableDataIsFetching,
    processTableData,
  } = state.costs;
  return {
    dimensionsChartDataIsFetching,
    dimensionsChartData,
    dimensionsTableDataIsFetching,
    dimensionsTableData,
    processChartDataIsFetching,
    processChartData,
    processTableDataIsFetching,
    processTableData,
  };
}

function mapDispatchToProps(dispatch) {
  const {
    costsDimensionsTableRequest,
    costsDimensionsChartRequest,
    costsProcessChartRequest,
    costsProcessTableRequest,
  } = Creators;
  return {
    costsDimensionsTableRequest() {
      return dispatch(costsDimensionsTableRequest());
    },
    costsDimensionsChartRequest() {
      return dispatch(costsDimensionsChartRequest());
    },
    costsProcessChartRequest() {
      return dispatch(costsProcessChartRequest());
    },
    costsProcessTableRequest() {
      return dispatch(costsProcessTableRequest());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderingIdle);
