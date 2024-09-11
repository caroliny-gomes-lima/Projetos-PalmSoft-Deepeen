import { Filters } from "../../lib";
import Parse from "../helpers/Parse";

function parseFunction(item) {
  return {
    value: Filters.convertMoneyTextMask(item.value),
    label: item.label,
  };
}
export default function getCostsDimensionsTable(response) {
  const parse = new Parse(response.data, response.endpoint, parseFunction);
  return { ...response, data: parse.parseArray() };
}
