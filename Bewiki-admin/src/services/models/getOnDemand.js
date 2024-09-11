import { Console } from "../../lib";

export default function getBeHomeOnDemand(response) {
  if (response.ok) {
    try {
      return { ...response, data: response.data };
    } catch (e) {
      Console.errorParseResponse("/s");
      return { ...response, ok: false };
    }
  } else {
    return response;
  }
}
