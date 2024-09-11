import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* PrevisionFlowRequest({page, pageSize, sort, name, stayType, status }) {
  try {
    const response = yield call(
      api.getBehomeStayPrevisionFlow,
      page,
      pageSize, 
      sort,
      name,
      stayType,
      status,
    );

    yield put(Creators.PrevisionFlowRequestSuccess(response.data, page));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.PrevisionFlowRequestFailure());
  }
}
