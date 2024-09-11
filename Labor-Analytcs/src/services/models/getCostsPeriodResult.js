import Parse from "../helpers/Parse";

function parseFunction(item) {
  return {
    kgFtePerDay: item.kgFtePerDay,
    envisagedKgFtePerDay: item.envisagedKgFtePerDay,
    kgPrice: item.kgPrice,
    envisagedKgPrice: item.envisagedKgPrice,
  };
}

export default function getCostsPeriodResult(response) {
  const parse = new Parse(response.data, response.endpoint, parseFunction);
  return { ...response, data: parse.parse() };
}
