import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Texts } from "../../../../config";
import { Alerts } from "../../../../lib";
import { Creators } from "./index";

export default function* EnabledUsersBlock({ userId }) {
  const textAlertSucess = Texts["pt-BR"].users.enabledUsers.blockedModal;
  try {
    yield call(api.EnabledUsersBlock, userId);

    yield put(Creators.EnabledUsersRequest());
    yield put(Creators.BlockedUsersRequest());
    //yield put(Creators.EnabledUsersRequestFinish());
    Alerts.alertSuccess(textAlertSucess.PopupText);
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.EnabledUsersRequestFailure());
  }
}
