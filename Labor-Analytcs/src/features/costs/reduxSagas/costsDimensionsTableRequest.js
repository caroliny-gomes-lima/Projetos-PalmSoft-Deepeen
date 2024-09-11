import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";

export default function* costsDimensionsTableRequest() {
  try {
    const { data } = yield call(api.getCostsDimensionsTable);
    yield put(Creators.costsDimensionsTableSuccess(data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.costsDimensionsTableFailure());
  }
}
