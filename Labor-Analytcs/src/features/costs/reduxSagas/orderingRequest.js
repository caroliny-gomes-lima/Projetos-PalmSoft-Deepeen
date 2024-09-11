import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";

export default function* orderingRequest() {
  try {
    const data = yield call(api.getCostsProductivityOrdering);
    yield put(Creators.orderingSuccess(data.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.orderingFailure());
  }
}
