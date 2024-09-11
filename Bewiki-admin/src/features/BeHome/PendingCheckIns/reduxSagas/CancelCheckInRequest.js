import { call, put } from "redux-saga/effects";
import { Creators } from ".";
import { api, ResponseError } from "../../../../services";

export default function* CancelCheckInRequest({
  checkInId,
  setCheckInCancelled,
  reloadTable,
}) {
  try {
    yield call(api.cancelBehomeCheckIn, checkInId);
    setCheckInCancelled(true);
    yield put(Creators.CheckInRequestSuccess());
    reloadTable();
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    reloadTable();
  }
}
