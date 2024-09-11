import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";

export default function* costsProcessChartRequest() {
  try {
    const { data } = yield call(api.getCostsProcessChart);
    yield put(Creators.costsProcessChartSuccess(data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.costsProcessChartFailure());
  }
}
