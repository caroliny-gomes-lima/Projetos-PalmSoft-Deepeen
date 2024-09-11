import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* InfoCancellationRequest(userId) {
  try {
    const response = yield call(api.getInfoCancellation, userId);
    yield put(Creators.InfoCancellationRequestSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.EnabledUsersRequestFailure());
  }
}
