import {
  PlannedEquation,
  reducers as equationsReducers,
  sagas as equationsSagas,
} from "./PlannedEquations";

import { PerformedEquation } from "./PerformedEquations";

import {
  ExtraHoursFilters,
  reducers as extraHoursReducers,
  sagas as extraHoursSagas,
} from "./ExtraHours";

import {
  operatorsFilters,
  reducers as operatorsReducers,
  sagas as operatorsSagas,
} from "./Operators";

import {
  TurnsList,
  reducers as turnsReducers,
  sagas as turnsSagas,
} from "./Turns";

const Setup = {
  PlannedEquation,
  PerformedEquation,
  ExtraHoursFilters,
  TurnsList,
  operatorsFilters,
};

const reducers = {
  setupEquations: equationsReducers,
  extraHours: extraHoursReducers,
  operators: operatorsReducers,
  turns: turnsReducers,
};

const sagas = [
  ...equationsSagas,
  ...extraHoursSagas,
  ...operatorsSagas,
  ...turnsSagas,
];
export { reducers, sagas, Setup };
