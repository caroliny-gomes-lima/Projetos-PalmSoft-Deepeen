import { createLayoutWithDatalabels } from "./CommonChartConfigs";

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

export default function getDoughnutChart(response: {
  values: any[];
  labels: any[];
}) {
  const labels = [
    "Teste 1",
    "Teste 2",
    "Teste 3",
    "Teste 4",
    "Teste 5",
    "Teste 6",
    "Teste 7",
  ];
  const coresBorda = gerarCoresParaItens(response.values);
  const cores = coresBorda.map((item) => {
    return item + "4F";
  });
  const chartData = {
    type: "doughnut",
    data: {
      labels: response.labels,
      datasets: [
        {
          label: "Teste2",
          data: response.values,
          backgroundColor: cores,
          borderColor: coresBorda,

          responsive: true,
          maintainAspectRatio: false,
          maxBarThickness: 27,

          borderWidth: 2,
          fill: true,
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

      layout: createLayoutWithDatalabels(),
    },
  };

  return chartData;
}
