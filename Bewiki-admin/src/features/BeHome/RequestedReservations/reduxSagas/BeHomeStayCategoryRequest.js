import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* BeHomeStayCategoryRequest({ stayType }) {
  try {
    const response = yield call(api.getBeHomeStayCategory, stayType);
    yield put(Creators.BeHomeStayCategoryRequestSuccess(response));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.ReservationsFailure());
  }
}
