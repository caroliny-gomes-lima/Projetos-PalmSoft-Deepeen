import { Filters } from "../../lib";
import Parse from "../helpers/Parse";
function parseFunction(item) {
  return {
    capacity: {
      overallPercentage: Filters.taxMask(item.capacity.overallPercentage),
      separation: Filters.convertMoneyTextMask(item.capacity.separation),
      checkout: Filters.convertMoneyTextMask(item.capacity.checkout),
      load: Filters.convertMoneyTextMask(item.capacity.load),
      movement: Filters.convertMoneyTextMask(item.capacity.movement),
      total: Filters.convertMoneyTextMask(item.capacity.total),
    },
    productivity: {
      overallPercentage: Filters.taxMask(item.productivity.overallPercentage),
      separation: Filters.convertMoneyTextMask(item.productivity.separation),
      checkout: Filters.convertMoneyTextMask(item.productivity.checkout),
      load: Filters.convertMoneyTextMask(item.productivity.load),
      movement: Filters.convertMoneyTextMask(item.productivity.movement),
      total: Filters.convertMoneyTextMask(item.productivity.total),
    },
  };
}
export default function getOpportunitiesCapacitySummary(response) {
  const parse = new Parse(response.data, response.endpoint, parseFunction);
  return { ...response, data: parse.parse() };
}
