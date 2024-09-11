import Chart from "chart.js";

Chart.defaults.global.defaultFontFamily = "neue roman";

export function createBarDataset(data, label, colors, index, borderColor) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    type: "bar",
    label: [label],
    backgroundColor: colors[index],
    data: [data[index]],
    barPercentage: 0.4,
    borderColor: borderColor ? borderColor : "#000",
    borderWidth: borderColor ? 1 : 0,
  };
}

export function createDoughnutDataset(
  data,
  labels,
  backgroundColors,
  borderWidth = 0,
  borderColor
) {
  return {
    type: "doughnut",
    data,
    labels,
    backgroundColor: backgroundColors,
    borderWidth: borderWidth,
    borderColor: borderColor,
  };
}

export function createDoughnutOptions(valuePrefix, valueSuffix) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 75,
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return `${valuePrefix ? valuePrefix : ""}${
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
          }${valueSuffix ? valueSuffix : ""}`;
        },
      },
    },
  };
}

export function createBarScales(gridColor, labelsColor, stacked, max) {
  return {
    yAxes: [
      {
        stacked,
        gridLines: {
          drawTicks: false,
          borderDash: [5],
          color: gridColor,
        },
        ticks: {
          fontColor: labelsColor,
          beginAtZero: true,
          maxTicksLimit: 5,
          max,
        },
      },
    ],
    xAxes: [
      {
        stacked,
        gridLines: {
          drawTicks: false,
          borderDash: [10],
          color: gridColor,
        },
        ticks: {
          fontColor: labelsColor,
          beginAtZero: true,
          maxTicksLimit: 10,
        },
      },
    ],
  };
}

export function createUniqueBarDataset(data, label, color) {
  return {
    label: [label],
    backgroundColor: color,
    data: [data],
    barPercentage: 1.3,
  };
}

export function createUniqueBarScales(
  labelsColor,
  beginAtZero,
  suggestedMin,
  suggestedMax,
  horizontal
) {
  return {
    yAxes: [
      {
        ticks: {
          display: !horizontal ? false : true,
          fontColor: labelsColor,
          padding: 20,
          maxTicksLimit: 10,
          beginAtZero,
          suggestedMin,
          suggestedMax,
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          display: horizontal ? false : true,
          fontColor: labelsColor,
          padding: 20,
          maxTicksLimit: 10,
          beginAtZero,
          suggestedMin,
          suggestedMax,
        },
      },
    ],
  };
}

export function createLineScales(
  gridColor,
  labelsColor,
  labelText,
  stacked = false,
  yAxesLabel,
  xAxesLabel,
  yDisplayTicks = true,
  xDisplayTicks = true,
  yDisplayLine = true,
  xDisplayLine = true
) {
  return {
    xAxes: [
      {
        stacked,
        scaleLabel: {
          display: xAxesLabel ? true : false,
          labelString: xAxesLabel,
          fontColor: labelsColor,
          fontFamily: "neue medium",
        },
        gridLines: {
          display: xDisplayLine,
          drawOnChartArea: false,
          drawTicks: false,
          color: gridColor,
        },
        ticks: {
          display: xDisplayTicks,
          fontColor: labelsColor,
          fontFamily: "neue roman",
          precision: 0,
          padding: 20,
          beginAtZero: true,
        },
      },
    ],
    yAxes: [
      {
        stacked,
        fontFamily: "neue roman",
        scaleLabel: {
          display: yAxesLabel ? true : false,
          labelString: yAxesLabel,
          fontColor: labelsColor,
          fontFamily: "neue medium",
        },
        gridLines: {
          display: yDisplayLine,
          drawOnChartArea: false,
          drawTicks: false,
          color: gridColor,
        },
        ticks: {
          display: yDisplayTicks,
          fontColor: labelsColor,
          fontFamily: "neue roman",
          precision: 0,
          padding: 20,
          beginAtZero: true,
          maxTicksLimit: 5,
        },
      },
    ],
  };
}

export function createSimpleLineScales(
  gridColor,
  labelsColor,
  beginAtZero = true
) {
  return {
    xAxes: [
      {
        stacked: false,
        scaleLabel: {
          display: false,
          fontColor: labelsColor,
          fontFamily: "neue medium",
        },
        gridLines: {
          display: true,
          drawOnChartArea: false,
          drawTicks: false,
          color: gridColor,
        },
        ticks: {
          display: true,
          fontColor: labelsColor,
          fontFamily: "neue roman",
          precision: 0,
          padding: 20,
          beginAtZero: true,
        },
      },
    ],
    yAxes: [
      {
        stacked: false,
        fontFamily: "neue roman",
        scaleLabel: {
          display: false,
          fontColor: labelsColor,
          fontFamily: "neue medium",
        },
        gridLines: {
          display: true,
          drawOnChartArea: false,
          drawTicks: false,
          color: gridColor,
        },
        ticks: {
          display: true,
          fontColor: labelsColor,
          fontFamily: "neue roman",
          precision: 0,
          padding: 20,
          beginAtZero: beginAtZero,
          maxTicksLimit: 5,
        },
      },
    ],
  };
}

export function createCleanLine(color, data) {
  return {
    borderColor: color,
    borderWidth: 1,
    pointRadius: 0,
    data,
  };
}

export function createFixedDatalabels(
  backgroundColor,
  borderColor,
  fontColor,
  formatterCallback,
  triMonth = false
) {
  return {
    align: "end",
    anchor: "end",
    backgroundColor: function (context) {
      return backgroundColor;
    },
    borderColor: function (context) {
      return borderColor;
    },
    borderWidth: 1,
    borderRadius: 2,
    color: fontColor,
    font: {
      family: "neue roman",
      size: 12,
    },
    formatter: formatterCallback,
    padding: {
      top: 1,
      bottom: 1,
      left: 3,
      right: 3,
    },
    display: function (context) {
      if (triMonth) {
        var expando = context.chart.$_user_ || {};
        var elements = expando.hovered || [];
        var datasetIndex = context.datasetIndex;
        var dataIndex = context.dataIndex;

        for (var i = 0, ilen = elements.length; i < ilen; ++i) {
          var el = elements[i];
          if (el._datasetIndex === datasetIndex && el._index === dataIndex) {
            return true;
          }
        }

        return false;
      } else {
        return true;
      }
    },
  };
}

export function createLayoutWithDatalabels(gridColor, labelsColor) {
  return {
    padding: {
      top: 40,
      right: 20,
      bottom: 0,
      left: 16,
    },
  };
}
