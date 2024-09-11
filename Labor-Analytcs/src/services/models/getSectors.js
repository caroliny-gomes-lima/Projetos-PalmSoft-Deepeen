import { Console } from "../../lib";

export default function getSectors(response) {
  try {
    const data = [
      { value: "checkout", label: "Checkout" },
      { value: "separador", label: "Separação" },
    ];
    return { data };
  } catch (e) {
    Console.errorParseResponse("/work_shift/get");
    return { ...response, ok: false };
  }
}
