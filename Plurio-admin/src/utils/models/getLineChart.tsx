import {
  createBarScalesX,
  createLayoutWithDatalabels,
} from "./CommonChartConfigs";

function gerarCoresParaItens(listaItens: any[]) {
  const listaCores = [
    "#FFCC29",
    "#5D3EDF",
    "#33AE3C",
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
  colors?: { main: string; background: string };
}) {
  const coresBorda = gerarCoresParaItens(response.values);
  const cores = coresBorda.map((item) => {
    return item + "4F";
  });
  const chartData = {
    type: "line",
    data: {
      labels: response.labels,
      datasets: [
        {
          label: "Teste2",
          type: "line",
          data: response.values,
          backgroundColor: response?.colors
            ? response?.colors.background
            : cores[0],
          borderColor: response?.colors ? response?.colors.main : coresBorda[0],
          responsive: true,
          maintainAspectRatio: false,
          fill: true,
          lineTension: 0,
          borderWidth: 2,
          pointRadius: 3,
          pointBorderWidth: 1,
          pointBackgroundColor: response?.colors
            ? response?.colors.background
            : cores[0],
          pointBorderColor: response?.colors
            ? response?.colors.main
            : coresBorda[0],
        },
      ],
    },
    options: {
      interaction: {
        mode: "dataset",
      },
      responsive: true,
      maintainAspectRatio: false,
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
        8,
        null
      ),
    },
  };

  return chartData;
}
