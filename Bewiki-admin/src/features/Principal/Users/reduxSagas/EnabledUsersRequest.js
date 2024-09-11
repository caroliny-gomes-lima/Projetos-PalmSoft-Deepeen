import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* EnabledUsersRequest(page, sort, pageSize, blocked) {
  try {
    const response = yield call(
      api.getEnabledUsers,
      page,
      sort,
      pageSize,
      blocked
    );

    yield put(Creators.EnabledUsersRequestSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.EnabledUsersRequestFailure());
  }
}
