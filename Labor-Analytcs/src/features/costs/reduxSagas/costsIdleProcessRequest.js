import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";

export default function* costsIdleProcessRequest() {
  try {
    const { data } = yield call(api.getCostsIdleProcessCharts);
    yield put(Creators.costsIdleProcessSuccess(data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.costsIdleProcessFailure());
  }
}
