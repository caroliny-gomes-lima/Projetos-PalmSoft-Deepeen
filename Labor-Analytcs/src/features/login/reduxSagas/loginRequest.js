import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";
import { Creators as globalCreators } from "../../globalReduxSagas";
import { SessionStorage } from "../../../lib";
import { navigateTo } from "../../../navigation/navigate";

export default function* loginRequest({ data }) {
  try {
    delete data.cd;
    yield call(api.getToken, data);
    yield put(Creators.loginSuccess());
    SessionStorage.setItem("isLoggedIn", true);
    yield put(globalCreators.getGlobalStatus());
    navigateTo.Home();
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.loginFailure());
  }
}
