import Chart from "chart.js";
import { FontStyles } from "../../components";
Chart.defaults.global.defaultFontFamily = "neue roman";

export function createBarScalesX(
  gridColor?: string,
  labelsColor?: string,
  stacked?: boolean,
  max?: number,
  maxTick: number = 7.5,
  type: string | null = "money"
) {
  return {
    defaultFontFamily: "Montserrat bold",
    yAxes: [
      {
        stacked: false,
        gridLines: {
          drawTicks: false,

          color: gridColor,
        },
        ticks: {
          fontFamily: FontStyles.medium12.fontFamily,
          fontSize: 12,
          fontColor: labelsColor,
          beginAtZero: true,
          maxTicksLimit: maxTick,
          padding: 20,
          max,
          callback: function (value, index, values) {
            if (type === "money") {
              return "R$ " + value.toFixed(2);
            } else if (type === "percent") {
              return value.toFixed(1) + "%";
            } else {
              return value;
            }
          },
        },
      },
    ],
    xAxes: [
      {
        stacked: false,
        gridLines: {
          drawTicks: false,

          color: "transparent",
        },
        ticks: {
          fontFamily: FontStyles.medium12.fontFamily,
          fontSize: 12,
          fontColor: labelsColor,
          beginAtZero: false,
          padding: 20,
          maxTicksLimit: 100000,
        },
      },
    ],
  };
}

export function createLayoutWithDatalabels() {
  return {
    mode: "dataset",
    padding: {
      top: 40,
      right: 20,
      bottom: 0,
      left: 16,
    },
  };
}
