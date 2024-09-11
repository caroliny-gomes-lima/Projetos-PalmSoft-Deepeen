import OrderingCosts from "./containers/OrderingCosts";
import IdleProcessCost from "./containers/IdleProcessCost";
import PeriodResultNumbers from "./containers/PeriodResultNumbers";
import PeriodResultGraph from "./containers/PeriodResultGraph";
import CostsByDriversAndProcess from "./containers/CostByDriversAndProcess";
import { reducers, sagas } from "./reduxSagas";

const Graphs = {
  OrderingCosts,
  IdleProcessCost,
  PeriodResultNumbers,
  PeriodResultGraph,
  CostsByDriversAndProcess,
};

export { reducers, sagas, Graphs };
