import { ChartsColors, Texts } from "../../config";
import {
  createLineScales,
  createLayoutWithDatalabels,
  createBarDataset,
  createFixedDatalabels,
} from "../helpers/CommonChartConfigs";
import ChartDataLabels from "chartjs-plugin-datalabels";

const colors = ChartsColors;

export default function getCapacityHistoricCheckoutChart(response) {
  let i = 0;
  const { months, charts } = Texts["pt-BR"];
  const iMax = response.productivityVariation.length;

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
          colors
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
          backgroundColor: colors.checkout.transparent,
          borderColor: colors.checkout.main,
          borderWidth: 1,
          data: response.barValues,
          barPercentage: 0.6,
          responsive: true,
          maintainAspectRatio: false,
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
      elements: {
        line: {
          tension: 0,
        },
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
      scales: createLineScales(
        colors.commonLineChart.labelsColor,
        colors.commonLineChart.labelsColor,
        charts.historicCapacity.checkout
      ),
    },
  };

  return {
    data: { chartData },
  };
}
