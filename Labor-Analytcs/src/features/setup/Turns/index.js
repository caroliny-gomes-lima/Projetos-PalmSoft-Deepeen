import Container from "./containers/container";
import TurnsTable from "./containers/TurnsTable";
import { reducers, sagas } from "./reduxSagas";

const TurnsList = {
  Container,
  TurnsTable,
};
export { reducers, sagas, TurnsList, TurnsTable };
