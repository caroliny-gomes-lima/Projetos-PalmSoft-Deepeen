import { ChartsColors } from "../../config";
import { createLineScales } from "../helpers/CommonChartConfigs";

export default function getOpportunitiesDimensionsResultChart(response) {
  const colors = ChartsColors.opportunities.dimensionsResult;
  const { labels, datasets } = response.data;
  const chartData = {
    type: "bubble",
    data: {
      labels,
      datasets: datasets.map((item, index) => ({
        ...item,
        borderColor: colors[index],
        backgroundColor: colors[index],
      })),
    },
    options: {
      responsive: true,
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
      scales: createLineScales(
        colors.gridColor,
        colors.labelsColor,
        "INSERIR LABEL", // TODO/HINT inserir valor do "pt-br"
        "INSERIR LABEL", // TODO/HINT inserir valor do "pt-br",
        false,
        false,
        false,
        false
      ),
    },
  };

  return {
    ...response,
    data: { chartData, labels },
  };
}
