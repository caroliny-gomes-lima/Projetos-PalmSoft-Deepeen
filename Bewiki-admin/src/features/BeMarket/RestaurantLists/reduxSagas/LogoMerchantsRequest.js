import { call, put } from "redux-saga/effects";
import { Creators } from ".";
import { api, ResponseError } from "../../../../services";

export default function* LogoMerchantsRequest({ imageId }) {
  try {
    const response = yield call(api.getImage, imageId);
    yield put(Creators.LogoMerchantsRequestSuccess(response));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.MerchantsListRequestFailure());
  }
}
