import Parse from "services/helpers/Parse";
import { SessionStorage } from "lib";

function parseFunction(item) {
  let status = 0;
  const oldList = SessionStorage.getItem("process");
  oldList.forEach((i) => (i.id === item.id ? (status = 0) : (status = 1)));

  const filtros = item.filter.split(" ");
  let inicialDate = new Date(filtros[3]);
  let finalDate = new Date(filtros[4]);
  let visao;
  const startDate = new Date(filtros[3]);
  const endDate = new Date(filtros[4]);

  startDate.setDate(startDate.getDate() + 1);
  endDate.setDate(endDate.getDate() + 1);
  inicialDate = inicialDate.toLocaleDateString("pt-BR");
  finalDate = finalDate.toLocaleDateString("pt-BR");
  if (
    startDate.getMonth() === endDate.getMonth() &&
    startDate.getFullYear() === endDate.getFullYear()
  ) {
    visao = "Mensal";
  } else if (
    startDate.getMonth() + 2 === endDate.getMonth() &&
    startDate.getFullYear() === endDate.getFullYear()
  ) {
    visao = "Trimestral";
  } else if (
    startDate.getMonth() + 5 === endDate.getMonth() &&
    startDate.getFullYear() === endDate.getFullYear()
  ) {
    visao = "Semestral";
  } else if (startDate.getFullYear() === endDate.getFullYear()) {
    visao = "Anual";
  }

  let activityProcess =
    filtros[1] === "CHECKOUT"
      ? "Checkout"
      : filtros[1] === "SEPARATION"
      ? "Separação"
      : filtros[1] === "ALL"
      ? "Todos"
      : null;

  let dedicatedTeam =
    filtros[0] === "true" ? "Sim" : filtros[0] === "false" ? "falso" : null;

  let productivity =
    filtros[6] === "media"
      ? "Média"
      : filtros[6] === "efetivo"
      ? "Efetiva"
      : null;

  return {
    id: item.id,
    filter: item.filter,
    resultProcess: item.resultProcess,
    statu: item.status,
    process: item.process,

    dedicatedTeam: dedicatedTeam,
    activityProcess: activityProcess,
    idOp: filtros[2],
    inicialDate: inicialDate,
    finalDate: finalDate,
    vision: visao,
    productivity: productivity,
    status: status,
  };
}
export default function getFiltersStatusInProcess(response) {
  const parse = new Parse(response.data, "getFiltersinProcess", parseFunction);
  return parse.parseArray();
}
