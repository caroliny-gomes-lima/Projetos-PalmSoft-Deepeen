import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* CashbackTransactionsRequest({userId}) {
  try {
    const response = yield call(api.getCashbackTransaction, userId);
    yield put(Creators.CashbackTransactionsRequestSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.CashbackTransactionsRequestFailure());
  }
}
