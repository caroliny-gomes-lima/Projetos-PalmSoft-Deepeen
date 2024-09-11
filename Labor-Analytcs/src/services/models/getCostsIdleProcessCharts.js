import { ChartsColors } from "../../config";
import { Filters } from "../../lib";
import {
  createUniqueBarDataset,
  createUniqueBarScales,
} from "../helpers/CommonChartConfigs";
import Parse from "../helpers/Parse";

function createChartData(data, colors) {
  const iMax = data.values.length;
  const chartDatas = new Array(iMax);
  let i = 0;
  for (; i < iMax; i++) {
    chartDatas[i] = {
      idleValue: data.idleValues[i],
      chartData: {
        type: "horizontalBar",
        data: {
          labels: [Filters.taxMask(data.values[i])],
          datasets: [
            createUniqueBarDataset(
              data.values[i],
              Filters.taxMask(data.values[i]),
              colors[i][0]
            ),
          ],
        },
        options: {
          maintainAspectRatio: false,
          labels: {
            display: false,
          },
          legend: {
            display: false,
          },
          tooltips: {
            enabled: false,
          },

          scales: createUniqueBarScales(
            ChartsColors.commonLineChart.labelsColor,
            true,
            0,
            100,
            true
          ),
          chartArea: {
            backgroundColor: colors[i][1],
          },
        },
      },
    };
  }
  return chartDatas;
}

function parseFunction(item) {
  const iMax = item.chartData.length;
  const values = new Array(iMax);
  const idleValues = new Array(iMax);
  let i = 0;
  for (; i < iMax; i++) {
    values[i] = item.chartData[i].value;
    idleValues[i] = item.chartData[i].idleValue;
  }

  return {
    values,
    idleValues,
    averageValue: Filters.taxMask(item.averageValue),
  };
}

export default function getCostsIdleProcessCharts(response) {
  const parse = new Parse(response.data, response.endpoint, parseFunction);
  const colors = ChartsColors;
  const { averageValue, ...data } = parse.parse();
  const [checkout, separation, load, movement] = createChartData(data, [
    [colors.checkout.main, colors.checkout.actual],
    [colors.separation.main, colors.separation.actual],
    [colors.load.main, colors.load.actual],
    ["blue", "lightblue"], // TODO/HINT alterar cores movement
  ]);
  return {
    ...response,
    data: { averageValue, checkout, separation, load, movement },
  };
}
