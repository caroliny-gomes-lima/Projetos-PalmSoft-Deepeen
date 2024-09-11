import { call, put } from "redux-saga/effects";
import { Creators } from ".";
import { api, ResponseError } from "../../../../services";

export default function* AddCashback({ UserId, cashBackValue, reloadTable }) {
  try {
    yield call(api.AddBalanceCashback, UserId, cashBackValue);

    yield put(Creators.CashBackListRequestFinish());
    //yield put(Creators.CashBackListRequest());
    reloadTable();
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.CashBackListRequestFailure());
    yield put(Creators.CashBackListRequest());
    reloadTable();
  }
}
