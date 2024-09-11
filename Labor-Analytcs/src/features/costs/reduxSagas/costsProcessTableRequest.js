import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";

export default function* costsProcessTableRequest() {
  try {
    const { data } = yield call(api.getCostsProcessTable);
    yield put(Creators.costsProcessTableSuccess(data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.costsProcessTableFailure());
  }
}
