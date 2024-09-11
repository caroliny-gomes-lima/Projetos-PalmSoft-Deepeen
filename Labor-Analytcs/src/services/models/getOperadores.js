import { Console } from "../../lib";

export default function getOperadores(response) {
  if (response.ok) {
    try {
      const data = [{ value: -1, label: "Todos" }];
      response.data.map((item) => {
        return data.push({
          value: item.id,
          label: `${item.registry} - ${item.name}`,
        });
      });
      return { ...response, data };
    } catch (e) {
      Console.errorParseResponse("/operator/get_all");
      return { ...response, ok: false };
    }
  } else {
    return response;
  }
}
