import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";
import { Alerts } from "../../../../lib";
import { Texts } from "../../../../config";
export default function* RequestedReservationsAccept({
  stayType,
  StaySubscriptionId,
  reloadTable,
}) {
  const textAlertSucess =
    Texts["pt-BR"].beHome.RequestedReservations.ModalApprove;
  try {
    yield call(
      api.beHomeRequestedReservationsAccept,
      stayType,
      StaySubscriptionId
    );

    Alerts.alertSuccess(textAlertSucess.PopupText);
    yield put(Creators.ReservationsSuccess());
    reloadTable();
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.ReservationsFailure());
    reloadTable();
  }
}
