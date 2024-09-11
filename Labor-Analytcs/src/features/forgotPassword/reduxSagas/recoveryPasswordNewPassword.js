import { call, put, select } from "redux-saga/effects";
import { Creators } from ".";
import { Texts } from "../../../config";
import { Alerts, SessionStorage } from "../../../lib";
import { navigateTo } from "../../../navigation/navigate";
import { ResponseError, api } from "../../../services";

export default function* recoveryPasswordCode({ password, code }) {
  try {
    const { email, token } = yield select((state) => state.recoveryPassword);
    yield call(
      api.sendRecoveryPasswordNewPassword,
      {
        password,
        email,
        code,
      },
      token
    );
    yield put(Creators.recoveryPasswordNewPasswordFinished());
    Alerts.alertSuccess(Texts["pt-BR"].forgotPass.successResponse);
    navigateTo.Landing();
    yield put(Creators.recoveryPasswordClearData());
    SessionStorage.removeItem("token");
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.recoveryPasswordNewPasswordFailure());
  }
}
