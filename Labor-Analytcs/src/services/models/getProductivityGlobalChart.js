import models from ".";
import { ChartsColors, Texts } from "../../config";
import { Alerts, Filters } from "../../lib";
import { createDoughnutDataset } from "../helpers/CommonChartConfigs";

export default function getGlobalProductivityGraph(response) {
  var data = {};
  const text = Texts["pt-BR"].charts.globalProductivity;
  if (response.data.status === 0) {
    Alerts.alertWarning([text.inProcess]);
    return { error: "NOK" };
  }
  if (
    response.data.responseGlobalProductivity === null ||
    (response.data.responseGlobalProductivity.responseGlobalProductivity ===
      null &&
      response.data.responseGlobalProductivity
        .responseGlobalProductivityByOperator === null &&
      response.data.responseGlobalProductivity
        .responseGlobalProductivityBySector === null &&
      response.data.responseGlobalProductivity
        .responseGlobalProductivityGeneralData === null &&
      response.data.responseGlobalProductivity
        .responseGlobalProductivityHistory === null)
  ) {
    return { error: "OK" };
  }
  data["globalProductivity"] = getGlobalProductivity(
    response.data.responseGlobalProductivity.responseGlobalProductivity
  );
  data["productivityByOperator"] = models.getProductivityOrdering(
    response.data.responseGlobalProductivity
      .responseGlobalProductivityByOperator
  );
  data["productivityBySector"] = models.getProductivityProcessCharts(
    response.data.responseGlobalProductivity.responseGlobalProductivityBySector
  );
  data["productivityHistory"] = models.getHistoricProductivityChart(
    response.data.responseGlobalProductivity.responseGlobalProductivityHistory
  );
  data["generalData"] = getGeneralData(
    response.data.responseGlobalProductivity
      .responseGlobalProductivityGeneralData
  );
  data["processID"] = response.data.id;

  return data;
}

function getGeneralData(response) {
  let dataFormat = {};
  dataFormat["totalOt"] = response.totalOt
    ? parseInt(response.totalOt).toLocaleString("pt-BR")
    : 0;
  dataFormat["weightPerOt"] = response.weightPerOt
    ? parseFloat(response.weightPerOt).toLocaleString("pt-BR", {
        maximumFractionDigits: 1,
      })
    : 0;
  dataFormat["linesPerOt"] = response.linesPerOt
    ? parseFloat(response.linesPerOt).toLocaleString("pt-BR", {
        maximumFractionDigits: 1,
      })
    : 0;
  return dataFormat;
}

function getGlobalProductivity(response) {
  const labels = Texts["pt-BR"].charts.globalProductivity;
  const colors = ChartsColors.globalDoughnut;
  const FixedValues = response.productivity.map((i) => i.toFixed(1));
  const chartData = {
    type: "doughnut",
    data: {
      labels: ["", "", ""],
      datasets: [
        createDoughnutDataset(
          [30, 20, 50],
          null,
          [colors.red, colors.yellow, colors.green],
          3,
          [colors.bg, colors.bg, colors.bg]
        ),
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI,
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      cutoutPercentage: 80,
    },
    plugins: [
      {
        beforeDraw: function (chart) {
          var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;

          ctx.restore();
          var fontSize = (height / 150).toFixed(2);
          ctx.font = fontSize + "em neue bold";
          ctx.textBaseline = "bottom";
          ctx.fillStyle = colors.textColor;

          var text = Filters.taxMask(response.productivity[0]),
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

          ctx.fillText(text, textX, textY + chart.chart.height / 4);
          ctx.save();
        },
      },
    ],
  };

  const chartMark = {
    type: "doughnut",
    data: {
      labels: ["", "", ""],
      datasets: [
        {
          data: barLocation(FixedValues[0]),
          backgroundColor: [
            "rgba(0,0,0,0)",
            "rgba(255,255,255,1)",
            "rgba(0,0,0,0)",
          ],
          borderColor: [
            "rgba(0, 0, 0 ,0)",
            getColor(FixedValues[0]),
            "rgba(0, 0, 0 ,0)",
          ],
          borderWidth: 3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      cutoutPercentage: 80,
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI,
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
    },
  };
  return {
    chartData,
    chartMark,
    peakValue: response.peakValue,
    occupation: response.occupation,
    ftes: response.ftes,
    hoursSpent: Filters.taxMask(response.productivity[0]),
    labels,
  };
}

function barLocation(value) {
  let v1;
  let v2;
  if (value >= 150) {
    v1 = 99;
    v2 = 0;
  } else if (value >= 80) {
    v1 = value - 50;
    v2 = 100 - 1 - v1;
  } else {
    v1 = (value * 30) / 80;
    v2 = 100 - 1 - v1;
  }

  return [v1, 1, v2];
}

function getColor(value) {
  const colors = ChartsColors.globalDoughnut;
  if (value >= 100) return colors.green;
  else if (value >= 80) return colors.yellow;
  else return colors.red;
}
