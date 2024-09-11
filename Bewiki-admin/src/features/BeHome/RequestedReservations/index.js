import Container from "./containers/Reservations";
import { reducers, sagas } from "./reduxSagas";

const RequestedReservations = {
  Container,
};

export { reducers, sagas, RequestedReservations };
