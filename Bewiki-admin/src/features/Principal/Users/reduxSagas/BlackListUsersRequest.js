import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* BlackListUsersRequest(page, sort, pageSize) {
  try {
    const response = yield call(api.getBlackListUsers, page, sort, pageSize);

    yield put(Creators.BlackListUsersRequestSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.BlackListUsersRequestFailure());
  }
}
