import StandardRuleTable from "./containers/StandardRuleTable";
import ParametersPerformed from "../PerformedEquations/containers/ParametersPerformed";
import PerformedEquationTable from "./containers/PerformedEquationTable";

import { reducers, sagas } from "../PlannedEquations/reduxSagas";

const PerformedEquation = {

    ParametersPerformed,
    StandardRuleTable,
    PerformedEquationTable,

};

export { reducers, sagas, PerformedEquation };