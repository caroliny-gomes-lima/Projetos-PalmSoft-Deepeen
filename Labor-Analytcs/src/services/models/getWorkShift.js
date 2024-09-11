import { Console } from "../../lib";

export default function getWorkShiftFilter(response) {
  if (response.ok) {
    try {
      const data = [];
      response.data.map((item) => {
        return data.push({
          value: item.id,
          label: item.shift,
        });
      });
      return { data };
    } catch (e) {
      Console.errorParseResponse("/work_shift/get");
      return { ...response, ok: false };
    }
  } else {
    return response;
  }
}
