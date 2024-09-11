import { createReducers } from "../../store/helpers";
import logoutFunction from "./logoutFunction";
import getGlobalStatus from "./getGlobalStatus";
import getUserInfos from "./getUserInfos";
import getOperadoresRequest from "./getOperadoresRequest";
import getWorkShiftRequest from "./getWorkShiftRequest";
import getSectorsRequest from "./getSectorsRequest";
import getOpTypeRequest from "./getOpTypeRequest";
import getStatusRequest from "./getStatusRequest";

const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "globalLogout",
      function: (state) => ({
        ...state,
        userInfos: {},
      }),
      sagaFunction: logoutFunction,
    },

    {
      name: "getGlobalStatus",
      function: (state) => ({
        ...state,
      }),
      sagaFunction: getGlobalStatus,
    },

    {
      name: "setIsLoggedIn",
      params: ["isLoggedIn"],
      function: (state, { isLoggedIn }) => ({
        ...state,
        isLoggedIn,
      }),
    },

    {
      name: "getUserInfosRequest",
      function: (state) => ({
        ...state,
        isFetchingUserInfos: true,
      }),
      sagaFunction: getUserInfos,
    },
    {
      name: "getUserInfosSuccess",
      params: ["userInfos"],
      function: (state, { userInfos }) => ({
        ...state,
        userInfos,
        isFetchingUserInfos: false,
      }),
    },
    {
      name: "getUserInfosFailure",
      function: (state) => ({
        ...state,
      }),
    },
    {
      name: "getOperadoresRequest",
      function: (state) => ({
        ...state,
        isFetchingOperator: true,
      }),
      sagaFunction: getOperadoresRequest,
    },
    {
      name: "getOperadoresSuccess",
      params: ["operatorData"],
      function: (state, { operatorData }) => ({
        ...state,
        operatorData,
        isFetchingOperator: false,
      }),
    },
    {
      name: "getWorkShiftRequest",
      function: (state) => ({
        ...state,
        isFetchingWorkShift: true,
      }),
      sagaFunction: getWorkShiftRequest,
    },
    {
      name: "getWorkShiftSucess",
      params: ["filter", "data"],
      function: (state, { data, filter }) => ({
        ...state,
        workShifts: data,
        workShiftsFilter: filter,
        isFetchingWorkShift: false,
      }),
    },
    {
      name: "getWorkShiftFailure",
      function: (state) => ({
        ...state,
        isFetchingWorkShift: false,
      }),
    },
    {
      name: "getSectorsRequest",
      function: (state) => ({
        ...state,
        isFetchingSectors: true,
      }),
      sagaFunction: getSectorsRequest,
    },
    {
      name: "getSectorsSucess",
      params: ["filter", "data"],
      function: (state, { data, filter }) => ({
        ...state,
        operatorSector: data,
        operatorSectorFilter: filter,
        isFetchingSectors: false,
      }),
    },
    {
      name: "getSectorsFailure",
      function: (state) => ({
        ...state,
        isFetchingSectors: false,
      }),
    },
    {
      name: "getStatusRequest",
      function: (state) => ({
        ...state,
        isFetchingOpStatus: true,
      }),
      sagaFunction: getStatusRequest,
    },
    {
      name: "getStatusSucess",
      params: ["filter", "data"],
      function: (state, { data, filter }) => ({
        ...state,
        operatorStatus: data,
        operatorStatusFilter: filter,
        isFetchingOpStatus: false,
      }),
    },
    {
      name: "getStatusFailure",
      function: (state) => ({
        ...state,
        isFetchingOpStatus: false,
      }),
    },
    {
      name: "getOpTypeRequest",
      function: (state) => ({
        ...state,
        isFetchingOpType: true,
      }),
      sagaFunction: getOpTypeRequest,
    },
    {
      name: "getOpTypeSucess",
      params: ["filter", "data"],
      function: (state, { data, filter }) => ({
        ...state,
        operatorTypeFilter: filter,
        operatorType: data,
        isFetchingOpType: false,
      }),
    },
    {
      name: "getOpTypeFailure",
      function: (state) => ({
        ...state,
        isFetchingOpType: false,
      }),
    },
    {
      name: "getOperadoresFailure",
      function: (state) => ({
        ...state,
        isFetchingOperator: false,
      }),
    },
  ],
  {
    isLoggedIn: false,
    isFetchingUserInfos: true,
    userInfos: {},
    operatorType: [],
    operatorTypeFilter: [],
    isFetchingOpType: false,
    operatorStatus: [],
    operatorStatusFilter: [],
    isFetchingOpStatus: false,
    operatorSector: [],
    operatorSectorFilter: [],
    isFetchingSectors: false,
    workShifts: [],
    workShiftsFilter: [],
    isFetchingWorkShift: false,
    operatorData: [],
    isFetchingOperator: false,
  }
);

export { Creators, reducers, sagas };
