import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* HistoricReleaseRequest() {
  try {
    const response = yield call(api.getHistoricRelease);
    yield put(Creators.HistoricReleaseRequestSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.HistoricReleaseRequestFailure());
  }
}
