import { Filters } from "../../lib";
import Parse from "../helpers/Parse";
import { ChartsColors } from "../../config";

function parseFunction(item) {
  return {
    name: item.name,
    registrationId: item.registrationId,
    utilization: item.utilization,
    process: item.process,
    utilizationTax: Filters.taxMask(item.utilization),
    chartData: ChartData(item),
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

export default function getIdleOrdering(response) {
  const parse = new Parse(response.data, response.endpoint, parseFunction);
  return { ...response, data: parse.parseArray() };
}
