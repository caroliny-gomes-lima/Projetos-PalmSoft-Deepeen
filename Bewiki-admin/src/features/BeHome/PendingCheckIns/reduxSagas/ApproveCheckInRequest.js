import { call, put } from "redux-saga/effects";
import { Creators } from ".";
import { api, ResponseError } from "../../../../services";

export default function* ApproveCheckInRequest({ checkInId, reloadTable }) {
  try {
    yield call(api.approveBehomeCheckIn, checkInId);
    yield put(Creators.CheckInRequestSuccess());
    reloadTable();
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    reloadTable();
  }
}
