import { call, put } from "redux-saga/effects";
import { Creators } from ".";
import { api, ResponseError } from "../../../../services";

export default function* CategoryDataRequest({ stayType }) {
  try {
    const response = yield call(
      api.getBehomeCheckInTransferCategoriesInfo,
      stayType
    );
    yield put(Creators.CategoryDataRequestSuccess(response));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
  }
}
