import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* BeHomeLocationRequest({ data }) {
  try {
    const response = yield call(api.getBeHomeLocation, data);
    yield put(Creators.BeHomeLocationRequestSuccess(response.data?.content));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.BeHomeLocationRequestFailure());
  }
}
