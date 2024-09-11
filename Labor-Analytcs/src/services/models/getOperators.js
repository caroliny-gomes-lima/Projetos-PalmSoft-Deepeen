import { Console } from "../../lib";

export default function getOperators(response) {
  if (response.ok) {
    try {
      return { ...response, data: response.data };
    } catch (e) {
      //Colocar o path da API
      Console.errorParseResponse("/s");
      return { ...response, ok: false };
    }
  } else {
    return response;
  }
}
