import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* MerchantsListRequest(page, pageSize, sort) {
  try {
    const response = yield call(api.getMerchants, page, pageSize, sort);

    yield put(Creators.MerchantsListRequestSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.MerchantsListRequestFailure());
  }
}
