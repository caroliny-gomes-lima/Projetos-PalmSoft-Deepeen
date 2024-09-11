import { put, call } from "redux-saga/effects";
import { Creators } from ".";
import { ResponseError } from "../../services";

import { api } from "../../services";

export default function* getUserInfos() {
  try {
    const { data } = yield call(api.getUserInfos);
    yield put(Creators.getUserInfosSuccess(data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.getUserInfosFailure());
  }
}
