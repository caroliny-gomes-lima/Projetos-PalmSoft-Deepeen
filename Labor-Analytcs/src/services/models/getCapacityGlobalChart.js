import { ChartsColors, Texts } from "../../config";
import { Filters } from "../../lib";
import {
  createDoughnutDataset,
  createDoughnutOptions,
} from "../helpers/CommonChartConfigs";

export default function getGlobalCapacityChart(response) {
  const labels = Texts["pt-BR"].charts.globalProductivity;
  const colors = ChartsColors.globalDoughnut;
  const chartData = {
    type: "doughnut",
    data: {
      datasets: [
        createDoughnutDataset(
          response.data.productivity,
          [labels.spentHours, labels.hoursLeft],
          [colors.primary, colors.secundary]
        ),
      ],
    },
    options: createDoughnutOptions("", "%"),
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

          var text = Filters.taxMask(response.data.productivity[0]),
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      },
    ],
  };

  return {
    ...response,
    data: {
      chartData,
      peakValue: response.data.peakValue,
      occupation: response.data.occupation,
      ftes: response.data.ftes,
      hoursSpent: Filters.taxMask(response.data.productivity[0]),
      labels,
    },
  };
}
