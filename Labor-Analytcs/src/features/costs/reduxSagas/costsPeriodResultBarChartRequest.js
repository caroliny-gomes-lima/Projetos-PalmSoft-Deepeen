import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";

export default function* costsPeriodResultBarChartRequest() {
  try {
    const { data } = yield call(api.getCostsPeriodResultBarChart);
    yield put(Creators.costsPeriodResultBarChartSuccess(data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.costsPeriodResultBarChartFailure());
  }
}
