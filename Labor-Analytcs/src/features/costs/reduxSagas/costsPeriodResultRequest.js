import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";

export default function* costsPeriodResultRequest() {
  try {
    const { data } = yield call(api.getCostsPeriodResult);
    yield put(Creators.costsPeriodResultSuccess(data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.costsPeriodResultFailure());
  }
}
