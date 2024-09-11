import { ChartsColors, Texts } from "../../config";
import { createDoughnutDataset } from "../helpers/CommonChartConfigs";

export default function getCostsDimensionsChart(response) {
  const labels = Texts["pt-BR"].charts.globalProductivity;
  const colors = ChartsColors.costsDriversProcess.dimensions;
  const chartData = {
    type: "pie",
    data: {
      datasets: [
        createDoughnutDataset(
          response.data.values,
          [labels.spentHours, labels.hoursLeft],
          [colors.blue, colors.red, colors.yellow, colors.orange]
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
      labels: response.data.labels,
    },
  };
}
