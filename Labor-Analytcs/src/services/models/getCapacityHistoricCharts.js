import models from ".";

export default function getCapacityHistoricCharts(response) {
  const checkout = models.getCapacityHistoricCheckoutChart(
    response.data.checkout
  );
  const load = models.getCapacityHistoricLoadChart(response.data.shipper);
  const separation = models.getCapacityHistoricSeparationChart(
    response.data.separator
  );

  return {
    ...response,
    data: {
      checkout: checkout.data,
      load: load.data,
      separation: separation.data,
    },
  };
}
