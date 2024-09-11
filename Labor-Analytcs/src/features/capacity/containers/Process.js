import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ChartsColors, Spacing, Texts } from "../../../config";
import { Creators } from "../reduxSagas";
import { Grid } from "@material-ui/core";
import Style from "../styles/ProcessStyle";
import ProcessGraphs from "../components/ProcessGraphs";
import { IntegratedComponentHolder, SkeletonLoader } from "../../../components";

function Process({ theme, processData, processIsFetching, processRequest }) {
  const mount = React.useCallback(() => {
    processRequest();
  }, [processRequest]);

  useEffect(mount, [mount]);

  const texts = Texts["pt-BR"].charts.capacityProcess;
  const colors = ChartsColors.processCapacity;

  const renderCharts = React.useCallback(() => {
    const items = ["separation", "checkout", "load"];

    return items.map((key, index) => (
      <Grid key={key} item xs={12} xl={6}>
        {processIsFetching ? (
          <Grid spacing={2} container>
            <Grid item>
              <Grid container alignItems="center">
                <SkeletonLoader
                  variant="circle"
                  height="10px"
                  width="10px"
                  style={{ margin: Spacing(1.5, 0.5, 0, 0) }}
                ></SkeletonLoader>
                <SkeletonLoader
                  height="20px"
                  width="100px"
                  style={{ margin: Spacing(1.5, 2, 0, 0) }}
                ></SkeletonLoader>
              </Grid>
              <SkeletonLoader
                height="10px"
                width="60px"
                style={{ margin: Spacing(1, 0) }}
              ></SkeletonLoader>
              <SkeletonLoader
                variant="circle"
                height="100px"
                width="100px"
                style={{ margin: "auto" }}
              ></SkeletonLoader>
            </Grid>
            <Grid item xs>
              <SkeletonLoader
                height="150px"
                width="95%"
                style={{ marginTop: Spacing(1.5) }}
              ></SkeletonLoader>
            </Grid>
          </Grid>
        ) : (
          <Style.GraphsContainer>
            {processData != null ? (
              <ProcessGraphs
                color={colors[key]}
                data={processData[key]}
                texts={texts[key]}
              />
            ) : null}
          </Style.GraphsContainer>
        )}
      </Grid>
    ));
  }, [processIsFetching, processData, texts, colors]);

  return (
    <IntegratedComponentHolder
      direction="row"
      rowToColOnMedia="xl"
      showReload={!processData && !processIsFetching}
      reloadMessage={texts.notFound.message}
      reloadCallback={processRequest}
      reloadLabel={texts.notFound.buttonLabel}
    >
      {renderCharts()}
    </IntegratedComponentHolder>
  );
}

function mapStateToProps(state) {
  const { processData, processIsFetching } = state.capacity;
  return {
    processData,
    processIsFetching,
  };
}

function mapDispatchToProps(dispatch) {
  const { capacityProcessRequest } = Creators;
  return {
    processRequest() {
      return dispatch(capacityProcessRequest());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Process);
