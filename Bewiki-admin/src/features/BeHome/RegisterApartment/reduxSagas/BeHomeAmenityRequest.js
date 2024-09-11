import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* BeHomeAmenityRequest() {
  try {
    const response = yield call(api.getBeHomeAmenity);
    yield put(Creators.BeHomeAmenityRequestSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.BeHomeAmenityRequestFailure());
  }
}
