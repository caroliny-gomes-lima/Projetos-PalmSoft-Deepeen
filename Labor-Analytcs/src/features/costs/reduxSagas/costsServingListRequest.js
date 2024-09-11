import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";

export default function* costsServingListRequest() {
  try {
    const { data } = yield call(api.getCostsServingList);
    yield put(Creators.costsServingListSuccess(data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.costsServingListFailure());
  }
}
