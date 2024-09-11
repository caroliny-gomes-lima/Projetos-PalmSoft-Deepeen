import { put } from "redux-saga/effects";
import { ResponseError } from "../../services";
import { Creators } from "./index";

export default function* GetAddressRequest({ data }) {
  try {
    const cep = data;
    const response = yield fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Could not find CEP");
      })
      .then((data) => {
        return data;
      })
      .catch((err) => console.log("error", err));

    yield put(Creators.GetAddressRequestSuccess(response));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.GetAddressRequestFailure());
  }
}
