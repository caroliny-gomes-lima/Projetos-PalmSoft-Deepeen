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

export default function getMultiLineChart(response: {
  values: { label: string; values: any[] }[];
  labels: any[];
  colors?: { main: string; background: string }[];
}) {
  const coresBorda = gerarCoresParaItens(response.values);
  const cores = coresBorda.map((item) => {
    return item + "4F";
  });
  const chartData = {
    type: "line",
    data: {
      labels: response.labels,
      datasets: response.values?.map((line, index) => {
        return {
          label: line?.label,
          type: "line",
          data: line.values,
          backgroundColor: response?.colors
            ? response?.colors[index].background
            : cores[index],
          borderColor: response?.colors
            ? response?.colors[index].main
            : coresBorda[index],
          responsive: true,
          maintainAspectRatio: false,
          fill: true,
          lineTension: 0,
          borderWidth: 1,
          pointRadius: 2,
          pointBorderWidth: 0.5,
          pointBackgroundColor: response?.colors
            ? response?.colors[index].background
            : cores[index],
          pointBorderColor: response?.colors
            ? response?.colors[index].main
            : coresBorda[index],
        };
      }),
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      labels: {
        display: false,
      },
      legend: {
        display: false,
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
