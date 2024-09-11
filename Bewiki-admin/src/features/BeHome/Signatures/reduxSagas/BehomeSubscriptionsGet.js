import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* BehomeSubscriptionsGet(
  page,
  pageSize,
  sort,
  staySubscriptionType,
  minCheckOutDate,
  maxCheckInDate
) {
  try {
    const response = yield call(
      api.getBeHomeSubscriptions,
      page,
      pageSize,
      sort,
      staySubscriptionType,
      minCheckOutDate,
      maxCheckInDate
    );

    yield put(Creators.BehomeSubscriptionsSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.BehomeSubscriptionsFailure());
  }
}
