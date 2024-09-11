import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";
import { Alerts } from "../../../lib";
import { Texts } from "../../../config";

export default function* changePasswordRequest({ data }) {
  try {
    yield call(api.changePassword, {
      password: data.password,
      oldPassword: data.oldPassword,
    });
    Alerts.alertSuccess(Texts["pt-BR"].settings.changePassword.successResponse);
    yield put(Creators.changePasswordSuccess());
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.changePasswordFailure());
  }
}
