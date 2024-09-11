import { Texts, ChartsColors } from "../../config";
import {
  createLineScales,
  createCleanLine,
} from "../helpers/CommonChartConfigs";

export default function getOpportunitiesUnassignedHours(response) {
  const { months, charts } = Texts["pt-BR"];
  const colors = ChartsColors.opportunities.unassignedHours;
  const iMax = months.length;
  let i = 0;

  const labels = [];
  for (; i < iMax; i++) {
    const item = months[i];
    labels.push(item.initials);
  }
  const chartData = {
    type: "line",
    data: {
      labels,
      datasets: [
        createCleanLine(colors.yellowLine, response.data.yellowLine),
        createCleanLine(colors.redLine, response.data.redLine),
        createCleanLine(colors.cyanLine, response.data.cyanLine),
      ],
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
      scales: createLineScales(colors.gridColor, colors.labelsColor),
    },
  };

  return {
    ...response,
    data: { chartData, labels: charts.historicProductivity },
  };
}
