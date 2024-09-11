import ChartDataLabels from "chartjs-plugin-datalabels";
import { Filters } from "../../lib";
import {
  createBarDataset,
  createBarScales,
  createDoughnutDataset,
  createDoughnutOptions,
  createFixedDatalabels,
  createLayoutWithDatalabels,
} from "../helpers/CommonChartConfigs";

function createDoughnutChartData(data, labels, colors) {
  return {
    chartData: {
      type: "doughnut",
      data: {
        datasets: [createDoughnutDataset(data, labels, colors)],
      },
      plugins: [
        {
          beforeDraw: function (chart) {
            var width = chart.chart.width,
              height = chart.chart.height,
              ctx = chart.chart.ctx;

            ctx.restore();
            var fontSize = (height / 180).toFixed(2);
            ctx.font = fontSize + "em neue bold";
            ctx.textBaseline = "middle";
            ctx.fillStyle = colors.textColor;

            var text = Filters.taxMask(data[0]),
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;

            ctx.fillText(text, textX, textY);
            ctx.save();
          },
        },
      ],
      options: createDoughnutOptions("", "%"),
    },
    labels,
  };
}

function createBarChartData(data, labels, colors) {
  return {
    chartData: {
      type: "bar",
      data: {
        datasets: [
          createBarDataset(data, labels.planned, colors, 0),
          createBarDataset(data, labels.current, colors, 1),
        ],
      },
      plugins: [ChartDataLabels],
      options: {
        maintainAspectRatio: false,
        plugins: {
          datalabels: createFixedDatalabels(
            "#83B5D1BB", // TODO/HINT cor interna do indicativo de valor
            "#83B5D1", // TODO/HINT cor da borda do indicativo de valor
            "white", // TODO/HINT cor do indicativo de valor,
            (value) => Math.round(value)
          ),
        },
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
        scales: createBarScales(
          "white", // TODO/HINT alterar cor das linhas do grid
          "white" // TODO/HINT alterar cor de fonte dos labels
        ),
      },
    },
    labels,
  };
}

function createChartData(data, barColors, doughnutColors) {
  const labels = ["x", "y"];
  return {
    firstTurn: createBarChartData(data.firstTurn, labels, barColors),
    secondTurn: createBarChartData(data.secondTurn, labels, barColors),
    thirdTurn: createBarChartData(data.thirdTurn, labels, barColors),
    global: createDoughnutChartData(data.global, labels, doughnutColors),
  };
}

export default function getCapacityMovementProcessCharts(response) {
  return {
    ...response,
    data: createChartData(
      response.data,
      ["green", "blue"], // TODO/HINT alterar cores das barras
      ["green", "blue"] // TODO/HINT alterar cores da rosquinha
    ),
  };
}
