import { Filters } from "../../lib";
import Parse from "../helpers/Parse";
function parseFunction(item) {
  return {
    name: item.name,
    registrationId: item.registrationId,
    rolCosts: Filters.taxMask(item.rolCosts),
    rol: item.rol,
    valueDeviation: Filters.taxMask(item.valueDeviation),
    valuePercentage: Filters.taxMask(item.valuePercentage),
  };
}
export default function getOpportunitiesDimensionsResultTable(response) {
  const parse = new Parse(response.data, response.endpoint, parseFunction);
  return { ...response, data: parse.parseArray() };
}
