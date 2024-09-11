import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";
import { Creators as globalCreators } from "../../globalReduxSagas";
import { Alerts, SessionStorage } from "../../../lib";
import jwtDecode from "jwt-decode";
import errorResponseMessage from "../../../services/helpers/getErrorMessage";

export default function* loginRequest({ data }) {
  try {
    delete data.cd;
    yield call(api.getToken, data);
    const token = jwtDecode(SessionStorage.getItem("token"));
    if (token.ROLES.includes("ROLE_ADMIN")) {
      yield put(Creators.loginSuccess());
      SessionStorage.setItem("isLoggedIn", true);
      yield put(globalCreators.getGlobalStatus());
    } else {
      Alerts.alertError(errorResponseMessage({ problem: "NOT_ADMIN" }));
      yield put(Creators.loginFailure());
    }
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.loginFailure());
  }
}
