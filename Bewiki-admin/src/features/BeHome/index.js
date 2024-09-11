//import Behome from "./containers/BeHome";
import { HistoricList } from "./Historic";
import { StudiosEditing } from "./StudioEditing";
import {
  PrevisionFlow,
  reducers as BehomePrevisionFlow,
  sagas as BehomePrevisionFlowSagas,
} from "./PrevisionFlow";

import {
  Signatures,
  reducers as BehomeSubscriptions,
  sagas as BehomeSubscriptionsSagas,
} from "./Signatures";
import {
  RequestedReservations,
  reducers as behomeReservations,
  sagas as BehomeReservationsSagas,
} from "./RequestedReservations";

import {
  PendingCheckIns,
  reducers as behomePendingCheckIns,
  sagas as behomePendingCheckInsSagas,
} from "./PendingCheckIns";
import {
  RegisterApartment,
  reducers as behomeRegisterApartment,
  sagas as RegisterApartmentSagas,
} from "./RegisterApartment";
import {
  StudiosListCards,
  reducers as behomeStudiosList,
  sagas as StudiosListSagas,
} from "./StudiosList";

import {
  ImportReservations,
  reducers as BehomeReservationImport,
  sagas as BehomeReservationImportSagas,
} from "./ImportReservations";

const Behome = {
  RequestedReservations,
  HistoricList,
  PrevisionFlow,
  RegisterApartment,
  StudiosListCards,
  PendingCheckIns,
  Signatures,
  ImportReservations,
  StudiosEditing,
};

const reducers = {
  behomeReservations: behomeReservations,
  behomeRegisterApartment: behomeRegisterApartment,
  behomePendingCheckIns: behomePendingCheckIns,
  BehomeSubscriptions: BehomeSubscriptions,
  BehomePrevisionFlow: BehomePrevisionFlow,
  behomeStudiosList: behomeStudiosList,
  BehomeReservationImport: BehomeReservationImport,
};

const sagas = [
  ...BehomeReservationsSagas,
  ...RegisterApartmentSagas,
  ...behomePendingCheckInsSagas,
  ...BehomeSubscriptionsSagas,
  ...BehomePrevisionFlowSagas,
  ...StudiosListSagas,
  ...BehomeReservationImportSagas,
];

export { reducers, sagas, Behome };
