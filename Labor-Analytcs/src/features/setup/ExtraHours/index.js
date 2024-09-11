import Container from "./containers/container";
import ExtraHoursTable from "./containers/ExtraHoursTable";
import { reducers, sagas } from "./reduxSagas";

const ExtraHoursFilters = {
  Container,
  ExtraHoursTable,
};

export { reducers, sagas, ExtraHoursFilters };
