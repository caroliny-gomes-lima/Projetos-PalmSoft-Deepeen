import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";

export default function* opportunitiesSummaryRequest() {
  try {
    const { data } = yield call(api.getOpportunitiesSummary);
    yield put(Creators.opportunitiesSummarySuccess(data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.opportunitiesSummaryFailure());
  }
}
