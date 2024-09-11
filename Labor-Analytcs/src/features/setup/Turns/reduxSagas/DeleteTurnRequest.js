import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* DeleteTurnsRequest({ data }) {
  try {
    yield call(api.deleteTurns, data);
    yield put(Creators.GetTurns());
    yield put(Creators.TurnsFinish());
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.TurnsFinish());
  }
}
