import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";

export default function* costsDimensionsChartRequest() {
  try {
    const { data } = yield call(api.getCostsDimensionsChart);
    yield put(Creators.costsDimensionsChartSuccess(data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.costsDimensionsChartFailure());
  }
}
