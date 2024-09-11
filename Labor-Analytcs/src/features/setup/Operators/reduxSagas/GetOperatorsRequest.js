import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* GetOperatorsRequest({ idOp, sector, shift, status }) {
  try {
    const response = yield call(api.getOperators, idOp, sector, shift, status);

    yield put(Creators.GetOperatorsSucess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.OperatorsFinish());
  }
}
