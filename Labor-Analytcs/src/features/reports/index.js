import ReportTable from "./containers/ReportTable";
import ReportFilter from "./containers/ReportFilter";
import { reducers, sagas } from "./reduxSagas";

const Reports = {
  ReportTable,
  ReportFilter,
};

export { reducers, sagas, Reports };
