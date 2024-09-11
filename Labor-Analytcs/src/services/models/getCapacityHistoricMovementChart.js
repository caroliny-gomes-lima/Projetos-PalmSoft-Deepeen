import { Texts } from "../../config";
import {
  createLineScales,
  createLayoutWithDatalabels,
  createBarDataset,
  createFixedDatalabels,
} from "../helpers/CommonChartConfigs";
import ChartDataLabels from "chartjs-plugin-datalabels";

const colors = [
  "yellow", // TODO/HINT alterar
  "blue", // TODO/HINT alterar
  "green", // TODO/HINT alterar
];

export default function getCapacityHistoricMovementChart(response) {
  let i = 0;
  const { months } = Texts["pt-BR"];
  const iMax = months.length;

  const labels = [];
  const averageArray = new Array(12);
  const barValues = new Array(12);

  for (; i < iMax; i++) {
    labels.push(months[i].initials);
    averageArray[i] = response.data.averageValue;
    barValues[i] = {
      ...createBarDataset(
        response.data.barValues[i],
        months.map((item) => item.initials),
        colors,
        i
      ),
      type: "bar",
    };
  }
  const chartData = {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          datalabels: {
            display: false,
          },
          borderColor: colors[0],
          borderWidth: 1,
          pointRadius: 0,
          data: averageArray,
        },
        {
          borderColor: colors[1],
          borderWidth: 1,
          pointRadius: 0,
          data: response.data.lineValues,
        },
        {
          datalabels: {
            display: false,
          },
          type: "bar",
          label: 1,
          backgroundColor: "green",
          data: response.data.barValues,
          barPercentage: 0.6,
        },
      ],
    },
    plugins: [ChartDataLabels],
    options: {
      plugins: {
        datalabels: createFixedDatalabels(
          "#83B5D1BB", // TODO/HINT cor interna do indicativo de valor
          "#83B5D1", // TODO/HINT cor da borda do indicativo de valor
          "white", // TODO/HINT cor do indicativo de valor,
          (value) => Math.round(value)
        ),
      },
      aspectRatio: 3,
      labels: {
        display: false,
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },

      layout: createLayoutWithDatalabels(),
      scales: createLineScales("white", "white"),
    },
  };

  return {
    ...response,
    data: { chartData },
  };
}
