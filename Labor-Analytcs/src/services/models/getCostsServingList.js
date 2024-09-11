import { ChartsColors } from "../../config";
import { Filters } from "../../lib";
import Parse from "../helpers/Parse";

function parseFunction(item) {
  return {
    name: item.name,
    registrationId: item.registrationId,
    utilization: item.utilization,
    hours: item.hours,
    cost: item.cost,
    freight: item.freight,
    total: item.total,
    provided: item.provided,
    result: item.result,
    chartData: ChartData(item),
    utilizationFormated: Filters.taxMask(item.utilization),
    costFormated: Filters.convertMoneyTextMask(item.cost),
    freightFormated: Filters.convertMoneyTextMask(item.freight),
    totalFormated: Filters.convertMoneyTextMask(item.total),
    providedFormated: Filters.convertMoneyTextMask(item.provided),
  };
}

function ChartData(item) {
  return {
    type: "horizontalBar",
    data: {
      labels: [],
      datasets: [
        {
          data: [item.utilization],
          backgroundColor: ChartsColors.orderingProductivity.chartFill,
        },
        {
          data: [100 - item.utilization],
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

export default function getCostsProductivityOrdering(response) {
  const parse = new Parse(response.data, response.endpoint, parseFunction);
  return { ...response, data: parse.parseArray() };
}
