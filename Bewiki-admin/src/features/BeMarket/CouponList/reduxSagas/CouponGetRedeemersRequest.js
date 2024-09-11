import { call, put } from "redux-saga/effects";
import { Creators } from ".";
import { api, ResponseError } from "../../../../services";

export default function* CouponGetRedeemersRequest({ couponId }) {
  try {
    const response = yield call(api.couponGetRedeemers, couponId);
    yield put(Creators.CouponGetRedeemersRequestSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.CouponGetRedeemersRequestFailure());
  }
}
