import { call, put } from "redux-saga/effects";
import { api } from "../../../../services";
import { Creators } from "./index";

export default function* BeHomeTransactionGet({ StaySubscriptionId }) {
  try {
    const response = yield call(api.getBeHomeTransaction, StaySubscriptionId);

    yield put(Creators.BeHomeTransactionSuccess(response.data));
  } catch (response) {
    yield put(Creators.BeHomeTransactionFailure());
  }
}
