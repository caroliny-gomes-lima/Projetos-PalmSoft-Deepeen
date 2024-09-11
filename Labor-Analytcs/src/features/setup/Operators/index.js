import Container from "../Operators/containers/container";
import OperatorsTable from "./containers/OperatorsTable";
import { reducers, sagas } from "./reduxSagas";

const operatorsFilters = {
  Container,
  OperatorsTable,
};
export { reducers, sagas, operatorsFilters };
