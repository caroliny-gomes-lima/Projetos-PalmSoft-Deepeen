import Process from "./containers/Process";
import OrderingIdle from "./containers/OrderingIdle";
import HistoricCapacity from "./containers/HistoricCapacity";
import GlobalCapacity from "./containers/GlobalCapacity";
import { reducers, sagas } from "./reduxSagas";

const Graphs = {
  Process,
  OrderingIdle,
  HistoricCapacity,
  GlobalCapacity,
};

export { reducers, sagas, Graphs };
