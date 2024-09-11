import { Texts, ChartsColors } from "../../config";
import {
  createBarDataset,
  createBarScales,
} from "../helpers/CommonChartConfigs";
import Parse from "../helpers/Parse";

function createChartData(data, groupName, labels, colors, maxY) {
  const barColors = [colors[`${groupName}Ideal`], colors[`${groupName}Actual`]];
  return {
    chartData: {
      type: "bar",
      data: {
        datasets: [
          createBarDataset(data, labels.planned, barColors, 0),
          createBarDataset(
            data,
            labels.current,
            barColors,
            1,
            colors[`${groupName}ActualBorder`]
          ),
        ],
      },
      options: {
        hover: {
          animationDuration: 0,
        },
        animation: {
          duration: 1,
          onComplete: function () {
            var chartInstance = this.chart,
              height = this.chart.chart.height,
              ctx = chartInstance.ctx;

            var fontSize = (height / 300).toFixed(2);
            ctx.font = fontSize + "em neue roman";
            ctx.textBaseline = "bottom";
            ctx.fillStyle = colors.textColor;
            ctx.textAlign = "center";

            this.data.datasets.forEach(function (dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function (bar, index) {
                var data = dataset.data[index]?.toFixed(1) + "%";
                ctx.fillText(data, bar._model.x, bar._model.y - 2);
              });
            });
          },
        },
        layout: {
          padding: {
            top: 15,
          },
        },
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
        scales: createBarScales(colors.lines, colors.label, false, maxY),
      },
    },
    labels,
  };
}

function parseFunction(item) {
  return Number(item.toFixed(2));
}

function parseToChart(data, groupName, labels, colors, maxValue) {
  const parse = new Parse(
    data,
    `chart productivity error: ${groupName}`,
    parseFunction
  );
  return createChartData(
    parse.parseArray(),
    groupName,
    labels,
    colors,
    maxValue
  );
}

export default function getProductivityCheckoutProcessChart(response) {
  const labels = Texts["pt-BR"].charts.productivityProcess;
  const colors = ChartsColors.processProductivity;
  const { separator, checkout, shipper } = response;
  const maxValue = getMaxY(response);
  const data = {
    separation: parseToChart(separator, "separation", labels, colors, maxValue),
    checkout: parseToChart(checkout, "checkout", labels, colors, maxValue),
    load: parseToChart(shipper, "load", labels, colors, maxValue),
  };
  return data;
}

function getMaxY(response) {
  const { separator, checkout, shipper } = response;
  let maxValue = 0;
  separator.forEach((i) => {
    if (i > maxValue) maxValue = i;
  });
  checkout.forEach((i) => {
    if (i > maxValue) maxValue = i;
  });
  shipper.forEach((i) => {
    if (i > maxValue) maxValue = i;
  });
  return Math.ceil(maxValue / 50) * 50;
}
