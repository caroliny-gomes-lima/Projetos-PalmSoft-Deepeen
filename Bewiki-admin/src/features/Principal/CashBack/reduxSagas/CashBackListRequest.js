import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* CashBackListRequest(page, sort, pageSize, sectorId) {
  try {
    const response = yield call(
      api.getCashBackList,
      page,
      sort,
      pageSize,
      sectorId
    );
    yield put(Creators.CashBackListRequestSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.CashBackListRequestFailure());
  }
}
