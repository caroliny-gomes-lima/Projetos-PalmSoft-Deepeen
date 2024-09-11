import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";
import { Alerts } from "../../../../lib";

export default function* ExtraHoursRequestDelete({ data, idOp }) {
  try {
    //chama a api para deletar o id selecionado na tabela de horas extras (na opção de apagar da tabela)
    yield call(api.deleteExtraHours, data.id);

    //chama a api para pegar os dados (id) de horas extras do operador
    yield put(Creators.GetExtraHours(idOp));
    Alerts.alertSuccess(["Hora extra deletada com sucesso"]);
    yield put(Creators.ExtraHoursFinish());
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.ExtraHoursFinish());
  }
}
