import { call, put } from "redux-saga/effects";
import { Creators } from ".";
import { api, ResponseError } from "../../../../services";

export default function* DeleteCashback({
  UserId,
  cashBackValue,
  reloadTable,
}) {
  try {
    yield call(api.DeleteBalanceCashback, UserId, cashBackValue);

    //yield put(Creators.CashBackListRequest());
    yield put(Creators.CashBackListRequestFinish());
    reloadTable();
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.CashBackListRequestFailure());
    reloadTable();
  }
}
