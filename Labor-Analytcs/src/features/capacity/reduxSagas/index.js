import createReducers from "../../../store/helpers/createPageReducer";

import capacityProcessRequest from "./processRequest";
import historicCapacityRequest from "./historicCapacityRequest";
import orderingRequest from "./orderingRequest";
import globalCapacityRequest from "./globalCapacityRequest";

const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "capacityProcessRequest",
      params: ["filters"],
      function: (state) => ({
        ...state,
        processIsFetching: true,
      }),
      sagaFunction: capacityProcessRequest,
    },
    {
      name: "capacityProcessSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        processIsFetching: false,
        processData: data,
      }),
    },
    {
      name: "capacityProcessFailure",
      function: (state) => ({
        ...state,
        processIsFetching: false,
      }),
    },
    {
      name: "orderingRequest",
      params: ["filters"],
      function: (state) => ({
        ...state,
        orderingIsFetching: true,
      }),
      sagaFunction: orderingRequest,
    },
    {
      name: "orderingSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        orderingIsFetching: false,
        orderingData: data,
      }),
    },
    {
      name: "orderingFailure",
      function: (state) => ({
        ...state,
        orderingIsFetching: false,
      }),
    },
    {
      name: "historicCapacityRequest",
      params: ["filters"],
      function: (state) => ({
        ...state,
        historicCapacityIsFetching: true,
      }),
      sagaFunction: historicCapacityRequest,
    },
    {
      name: "historicCapacitySuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        historicCapacityIsFetching: false,
        historicCapacityData: data,
      }),
    },
    {
      name: "historicCapacityFailure",
      function: (state) => ({
        ...state,
        historicCapacityIsFetching: false,
      }),
    },
    {
      name: "globalCapacityRequest",
      params: ["filters"],
      function: (state) => ({
        ...state,
        globalCapacityIsFetching: true,
      }),
      sagaFunction: globalCapacityRequest,
    },
    {
      name: "globalCapacitySuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        globalCapacityIsFetching: false,
        globalCapacityData: data,
      }),
    },
    {
      name: "globalCapacityFailure",
      function: (state) => ({ ...state, globalCapacityIsFetching: false }),
    },
  ],
  {
    processIsFetching: true,
    processData: null,
    orderingIsFetching: true,
    orderingData: null,
    historicCapacityIsFetching: true,
    historicCapacityData: null,
    globalCapacityIsFetching: true,
    globalCapacityData: null,
  }
);

export { Creators, reducers, sagas };
