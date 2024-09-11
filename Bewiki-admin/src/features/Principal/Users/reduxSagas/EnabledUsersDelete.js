import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Texts } from "../../../../config";
import { Alerts } from "../../../../lib";
import { Creators } from "./index";

export default function* EnabledUsersDelete({ userId }) {
  const textAlertSucess = Texts["pt-BR"].users.enabledUsers.deleteModal;
  try {
    yield call(api.EnabledUsersDelete, userId);

    yield put(Creators.EnabledUsersRequest());
    //yield put(Creators.EnabledUsersRequestFinish());

    Alerts.alertSuccess(textAlertSucess.PopupText);
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.EnabledUsersRequestFailure());
  }
}
