import { ChartsColors, Texts } from "../../config";
import {
  createLineScales,
  createLayoutWithDatalabels,
  createBarDataset,
  createFixedDatalabels,
} from "../helpers/CommonChartConfigs";
import ChartDataLabels from "chartjs-plugin-datalabels";

const colors = ChartsColors;

export default function getCapacityHistoricLoadChart(response) {
  let i = 0;
  const { months, charts } = Texts["pt-BR"];
  const iMax = months.length;

  const labels = [];
  const averageArray = new Array(12);
  const barValues = new Array(12);

  try {
    for (; i < iMax; i++) {
      labels.push(months[i].initials);
      averageArray[i] = response.averageValue;
      barValues[i] = {
        ...createBarDataset(
          response.barValues[i],
          months.map((item) => item.initials),
          colors,
          i
        ),
        type: "bar",
      };
    }
  } catch (error) {}

  const chartData = {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          datalabels: {
            display: false,
          },
          borderColor: colors.commonLineChart.averageLine,
          borderWidth: 1,
          pointRadius: 0,
          data: averageArray,
        },
        {
          borderColor: colors.commonLineChart.referenceLine,
          borderWidth: 1,
          pointRadius: 0,
          data: response.lineValues,
        },
        {
          datalabels: {
            display: false,
          },
          type: "bar",
          label: 1,
          backgroundColor: colors.load.transparent,
          borderColor: colors.load.main,
          borderWidth: 1,
          data: response.barValues,
          barPercentage: 0.6,
        },
      ],
    },
    plugins: [ChartDataLabels],
    options: {
      maintainAspectRatio: false,
      plugins: {
        datalabels: createFixedDatalabels(
          colors.valueIndicative.background,
          colors.valueIndicative.border,
          colors.valueIndicative.labelInside,
          (value) => Math.round(value)
        ),
      },
      aspectRatio: 3,
      labels: {
        display: false,
      },
      elements: {
        line: {
          tension: 0,
        },
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },

      layout: createLayoutWithDatalabels(),
      scales: createLineScales(
        colors.commonLineChart.labelsColor,
        colors.commonLineChart.labelsColor,
        charts.historicCapacity.load
      ),
    },
  };

  return {
    data: { chartData },
  };
}
