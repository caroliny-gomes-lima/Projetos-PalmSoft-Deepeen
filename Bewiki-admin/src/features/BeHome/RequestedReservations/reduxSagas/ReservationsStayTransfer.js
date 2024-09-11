import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";
import { Alerts } from "../../../../lib";
import { Texts } from "../../../../config";

export default function* ReservationsStayTransfer({
  stayType,
  StaySubscriptionId,
  BehomeStayId,
  reloadTable,
}) {
  const textAlertSucess =
    Texts["pt-BR"].beHome.RequestedReservations.ModalTransferReserve;
  try {
    yield call(
      api.beHomeRequestedReservationsTransfer,
      stayType,
      StaySubscriptionId,
      BehomeStayId
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
