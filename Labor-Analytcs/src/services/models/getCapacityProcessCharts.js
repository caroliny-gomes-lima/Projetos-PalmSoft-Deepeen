import models from ".";

function getProcessByName(data, code) {
  return data.filter(function (data) {
    return data.process === code;
  });
}

export default function getCapacityProcessCharts(response) {
  const checkout = models.getCapacityCheckoutProcessCharts(
    getProcessByName(response.data, "checkout")[0]
  );
  const load = models.getCapacityLoadProcessCharts(
    getProcessByName(response.data, "conferente")[0]
  );
  const separation = models.getCapacitySeparationProcessCharts(
    getProcessByName(response.data, "separador")[0]
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
