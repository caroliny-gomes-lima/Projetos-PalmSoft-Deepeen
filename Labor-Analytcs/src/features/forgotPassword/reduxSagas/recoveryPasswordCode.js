import { call, put, select } from "redux-saga/effects";
import { Creators } from ".";
import { ResponseError, api } from "../../../services";

export default function* recoveryPasswordCode({ code }) {
  try {
    const email = yield select((state) => state.recoveryPassword.email);
    const response = yield call(api.recoveryPasswordCode, {
      email,
      code,
    });
    yield put(Creators.recoveryPasswordCodeSuccess({ token: response.token }));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.recoveryPasswordCodeFailure());
  }
}
