import { Console, Filters } from "../../lib";
export default function getListaAcessos(response) {
  if (response.ok) {
    try {
      const data = response.data.map((item) => {
        var separatorGlobal =
          item.separatorSecondsSpent !== 0
            ? (item.separatorSecondsPlanned / item.separatorSecondsSpent) * 100
            : 0;
        var checkoutGlobal =
          item.checkoutSecondsSpent !== 0
            ? (item.checkoutSecondsPlanned / item.checkoutSecondsSpent) * 100
            : 0;
        return {
          ...item,
          shippingDate: Filters.fixDateToLabel(item.shippingDate),
          id: item.norderTransport,
          checkoutOp: item.operatorCheckout.name,
          checkoutOpRegtr: item.operatorCheckout.registry,
          checkoutGlobal: checkoutGlobal.toLocaleString("pt-br", {
            maximumFractionDigits: 1,
          }),
          checkoutSecondsPlanned: item.checkoutSecondsPlanned,
          checkoutSecondsSpent: item.checkoutSecondsSpent,
          checkoutValidOt: item.checkoutValidOt ? "Sim" : "Não",
          separatorOp: item.operatorSeparator.name,
          separatorOpRegtr: item.operatorSeparator.registry,
          separatorGlobal: separatorGlobal.toLocaleString("pt-br", {
            maximumFractionDigits: 1,
          }),
          separatorSecondsPlanned: item.separatorSecondsPlanned,
          separatorSecondsSpent: item.separatorSecondsSpent,
          separationValidOt: item.separationValidOt ? "Sim" : "Não",
          separationOtSector: item.opSeparation ? "Sim" : "Não",
          checkoutOtSector: item.opCheckout ? "Sim" : "Não",
        };
      });
      return { ...response, data };
    } catch (e) {
      Console.errorParseResponse("/shipping_order/all_ots");
      return { ...response, ok: false };
    }
  } else {
    return response;
  }
}
