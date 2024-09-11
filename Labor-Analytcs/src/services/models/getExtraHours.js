import { Console } from "../../lib";
export default function getExtraHours(response) {
  if (response.ok) {
    try {
      const data = response.data;
      return { ...response, data };
    } catch (e) {
      Console.errorParseResponse("/extra_hours/get");
      return { ...response, ok: false };
    }
  } else {
    return response;
  }
}
