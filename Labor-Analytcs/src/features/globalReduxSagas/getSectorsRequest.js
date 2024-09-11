import { put, call } from "redux-saga/effects";
import { Creators } from ".";
import { ResponseError } from "../../services";

import { api } from "../../services";

export default function* getSectorsRequest() {
  try {
    const dataF = yield call(api.getSectorsFilter);
    const data = yield call(api.getSectors);
    yield put(Creators.getSectorsSucess(dataF.data, data.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.getSectorsFailure());
  }
}
