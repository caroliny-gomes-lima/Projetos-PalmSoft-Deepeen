import { ChartsColors, Texts } from "../../config";

import { createDoughnutDataset } from "../helpers/CommonChartConfigs";

export default function getCostsProcessChart(response) {
  const labels = Texts["pt-BR"].charts.globalProductivity;
  const colors = ChartsColors;
  const chartData = {
    type: "pie",
    data: {
      datasets: [
        createDoughnutDataset(
          response.data.values,
          [labels.spentHours, labels.hoursLeft],
          [colors.separation.main, colors.checkout.main, colors.load.main]
        ),
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {},
    },
  };

  return {
    ...response,
    data: {
      chartData,
      labels,
    },
  };
}
