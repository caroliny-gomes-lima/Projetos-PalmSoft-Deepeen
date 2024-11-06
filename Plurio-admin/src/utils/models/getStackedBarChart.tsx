import { fonts } from "../../config";
import {
  createBarScalesX,
  createLayoutWithDatalabels,
} from "./CommonChartConfigs";

function gerarCoresParaItens(listaItens: any[]) {
  const listaCores = ["#10265A", "#ED3A50", "#7A12F5", "#5BCBF5", "#FE902A"];
  const arrayCores: string[] = [];

  for (let i = 0; i < listaItens.length; i++) {
    const cor = listaCores[i % listaCores.length];
    arrayCores.push(cor);
  }
  return arrayCores;
}

function CalculateAverage(datasets: any[]) {
  const totalPerDay = datasets[0].data.map((_, index) =>
    datasets.reduce((sum, dataset) => sum + dataset.data[index], 0)
  );
  const totalSoma = totalPerDay.reduce((acc, valor) => acc + valor, 0);
  return totalSoma / totalPerDay.length;
}

export default function getStackedBarChart(response: { labels: any[]; datasets: any[]; }) {
  // Calcular a média dos valores
  const averageLine = CalculateAverage(response.datasets);
  const coresBorda = gerarCoresParaItens(response.datasets.map((d) => d.label));
  const cores = coresBorda.map((item) => item);

  // Definir tipos para cada dataset de cada gráfico
  //Dataset gráfico barra
  type BarDataset = {
    label: string;
    type: "bar";
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    stack: string;
  };

  //Dataset gráfico linha
  type LineDataset = {
    label: string;
    data: number[];
    borderColor: string;
    borderWidth: number;
    borderDash: number[];
    type: "line";
    pointRadius: number;
    fill: boolean;
  };

  /*Adicionando o dataset definidio do gráfico barra, 
  mapeando e ajustando possição dos datasets no empilhamento nas barras*/
  const barDatasets: BarDataset[] = response.datasets
    .slice() //cópia do array para evitar a mudança do original
    .reverse() // para "Pendente" aparecer no top do empilhamento
    .map((dataset, index) => ({
      label: dataset.label,
      data: dataset.data,
      backgroundColor: cores[index],
      borderColor: coresBorda[index],
      barPercentage: 0.1, // Ajusta a largura das barras
      categoryPercentage: 0.1, // Ajusta o espaçamento entre as barras
      barThickness: 30, // Limita a largura máxima das barras
      borderWidth: 2,
      type: "bar",
      stack: "stack1",
    }));

  // Adicionando o dataset definidio do gráfico linha
  const averageDataset: LineDataset = {
    label: "Média do Período",
    data: Array(response.labels.length).fill(averageLine), // Garante que o valor seja repetido para todos os rótulos
    borderColor: "black",
    borderWidth: 2,
    borderDash: [0], // Estilo tracejado para a linha
    type: "line",
    pointRadius: 0,
    fill: false,
  };

  // Combina datasets do gráfico barra e linha
  const datasets = [averageDataset, ...barDatasets];

  const chartData = {
    type: "line",
    data: {
      labels: response.labels,
      datasets: datasets, // Inclui os datasets de barras e linha
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            stacked: true, // Empilhamento ativado no eixo Y
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
            stacked: true,
            ticks: {
              fontFamily: fonts.bold,
              fontSize: 10,
            },
            gridLines: {
              display: false,
            },
            offset: true,
          },
        ],
      },
      interaction: {
        mode: "index",
        intersect: true,
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
