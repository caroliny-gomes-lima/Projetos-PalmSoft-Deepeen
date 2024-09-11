import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Creators } from "../reduxSagas";
import { CircularProgress, Divider, Grid } from "@material-ui/core";
import Style from "../styles/IdleProcessCostStyle";
import Chart from "chart.js";
import Description from "../components/Description";
import { ChartsColors, Texts } from "../../../config";

function OrderingIdle({
  theme,
  idleProcessData,
  idleProcessIsFetching,
  costsIdleProcessRequest,
}) {
  const checkoutRef = React.useRef();
  const separationRef = React.useRef();
  const loadRef = React.useRef();
  const mount = React.useCallback(() => {
    costsIdleProcessRequest();
  }, [costsIdleProcessRequest]);

  React.useEffect(() => {
    if (idleProcessData && !idleProcessIsFetching) {
      new Chart(checkoutRef.current, idleProcessData.checkout.chartData);
      new Chart(separationRef.current, idleProcessData.separation.chartData);
      new Chart(loadRef.current, idleProcessData.load.chartData);
    }
  }, [idleProcessData, idleProcessIsFetching]);

  useEffect(mount, [mount]);
  const texts = Texts["pt-BR"].charts.idleProcessCost;
  return (
    <>
      {idleProcessIsFetching ? (
        <CircularProgress />
      ) : (
        <Style.Content>
          <Style.ChartAndText>
            <Style.GraphContainer>
              <canvas height={50} ref={separationRef} />
            </Style.GraphContainer>
            <Style.ItemText>
              {texts.idleTime + idleProcessData?.separation.idleValue}
            </Style.ItemText>
          </Style.ChartAndText>
          <Style.ChartAndText>
            <Style.GraphContainer>
              <canvas height={50} ref={checkoutRef} />
            </Style.GraphContainer>
            <Style.ItemText>
              {texts.idleTime + idleProcessData?.checkout.idleValue}
            </Style.ItemText>
          </Style.ChartAndText>
          <Style.ChartAndText>
            <Style.GraphContainer>
              <canvas height={50} ref={loadRef} />
            </Style.GraphContainer>
            <Style.ItemText>
              {texts.idleTime + idleProcessData?.load.idleValue}
            </Style.ItemText>
          </Style.ChartAndText>

          <Style.DescriptionContainer>
            <Divider />
            <Grid container>
              <Grid item xs={6}>
                <Description noMargin color={ChartsColors.separation.main}>
                  {texts.separationLabel}
                </Description>
              </Grid>
              <Grid item xs={6}>
                <Description noMargin color={ChartsColors.checkout.main}>
                  {texts.checkoutLabel}
                </Description>
              </Grid>
              <Grid item xs={6}>
                <Description noMargin color={ChartsColors.load.main}>
                  {texts.loadLabel}
                </Description>
              </Grid>
            </Grid>
          </Style.DescriptionContainer>
        </Style.Content>
      )}
    </>
  );
}

function mapStateToProps(state) {
  const { idleProcessData, idleProcessIsFetching } = state.costs;
  return {
    idleProcessData,
    idleProcessIsFetching,
  };
}

function mapDispatchToProps(dispatch) {
  const { costsIdleProcessRequest } = Creators;
  return {
    costsIdleProcessRequest() {
      return dispatch(costsIdleProcessRequest());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderingIdle);
