import { call, put } from "redux-saga/effects";
import { api, ResponseError } from "../../../services";
import { Creators } from "./index";

export default function* ConfirmPasswordResetRequest({
  email,
  password,
  token,
  finish,
}) {
  try {
    yield call(api.newPasswordConfirm, email, password, token);
    yield put(Creators.ConfirmPasswordResetRequestSuccess());
    finish();
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.ConfirmPasswordResetRequestFailed());
  }
}
