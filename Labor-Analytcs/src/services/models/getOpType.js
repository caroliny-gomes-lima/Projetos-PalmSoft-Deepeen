import { Console } from "../../lib";

export default function getOpType(response) {
  if (response.ok) {
    try {
      const data = [];
      response.data.map((item) => {
        return data.push({
          value: item.id,
          label: item.typeName,
        });
      });
      return { data };
    } catch (e) {
      Console.errorParseResponse("/status/get");
      return { ...response, ok: false };
    }
  } else {
    return response;
  }
}
