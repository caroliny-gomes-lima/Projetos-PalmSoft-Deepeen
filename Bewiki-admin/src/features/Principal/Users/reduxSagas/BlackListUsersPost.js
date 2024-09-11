import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";
import { Texts } from "../../../../config";
import { Alerts } from "../../../../lib";

export default function* BlackListUsersPost({ data }) {
  const textAlertSucess = Texts["pt-BR"].users.usersFilters.blackList;
  try {
    yield call(api.BlackListUsersPost, data);

    yield put(Creators.BlackListUsersRequest());
    yield put(Creators.BlackListUsersRequestFinish());
    Alerts.alertSuccess(textAlertSucess.PopupText);
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage(errorResponse.message);
    yield put(Creators.BlackListUsersRequestFailure());
  }
}
