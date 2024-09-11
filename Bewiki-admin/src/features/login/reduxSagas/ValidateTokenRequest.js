import { call, put } from "redux-saga/effects";
import { api, ResponseError } from "../../../services";
import { Creators } from "./index";

export default function* ValidateTokenRequest({ email, token, goNext }) {
  try {
    yield call(api.validateToken, email, token);
    yield put(Creators.ValidateTokenRequestSuccess(token));
    goNext();
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.ValidateTokenRequestFailed());
  }
}
