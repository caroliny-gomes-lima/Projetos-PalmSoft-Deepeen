import ChartDataLabels from "chartjs-plugin-datalabels";
import { Texts, ChartsColors } from "../../config";
import {
  createFixedDatalabels,
  createSimpleLineScales,
  createLayoutWithDatalabels,
} from "../helpers/CommonChartConfigs";
import { Filters } from "../../lib";
import Chart from "chart.js";

export default function getHistoricProductivityGraph(response) {
  let i = 0;
  const { charts } = Texts["pt-BR"];
  const colors = ChartsColors.historicProductivity;
  const filterProductivityVariation = response.productivityVariation.filter(
    (b) => b.value > 0
  );
  const iMax = filterProductivityVariation.length;

  const labels = [];
  const productivityVariation = new Array(iMax);
  const benchmarkArray = new Array(iMax);
  const averageArray = new Array(iMax);

  for (; i < iMax; i++) {
    productivityVariation[i] = filterProductivityVariation[i].value;
    labels.push(Filters.fixDateToLabel(filterProductivityVariation[i].date));
    benchmarkArray[i] = response.productivityBenchmark;
    averageArray[i] = response.averageProductivity;
  }
  const chartData = {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          borderColor: colors.productivityLine,
          borderWidth: 1,
          pointRadius: 2,
          pointBorderWidth: 0.5,
          pointBackgroundColor: colors.productivityDot,
          pointBorderColor: colors.productivityDotBorder,
          data: productivityVariation,
        },
        {
          datalabels: {
            display: false,
          },
          borderColor: colors.averageLine,
          borderWidth: 1,
          pointRadius: 0,
          data: benchmarkArray,
        },
        {
          datalabels: {
            display: false,
          },
          borderColor: colors.referenceLine,
          borderWidth: 1,
          pointRadius: 0,
          data: averageArray,
        },
      ],
    },
    plugins: [ChartDataLabels],
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
      plugins: {
        datalabels: createFixedDatalabels(
          colors.valueIndicativeBackground,
          colors.valueIndicativeBorder,
          colors.valueIndicative,
          (value, context) => {
            const valueData = Number(value).toFixed(1);
            if (iMax > 32) {
              return `${labels[context.dataIndex]}\n${valueData.replace(
                ".",
                ","
              )}%`;
            } else {
              return valueData.replace(".", ",");
            }
          },
          iMax > 32
        ),
      },
      onHover: function (event, elements) {
        var chart = this;

        // Store hovered elements under a private property
        // named $_user_ to make sure it doesn't conflict.
        var expando = chart.$_user_ || (chart.$_user_ = {});

        // To prevent updating the chart for every mouse move,
        // let's first check that the hovered items have changed.
        if (!Chart.helpers.arrayEquals(expando.hovered, elements)) {
          expando.hovered = elements;
          chart.update();
        }
      },
      layout: createLayoutWithDatalabels(),
      scales: createSimpleLineScales(
        colors.gridColor,
        colors.labelsColor,
        false
      ),
    },
  };

  return {
    chartData,
    labels: charts.historicProductivity,
    productivityBenchmark: Filters.taxMask(benchmarkArray[0]),
    averageProductivity: Filters.taxMask(averageArray[0]),
  };
}
