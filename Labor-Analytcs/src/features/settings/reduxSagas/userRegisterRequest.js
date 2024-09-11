import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";
import { Alerts } from "../../../lib";
import { Texts } from "../../../config";

export default function* changePasswordRequest({ data }) {
  try {
    yield call(api.createAccess, data);
    Alerts.alertSuccess(
      Texts["pt-BR"].settings.userSettings.userRegister.successResponse
    );
    yield put(Creators.userRegisterSuccess());
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.userRegisterFailure());
  }
}
