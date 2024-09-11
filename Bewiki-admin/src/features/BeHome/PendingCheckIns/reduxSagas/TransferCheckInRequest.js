import { call, put } from "redux-saga/effects";
import { Creators } from ".";
import { api, ResponseError } from "../../../../services";

export default function* TransferCheckInRequest({
  stayType,
  subscriptionId,
  stayId,
  reloadTable,
}) {
  try {
    yield call(api.transferBehomeCheckIn, stayType, subscriptionId, stayId);
    yield put(Creators.CheckInRequestSuccess());
    reloadTable();
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    reloadTable();
  }
}
