import { call, put } from "redux-saga/effects";
import { Creators } from ".";
import { api, ResponseError } from "../../../../services";

export default function* CustomerDetailsDocumentPictureRequest({ imageIds }) {
  try {
    const imagesData = [];
    for (const id of imageIds) {
      const response = yield call(api.getImage, id);
      imagesData.push(response.data);
    }
    yield put(
      Creators.CustomerDetailsDocumentPictureRequestSuccess(imagesData)
    );
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.CustomerDetailsDocumentPictureRequestFailure());
  }
}
