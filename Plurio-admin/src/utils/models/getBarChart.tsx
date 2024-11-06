import { fonts } from "../../config";
import {
  createBarScalesX,
  createLayoutWithDatalabels,
} from "./CommonChartConfigs";

function gerarCoresParaItens(listaItens: any[]) {
  const listaCores = [
    "#FE902A",
    "#5BCBF5",
    "#7A12F5",
  ];
  const arrayCores: string[] = [];

  for (let i = 0; i < listaItens.length; i++) {
    const cor = listaCores[i % listaCores.length];
    arrayCores.push(cor);
  }

  return arrayCores;
}

function CalculateAverage(datasets: any[], labels: any[]) {
  const totalPerDay = labels.map((_, index) =>
    datasets.reduce((sum, dataset) => sum + dataset.data[index], 0)
  );
  const averagePerDay = totalPerDay.map((total) => total / datasets.length);
  return averagePerDay; // Garantindo que o número de pontos corresponda as labels
}

export default function getBarChart(response: { labels: any[]; datasets: any[]; }) {
  const averageLine = CalculateAverage(response.datasets, response.labels); // Passando os labels para a função
  const coresBorda = gerarCoresParaItens(response.datasets);
  const cores = coresBorda.map((item) => {
    return item;
  });

  const barDatasets = response.datasets.map((dataset, index) => ({
    type: "bar",
    label: dataset.label,
    data: dataset.data,
    backgroundColor: cores[index],
    borderColor: coresBorda[index],
    barPercentage: 0.8,
    categoryPercentage: 0.2,
    maxBarThickness: 30,
    borderWidth: 2,
  }));

  const averageDataset = {
    label: "Média do Período",
    data: averageLine,
    borderColor: "black",
    borderWidth: 2,
    borderDash: [0],
    type: "line",
    pointRadius: 0,
    fill: false,
    tension: 0,
    spanGaps: true,
  };

  const datasets = [averageDataset, ...barDatasets];
  const chartData = {
    type: "bar",
    data: {
      labels: response.labels,
      datasets: datasets,
    },
    options: {
      interaction: {
        mode: "index",
        intersect: true,
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              fontFamily: fonts.bold,
              fontSize: 10,
              beginAtZero: true,
            },
            gridLines: {
              display: true,
              borderDash: [5, 5],
            },
          },
        ],
        xAxes: [
          {
            stacked: false,
            ticks: {
              fontFamily: fonts.bold,
              fontSize: 10,
            },
            gridLines: {
              display: false,
            },
            //offset: false,
          },
        ],
      },
      legend: {
        align: "start",
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxWidth: 5,
          boxHeight: 5,
          fontFamily: fonts.bold,
          fontSize: 12,
          padding: 20,
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.dataset.label + ": " + tooltipItem.raw;
            },
          },
        },
      },
      layout: createLayoutWithDatalabels(),
    },
  };

  return chartData;
}



