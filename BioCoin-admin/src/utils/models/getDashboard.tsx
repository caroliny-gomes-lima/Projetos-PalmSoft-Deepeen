function obterNomeMesAbreviado(dataString: string): string {
  const mesesAbreviados = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  const data = new Date(dataString);
  const mes = data.getMonth();

  if (mes >= 0 && mes < 12) {
    return mesesAbreviados[mes];
  } else {
    throw new Error("Data inválida");
  }
}

export default function getDashboard(response: any) {
  if (response.ok) {
    try {
      const graphs: any = { chartAccess: null, chartCoinSold: null };

      graphs.chartAccess =
        response.data.chartAccess.data.length > 0
          ? {
              labels: response.data.chartAccess.data.map((item) => {
                return obterNomeMesAbreviado(item.date);
              }),
              values: response.data.chartAccess.data.map((item) => {
                return item.value;
              }),
              colors: { main: "#70EA07", GlowColor: "#70EA07" },
            }
          : null;

      graphs.chartCoinSold =
        response.data.chartCoinSold.data.length > 0
          ? {
              labels: response.data.chartCoinSold.data.map((item) => {
                return obterNomeMesAbreviado(item.date);
              }),
              values: response.data.chartCoinSold.data.map((item) => {
                return item.value;
              }),
              colors: { main: "#01DFDE", GlowColor: "#01DFDE" },
            }
          : null;

      return { ...response, graphs };
    } catch (e) {
      return { ...response, ok: false };
    }
  } else {
    return response;
  }
}
