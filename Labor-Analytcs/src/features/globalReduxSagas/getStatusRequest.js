import { put, call } from "redux-saga/effects";
import { Creators } from ".";
import { ResponseError } from "../../services";

import { api } from "../../services";

export default function* getStatusRequest() {
  try {
    const dataF = yield call(api.getStatusFilter);
    const data = yield call(api.getStatus);
    yield put(Creators.getStatusSucess(dataF.data, data.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.getStatusFailure());
  }
}
