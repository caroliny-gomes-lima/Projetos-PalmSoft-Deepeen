import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import StyleTable from "../styles/OrderingGridStyle";
import Style from "../styles/CostByDriversProcessStyle";
import Description from "./Description";
import Chart from "chart.js";

import { ChartsColors, Texts } from "../../../config";

function CostByDrivers({ table, graph, fetchingTable, fetchingGraph }) {
  const chartRef = React.useRef();

  React.useEffect(() => {
    if (graph) {
      new Chart(chartRef.current, graph?.chartData);
    }
  }, [graph]);

  const texts = Texts["pt-BR"].charts.costsByDriversAndProcess;
  const colors = ChartsColors.costsDriversProcess.dimensions;

  return (
    <>
      <Style.Graph>
        {fetchingGraph ? (
          <CircularProgress />
        ) : (
          <>
            <Style.Title>{texts.dimensions}</Style.Title>
            <Style.GraphText>
              <Style.GraphContainer>
                <canvas ref={chartRef} />
              </Style.GraphContainer>
              <Style.DescriptionGroup>
                <Description noMargin color={colors.blue}>
                  Dimensão 1
                </Description>
                <Description noMargin color={colors.red}>
                  Dimensão 2
                </Description>
                <Description noMargin color={colors.yellow}>
                  Dimensão 3
                </Description>
                <Description noMargin color={colors.orange}>
                  Dimensão N
                </Description>
              </Style.DescriptionGroup>
            </Style.GraphText>{" "}
          </>
        )}
      </Style.Graph>

      {fetchingTable ? (
        <CircularProgress />
      ) : (
        <Grid container direction="column">
          <Grid container direction="row">
            <Grid item xs={6}>
              <StyleTable.ColumnTitle>
                {texts.table.cost}
              </StyleTable.ColumnTitle>
            </Grid>
            <Grid item xs={6}>
              <StyleTable.ColumnTitle>
                {texts.table.dimension}
              </StyleTable.ColumnTitle>
            </Grid>
          </Grid>
          {table
            ? table.map((item, index) => (
                <StyleTable.GridData
                  container
                  direction="row"
                  spacing={1}
                  $isOdd={(index + 1) % 2 === 1}
                  key={index}
                >
                  <Grid item xs={6}>
                    <StyleTable.ItemText>{item.value}</StyleTable.ItemText>
                  </Grid>
                  <Grid item xs={6}>
                    <StyleTable.ItemText>{item.label}</StyleTable.ItemText>
                  </Grid>
                </StyleTable.GridData>
              ))
            : null}
        </Grid>
      )}
    </>
  );
}
export default CostByDrivers;
