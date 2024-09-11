import { call, put } from "redux-saga/effects";
import { Creators } from "./index";
import { api, ResponseError } from "../../../../services";

export default function* CustomerDetailsRequest(checkInId) {
  try {
    const response = yield call(api.getBehomeGuestSheet, checkInId);
    yield put(Creators.CustomerDetailsRequestSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.CustomerDetailsRequestFailure());
  }
}
