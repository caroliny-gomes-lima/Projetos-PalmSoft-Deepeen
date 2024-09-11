import { call, put } from "redux-saga/effects";
import { Creators } from ".";
import { api, ResponseError } from "../../../../services";

export default function* AvailableStaysRequest({ categoryId }) {
  try {
    const response = yield call(
      api.getBehomeCheckInTransferAvailableRooms,
      categoryId
    );
    yield put(Creators.AvailableStaysRequestSuccess(response));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.AvailableStaysRequestFailure());
  }
}
