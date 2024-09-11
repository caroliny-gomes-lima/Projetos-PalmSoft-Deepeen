import React from "react";
import Chart from "chart.js";
import { Grid } from "@material-ui/core";
import Description from "./Description";
import Style from "../styles/ProcessStyle";

function ProcessGraphs({ data, color, texts }) {
  const chartGlobal = React.useRef();
  const chartTurn1 = React.useRef();
  const chartTurn2 = React.useRef();
  const chartTurn3 = React.useRef();

  React.useEffect(() => {
    if (data) {
      new Chart(chartGlobal.current, data.global.chartData);
      new Chart(chartTurn1.current, data.firstTurn.chartData);
      new Chart(chartTurn2.current, data.secondTurn.chartData);
      new Chart(chartTurn3.current, data.thirdTurn.chartData);
    }
  }, [data]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Description
            noMargin
            subDescription={texts.subtitle}
            color={color.doughnutPrimary}
          >
            {texts.title}
          </Description>
          <Style.DoughnutContainer>
            <canvas ref={chartGlobal} />
          </Style.DoughnutContainer>
        </Grid>
        <Grid item xs={3}>
          <Style.BarContainer>
            <canvas ref={chartTurn1} />
          </Style.BarContainer>
          <Style.TurnText>{texts.firstChart}</Style.TurnText>
        </Grid>
        <Grid item xs={3}>
          <Style.BarContainer>
            <canvas ref={chartTurn2} />
          </Style.BarContainer>
          <Style.TurnText>{texts.secondChart}</Style.TurnText>
        </Grid>
        <Grid item xs={3}>
          <Style.BarContainer>
            <canvas ref={chartTurn3} />
          </Style.BarContainer>
          <Style.TurnText>{texts.thirdChart}</Style.TurnText>
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={2}>
          <Description noMargin color={color.doughnutPrimary}>
            {texts.ideal}
          </Description>
        </Grid>
        <Grid item xs={2}>
          <Description noMargin color={color.actual}>
            {texts.actual}
          </Description>
        </Grid>
      </Grid>
    </>
  );
}
export default ProcessGraphs;
