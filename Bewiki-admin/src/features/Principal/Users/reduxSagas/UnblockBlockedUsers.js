import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";
import { Alerts } from "../../../../lib";
import { Texts } from "../../../../config";
export default function* UnblockBlockedUsers({ userId }) {
  const textAlertSucess = Texts["pt-BR"].users.blockedUsers.UndoModal;
  try {
    yield call(api.UnblockUsers, userId);

    yield put(Creators.EnabledUsersRequest());
    yield put(Creators.BlockedUsersRequest());
    yield put(Creators.BlockedUsersFinish());
    Alerts.alertSuccess(textAlertSucess.PopupText);
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.BlockedUsersFailure());
  }
}
