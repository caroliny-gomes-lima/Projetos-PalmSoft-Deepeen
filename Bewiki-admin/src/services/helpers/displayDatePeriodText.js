import { Texts } from "../../config";
import { Filters } from "../../lib";

export default function displayDatePeriodText(start, end) {
  const { until } = Texts["pt-BR"];

  return `${Filters.fixDateToLabel(start)} ${until} ${Filters.fixDateToLabel(
    end
  )}`;
}
