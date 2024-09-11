import { call, put } from "redux-saga/effects";
import { Creators } from ".";
import { ResponseError, api } from "../../../services";

export default function* recoveryPasswordRequest({ email }) {
  try {
    yield put(Creators.recoveryPasswordClearDataStart());
    yield call(api.sendRecoveryPasswordRequest, email);
    yield put(Creators.recoveryPasswordFinished(email, true));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.recoveryPasswordClearData());
  }
}
