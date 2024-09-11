import { Filters } from "../../lib";
import Parse from "../helpers/Parse";
function parseFunction(item) {
  return {
    overallPercentage: Filters.taxMask(item.overallPercentage),
    separation: Filters.convertMoneyTextMask(item.separation),
    checkout: Filters.convertMoneyTextMask(item.checkout),
    load: Filters.convertMoneyTextMask(item.load),
    movement: Filters.convertMoneyTextMask(item.movement),
    total: Filters.convertMoneyTextMask(item.total),
  };
}
export default function getOpportunitiesCapacitySummary(response) {
  const parse = new Parse(response.data, response.endpoint, parseFunction);
  return { ...response, data: parse.parse() };
}
