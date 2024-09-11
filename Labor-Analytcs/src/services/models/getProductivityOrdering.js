import { Filters } from "../../lib";
import Parse from "../helpers/Parse";
import { ChartsColors, Texts } from "../../config";

function formatProcess(value) {
  const process =
    Texts["pt-BR"].charts.productivityOrdering.process[value.toLowerCase()];
  return process ? process : Filters.capitalizeBySeparators(value, " ");
}

function parseFunction(item) {
  if (item.registrationId === "LABOR") {
    return;
  }
  return {
    name: item.name,
    registrationId: item.registrationId,
    productivity: item.productivity,
    process: formatProcess(item.process),
    currentRank: `="${item.ranking?.current}"`,
    position: item.ranking?.position,
    lastMonthRank: item.otsAtMonth["30"],
    // lastYearRank: item.ranking?.lastYear,
    // rankTrend: item.ranking?.trend,
    chartData: ChartData(item),
    productivityTax: Filters.taxMask(item.productivity),
    checkoutEquipments: item.checkoutMetrics?.equipments,
    checkoutLinesPerOt: Number(item.checkoutMetrics?.linesPerOt).toFixed(1),
    checkoutWeightPerOt: Number(item.checkoutMetrics?.weightPerOt).toFixed(1),
    separationdisplacement: Number(
      item.separationMetrics?.displacement / 1000
    ).toFixed(1),
    separationLinesPerOt: Number(item.separationMetrics?.linesPerOt).toFixed(1),
    separationWeightPerOt: Number(item.separationMetrics?.weightPerOt).toFixed(
      1
    ),
  };
}

function ChartData(item) {
  return {
    type: "horizontalBar",
    data: {
      labels: [],
      datasets: [
        {
          data: [item.productivity > 100 ? 100 : item.productivity],
          backgroundColor: ChartsColors.orderingProductivity.chartFill,
        },
        {
          data: [item.productivity > 100 ? 0 : 100 - item.productivity],
          backgroundColor: ChartsColors.orderingProductivity.chartBackground,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            display: false,
            stacked: true,
          },
        ],
        yAxes: [
          {
            display: false,
            stacked: true,
          },
        ],
      },
    },
  };
}

export default function getProductivityOrdering(response) {
  const parse = new Parse(response, "getProductivityOrdering", parseFunction);

  return parse.parseArray();
}
