import { put, call } from "redux-saga/effects";
import { Creators } from ".";
import { ResponseError } from "../../services";

import { api } from "../../services";

export default function* getOpTypeRequest() {
  try {
    const dataF = yield call(api.getOpTypeFilter);
    const data = yield call(api.getOpType);
    yield put(Creators.getOpTypeSucess(dataF.data, data.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.getOpTypeFailure());
  }
}
