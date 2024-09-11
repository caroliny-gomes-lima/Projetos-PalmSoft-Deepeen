import { call, put } from "redux-saga/effects";
import { Creators } from ".";
import { api, ResponseError } from "../../../../services";

export default function* CouponRegisterCPFRequest({
  id,
  cpf,
  showSuccessModal,
}) {
  try {
    yield call(api.couponRegisterCPF, id, cpf);
    yield put(Creators.CouponRegisterCpfRequestFinished());
    showSuccessModal();
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.CouponRegisterCpfRequestFinished());
  }
}
