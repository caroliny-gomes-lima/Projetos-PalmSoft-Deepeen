import { Texts, ChartsColors } from "../../config";
import { createLineScales } from "../helpers/CommonChartConfigs";

function createChartData(data, labels, graphColors, colors) {
  return {
    chartData: {
      type: "bar",
      data: {
        labels: Texts["pt-BR"].months.map((item) => item.fullName),
        datasets: [
          {
            label: labels.bottomValuesLabels,
            data: data.bottomValues,
            backgroundColor: graphColors.bottomColor,
            borderColor: graphColors.bottomBorder,
            borderWidth: 1,
          },
          {
            label: labels.topValuesLabels,
            data: data.topValues,
            backgroundColor: graphColors.topColor,
            borderColor: graphColors.topBorder,
            borderWidth: 1,
          },
        ],
      },

      options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false,
        },
        labels: {
          display: false,
        },
        scales: createLineScales(
          colors.gridColor,
          colors.labelsColor,
          labels.workLoad,
          true
        ),
      },
    },
    labels,
  };
}

export default function getProductivityCheckoutProcessChart(response) {
  const labels = Texts["pt-BR"].charts.periodResult;
  const colors = ChartsColors;
  return {
    ...response,
    data: createChartData(
      response.data,
      labels,
      colors.periodResult.graph,
      colors.commonLineChart
    ),
  };
}
