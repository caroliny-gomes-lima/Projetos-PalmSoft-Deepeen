import { call } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Alerts } from "../../../../lib";
import { Texts } from "../../../../config";

export default function* RequestedReservationsCancell({
  stayType,
  StaySubscriptionId,
  reloadTable,
  data,
}) {
  const textAlertSucess =
    Texts["pt-BR"].beHome.RequestedReservations.ModalcancelReserve;
  try {
    yield call(
      api.beHomeRequestedReservationsCancell,
      stayType,
      StaySubscriptionId,
      { cancelReason: data?.cancelReason }
    );

    Alerts.alertSuccess(textAlertSucess.PopupText);
    reloadTable();
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    reloadTable();
  }
}
