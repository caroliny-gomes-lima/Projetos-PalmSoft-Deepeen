import { put, call } from "redux-saga/effects";
import { Creators } from ".";
import { ResponseError } from "../../services";

import { api } from "../../services";

export default function* getImage({ idList }) {
  try {
    let data = [];
    for (let index = 0; index < idList?.length; index++) {
      const response = yield call(api.getImage, idList[index].imageId);
      if (response.ok) {
        data.push({ id: idList[index].imageId, image: response?.data });
      }
    }

    yield put(Creators.getImageSuccess(data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.getImageFailure());
  }
}
