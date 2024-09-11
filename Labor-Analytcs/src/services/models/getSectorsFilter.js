import { Console } from "../../lib";

export default function getSectorsFilter(response) {
  try {
    const data = [
      { value: 0, label: "Todos" },
      { value: "checkout", label: "Checkout" },
      { value: "separador", label: "Separação" },
    ];
    return { data };
  } catch (e) {
    Console.errorParseResponse("/work_shift/get");
    return { ...response, ok: false };
  }
}
