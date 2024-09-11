import { call, put } from "redux-saga/effects";
import { Alerts } from "../../../../lib";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* PostReservation({ data }) {
  function fixDateChecks(data) {
    let dArr = data.split("/");
    return dArr[2] + "-" + dArr[1] + "-" + dArr[0];
  }

  try {
    const dataRequest = {
      categoryId: data.categoryId,
      stayType: data.stayType ? "S" : "S",
      checkIn: fixDateChecks(new Date(data.checkIn).toLocaleDateString()),
      checkOut: fixDateChecks(new Date(data.checkOut).toLocaleDateString()),
      numPeople: data.numPeople,
      price: data.price,
      lastName: data.name.split(" ").slice(-1).join(" "),
      name: data.name.split(" ").slice(0, -1).join(" "),
      cpf: data.cpf,
      email: data.email,
      phone: data.phone,
      address: {
        number: data.number,
        street: data.street,
        district: data.district,
        city: data.city,
        state: data.state,
        postal_code: data.postal_code,
      },
      signInfo: {
        signImage: data?.signImage
          ? data?.signImage?.replace("data:image/png;base64,", "")
          : "null",
      },
    };

    yield call(api.PostReservation, dataRequest);
    yield put(Creators.PostReservationFinish());
    Alerts.alertSuccess(["Apartamento cadastrado com sucesso"]);
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage(errorResponse.message);
    yield put(Creators.PostReservationFailure());
  }
}
