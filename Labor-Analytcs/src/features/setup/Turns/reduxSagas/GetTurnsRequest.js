import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* GetTurnsRequest({ data }) {
  try {
    const response = yield call(api.getTurns, data);
    yield put(Creators.GetTurnsSucess(response));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.TurnsFinish());
  }
}
