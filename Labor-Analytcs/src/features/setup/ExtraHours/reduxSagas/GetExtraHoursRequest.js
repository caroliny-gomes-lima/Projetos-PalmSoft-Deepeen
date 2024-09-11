import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* GetExtraHoursRequest({ data, callback }) {
  try {
    //VERFICAÇÃO DO IDOP SE DER VALOR -1 QUANDO NOME DO OPERADOR FOR APAGADO
    let notOperator = -1;
    let isOperator = data;
    if (isOperator === notOperator) {
      //se isOperator for notOperator, então não tem dado
      //Se idOp -1 então coloca nulo
      yield put(api.getExtraHours, data);
      return;
    }
    //-----------------------------------------------------------------
    const response = yield call(api.getExtraHours, data);
    console.log(response.data);
    response.data["idOperator"] = data;

    if (callback) {
      callback(response.data);
      console.log(response);
    }
    yield put(Creators.GetExtraHoursSucess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.ExtraHoursFinish());
  }
}
