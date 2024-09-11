import { Console } from "../../lib";

export default function getPlannedEquationsSetup(response) {
  if (response.ok) {
    try {
      const data = response.data.reverse();
      return { ...response, data };
    } catch (e) {
      Console.errorParseResponse("/operator/get_all");
      return { ...response, ok: false };
    }
  } else {
    return response;
  }
}
