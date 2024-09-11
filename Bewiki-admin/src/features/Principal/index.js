import { Users, reducers as usersReducers, sagas as usersSagas } from "./Users";
import {
  CashBack,
  reducers as cashBackReducers,
  sagas as cashBackSagas,
} from "./CashBack";

const Principal = {
  Users,
  CashBack,
};

const reducers = {
  usersReducers: usersReducers,
  cashBackReducers: cashBackReducers,
};

const sagas = [...usersSagas, ...cashBackSagas];

export { Principal, reducers, sagas };
