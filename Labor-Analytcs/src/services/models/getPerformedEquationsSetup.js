import { Console } from "../../lib";

export default function getPerformedEquationsSetup(response) {
  if (response.ok) {
    try {
      const data = response.data;
      return { ...response, data };
    } catch (e) {
      Console.errorParseResponse("/operator/get_all");
      return { ...response, ok: false };
    }
  } else {
    return response;
  }
}
