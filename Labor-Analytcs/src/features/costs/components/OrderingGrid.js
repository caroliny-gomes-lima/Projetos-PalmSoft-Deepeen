import React from "react";
import { Grid } from "@material-ui/core";
import Style from "../styles/OrderingGridStyle";
import OrderingGridGraph from "./OrderingGridGraph";
import { Texts } from "../../../config";

function OrderingGrid({ data }) {
  const texts = Texts["pt-BR"].charts.costsServing.table;

  return (
    <Grid container direction="column">
      <Grid container direction="row">
        <Grid item xs={2}>
          <Style.ColumnTitle>{texts.name}</Style.ColumnTitle>
        </Grid>
        <Grid item xs={1}>
          <Style.ColumnTitle>{texts.code}</Style.ColumnTitle>
        </Grid>
        <Grid item xs={1}>
          <Style.ColumnTitle>{texts.hour}</Style.ColumnTitle>
        </Grid>
        <Grid item xs={3}>
          <Style.ColumnTitle>{texts.utilization}</Style.ColumnTitle>
        </Grid>
        <Grid item xs={1}>
          <Style.ColumnTitle>{texts.armCost}</Style.ColumnTitle>
        </Grid>
        <Grid item xs={1}>
          <Style.ColumnTitle>{texts.freight}</Style.ColumnTitle>
        </Grid>
        <Grid item xs={1}>
          <Style.ColumnTitle>{texts.total}</Style.ColumnTitle>
        </Grid>
        <Grid item xs={1}>
          <Style.ColumnTitle>{texts.foreseen}</Style.ColumnTitle>
        </Grid>
        <Grid item xs={1}>
          <Style.ColumnTitle>{texts.result}</Style.ColumnTitle>
        </Grid>
      </Grid>
      {data
        ? data.map((item, index) => (
            <Style.GridData
              container
              direction="row"
              spacing={1}
              $isOdd={(index + 1) % 2 === 1}
              key={index}
            >
              <Grid item xs={2}>
                <Style.ItemText>{item.name}</Style.ItemText>
              </Grid>
              <Grid item xs={1}>
                <Style.ItemText>{item.registrationId}</Style.ItemText>
              </Grid>
              <Grid item xs={1}>
                <Style.ItemText>{item.hours}</Style.ItemText>
              </Grid>
              <Grid item xs={3}>
                <Style.ItemText>
                  <Style.ChartText>
                    <Style.GraphContainer>
                      <OrderingGridGraph data={item.chartData} />
                    </Style.GraphContainer>
                    {item.utilizationFormated}
                  </Style.ChartText>
                </Style.ItemText>
              </Grid>
              <Grid item xs={1}>
                <Style.ItemText>{item.costFormated}</Style.ItemText>
              </Grid>
              <Grid item xs={1}>
                <Style.ItemText>{item.freightFormated}</Style.ItemText>
              </Grid>
              <Grid item xs={1}>
                <Style.ItemText>{item.totalFormated}</Style.ItemText>
              </Grid>
              <Grid item xs={1}>
                <Style.ItemText>{item.providedFormated}</Style.ItemText>
              </Grid>
              <Grid item xs={1}>
                <Style.ItemText>{item.result}</Style.ItemText>
              </Grid>
            </Style.GridData>
          ))
        : null}
    </Grid>
  );
}
export default OrderingGrid;
