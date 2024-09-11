import { reducers as globalReducers } from "./globalReduxSagas";
import { reducers as loginReducers } from "./login";
import { reducers as recoveryPasswordReducers } from "./forgotPassword";
import { reducers as productivityReducers } from "./productivity";
import { reducers as capacityReducers } from "./capacity";
import { reducers as costsReducers } from "./costs";
import { reducers as opportunitiesReducers } from "./opportunities";
import { reducers as settingsReducers } from "./settings";
import { reducers as setupReducers } from "./setup";
import { reducers as reportReducers } from "./reports";

const reducers = {
  global: globalReducers,
  login: loginReducers,
  recoveryPassword: recoveryPasswordReducers,
  productivity: productivityReducers,
  capacity: capacityReducers,
  costs: costsReducers,
  opportunities: opportunitiesReducers,
  settings: settingsReducers,
  report: reportReducers,
  ...setupReducers,
};

export default reducers;
