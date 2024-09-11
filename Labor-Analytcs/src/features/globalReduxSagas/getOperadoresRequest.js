import { put, call } from "redux-saga/effects";
import { Creators } from ".";
import { ResponseError } from "../../services";

import { api } from "../../services";

export default function* getOperadoresRequest() {
  try {
    const { data } = yield call(api.getOperadores);
    yield put(Creators.getOperadoresSuccess(data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.getOperadoresFailure());
  }
}
