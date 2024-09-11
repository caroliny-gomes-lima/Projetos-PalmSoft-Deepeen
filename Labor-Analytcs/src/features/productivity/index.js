import GlobalProductivity from "./containers/GlobalProductivity";
import HistoricProductivity from "./containers/HistoricProductivity";
import Process from "./containers/Process";
import OrderingProductivity from "./containers/OrderingProductivity";
import GeralDataProductivity from "./containers/GeralDataProductivity";
import { reducers, sagas } from "./reduxSagas";

const Graphs = {
  GlobalProductivity,
  HistoricProductivity,
  Process,
  OrderingProductivity,
  GeralDataProductivity,
};

export { reducers, sagas, Graphs };
