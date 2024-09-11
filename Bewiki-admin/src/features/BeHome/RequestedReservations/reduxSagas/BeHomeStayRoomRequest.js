import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";
export default function* BeHomeStayRoomRequest({ categoryId }) {
  try {
    const response = yield call(api.getBehomeStayIdRoom, categoryId);
    yield put(Creators.BeHomeStayRoomSuccess(response));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.ReservationsFailure());
  }
}
