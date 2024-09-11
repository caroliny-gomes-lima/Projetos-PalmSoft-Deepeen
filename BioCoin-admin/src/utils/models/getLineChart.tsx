import { Chart } from "chart.js";
import {
  createBarScalesX,
  createLayoutWithDatalabels,
} from "./CommonChartConfigs";

function gerarCoresParaItens(listaItens: any[]) {
 
  const listaCores = [
    "#FFCC29",
    "#5D3EDF",
    "#70EA07",
    "#BB3A72",
    "#28AFAF",
    "#FF7729",
    "#6A5CA5",
    "#913C1C",
    "#18739B",
    "#683DAA",
    "#629232",
    "#771212",
    "#0E31A5",
  ];
  const arrayCores: string[] = [];

  for (let i = 0; i < listaItens.length; i++) {
    const cor = listaCores[i % listaCores.length];
    arrayCores.push(cor);
  }

  return arrayCores;
}

export default function getLineChart(response: {
  values: any[];
  labels: any[];
  colors?: { main: string; GlowColor: string};
}) {

  // let draw = Chart.controllers.line.prototype.draw;
  // Chart.controllers.line = Chart.controllers.line.extend({
  //     draw: function() {
  //         draw.apply(this, arguments);
  //         let ctx = this.chart.chart.ctx;
  //         let _stroke = ctx.stroke;
  //         ctx.stroke = function() {
  //             ctx.save();
  //             ctx.shadowColor = response?.colors?.GlowColor,
  //             ctx.shadowBlur = 20;
  //             ctx.shadowOffsetX = 4;
  //             ctx.shadowOffsetY = 4;
  //             _stroke.apply(this, arguments)
  //             ctx.restore();
  //         }
  //     }
  // });

  // const coresBorda = gerarCoresParaItens(response.values);
  // const cores = coresBorda.map((item) => {
  //   return item + "4F";
  // });
  const chartData = {
    type: "line",
    data: {
      labels: response.labels,
      datasets: [
        {
          label: "Teste2",
          type: "line",
          data: response.values,
          backgroundColor: "transparent",
          borderColor: response?.colors ? response?.colors.main : null,
          responsive: true,
          maintainAspectRatio: false,
          fill: true,
          //lineTension: 0,
          borderWidth: 3,
          pointRadius: 0,
        },
      ],
    },
    options: {
      devicePixelRatio: 4,
      interaction: {
        mode: "dataset",
      },
      responsive: true,
      maintainAspectRatio: true,
      labels: {
        display: false,
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: true,
        mode: "index",
        filter: function (value, context) {
          return Math.round(value);
        },
        labelColor: function (value, context) {
          return;
        },
      },
      layout: createLayoutWithDatalabels(),
      scales: createBarScalesX(
        "#46464628",
        "#464646",
        false,
        undefined,
        5,
        null
      ),
    },
  };

  return chartData;
}
