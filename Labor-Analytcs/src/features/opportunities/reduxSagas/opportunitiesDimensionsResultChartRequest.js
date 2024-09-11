import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";

export default function* opportunitiesDimensionsResultChartRequest() {
  try {
    const { data } = yield call(api.getOpportunitiesDimensionsResultChart);
    yield put(Creators.opportunitiesDimensionsResultChartSuccess(data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.opportunitiesDimensionsResultChartFailure());
  }
}
