import { Texts, ChartsColors } from "../../config";
import {
  createLineScales,
  createLayoutWithDatalabels,
  createBarDataset,
  createFixedDatalabels,
} from "../helpers/CommonChartConfigs";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Filters } from "../../lib";

const colors = ChartsColors;

export default function getCapacityHistoricSeparationChart(response) {
  let i = 0;
  const { charts } = Texts["pt-BR"];
  const iMax = response.productivityVariation.length;

  const labels = [];
  const averageArray = new Array(iMax);
  const barValues = new Array(iMax);

  try {
    for (; i < iMax; i++) {
      labels.push(
        Filters.fixDateToLabel(response.productivityVariation[i].date)
      );
      averageArray[i] = response.averageValue;
      barValues[i] = {
        ...createBarDataset(
          response.barValues[i],
          Filters.fixDateToLabel(response.productivityVariation[i].date),
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
          backgroundColor: colors.separation.transparent,
          borderColor: colors.separation.main,
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
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
      elements: {
        line: {
          tension: 0,
        },
      },

      layout: createLayoutWithDatalabels(),
      scales: createLineScales(
        colors.commonLineChart.labelsColor,
        colors.commonLineChart.labelsColor,
        charts.historicCapacity.separation
      ),
    },
  };

  return {
    data: { chartData },
  };
}
