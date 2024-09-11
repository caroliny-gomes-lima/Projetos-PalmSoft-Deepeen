import { call, put } from "redux-saga/effects";
import { Texts } from "../../../config";
import { Alerts } from "../../../lib";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";

export default function* updateUserRequest({ data }) {
  try {
    yield call(api.updateUserAccess, data);
    Alerts.alertSuccess(
      Texts["pt-BR"].settings.userSettings.UserList.successResponse(
        data.name,
        data.enabled
      )
    );
    const response = yield call(api.getListaAcessos);
    yield put(Creators.getUsersSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.getUsersFailure());
  }
}
