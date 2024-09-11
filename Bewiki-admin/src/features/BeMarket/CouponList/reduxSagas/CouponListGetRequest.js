import { call, put } from "redux-saga/effects";
import { Creators } from "./index";
import { api, ResponseError } from "../../../../services";

export default function* CouponListGetRequest({ page, size }) {
  try {
    const response = yield call(api.getCoupons, page, size);
    yield put(Creators.CouponListGetRequestSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.CouponListGetRequestFailure());
  }
}
