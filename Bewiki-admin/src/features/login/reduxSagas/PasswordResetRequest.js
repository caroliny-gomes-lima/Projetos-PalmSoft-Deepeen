import { call, put } from "redux-saga/effects";
import { api, ResponseError } from "../../../services";
import { Creators } from "./index";

export default function* PasswordResetRequest({ email, goNext }) {
  try {
    yield call(api.passwordReset, email);
    yield put(Creators.PasswordResetRequestFinished(email));
    goNext();
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.PasswordResetRequestFinished(email));
  }
}
