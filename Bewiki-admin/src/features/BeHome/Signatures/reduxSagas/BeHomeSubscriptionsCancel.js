import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* BeHomeSubscriptionsCancel({
  StaySubscriptionId,
  cancelReason,
  reloadTable,
  showCancelSuccessModal,
}) {
  try {
    yield call(api.cancelBeHomeSubscriptions, StaySubscriptionId, cancelReason);

    yield put(Creators.BehomeSubscriptionsSuccess());
    reloadTable();
    showCancelSuccessModal();
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();

    yield put(Creators.BehomeSubscriptionsFailure());
    reloadTable();
  }
}
