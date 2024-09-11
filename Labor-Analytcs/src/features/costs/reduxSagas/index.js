import createReducers from "../../../store/helpers/createPageReducer";
import costsPeriodResultRequest from "./costsPeriodResultRequest";
import costsPeriodResultBarChartRequest from "./costsPeriodResultBarChartRequest";
import costsDimensionsChartRequest from "./costsDimensionsChartRequest";
import costsDimensionsTableRequest from "./costsDimensionsTableRequest";
import costsProcessChartRequest from "./costsProcessChartRequest";
import costsProcessTableRequest from "./costsProcessTableRequest";
import costsServingListRequest from "./costsServingListRequest";
import costsIdleProcessRequest from "./costsIdleProcessRequest";

const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "costsPeriodResultRequest",
      function: (state) => ({
        ...state,
        periodResultIsFetching: true,
      }),
      sagaFunction: costsPeriodResultRequest,
    },
    {
      name: "costsPeriodResultSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        periodResultIsFetching: false,
        periodResultData: data,
      }),
    },
    {
      name: "costsPeriodResultFailure",
      function: (state) => ({ ...state, periodResultIsFetching: false }),
    },
    {
      name: "costsPeriodResultBarChartRequest",
      function: (state) => ({
        ...state,
        periodResultBarChartIsFetching: true,
      }),
      sagaFunction: costsPeriodResultBarChartRequest,
    },
    {
      name: "costsPeriodResultBarChartSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        periodResultBarChartIsFetching: false,
        periodResultBarChartData: data,
      }),
    },
    {
      name: "costsPeriodResultBarChartFailure",
      function: (state) => ({
        ...state,
        periodResultBarChartIsFetching: false,
      }),
    },

    {
      name: "costsIdleProcessRequest",
      function: (state) => ({
        ...state,
        idleProcessIsFetching: true,
      }),
      sagaFunction: costsIdleProcessRequest,
    },
    {
      name: "costsIdleProcessSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        idleProcessIsFetching: false,
        idleProcessData: data,
      }),
    },
    {
      name: "costsIdleProcessFailure",
      function: (state) => ({
        ...state,
        idleProcessIsFetching: false,
      }),
    },

    {
      name: "costsServingListRequest",
      function: (state) => ({
        ...state,
        servingListIsFetching: true,
      }),
      sagaFunction: costsServingListRequest,
    },
    {
      name: "costsServingListSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        servingListIsFetching: false,
        servingListData: data,
      }),
    },
    {
      name: "costsServingListFailure",
      function: (state) => ({
        ...state,
        servingListIsFetching: false,
      }),
    },

    {
      name: "costsDimensionsChartRequest",
      function: (state) => ({
        ...state,
        dimensionsChartDataIsFetching: true,
      }),
      sagaFunction: costsDimensionsChartRequest,
    },
    {
      name: "costsDimensionsChartSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        dimensionsChartDataIsFetching: false,
        dimensionsChartData: data,
      }),
    },
    {
      name: "costsDimensionsChartFailure",
      function: (state) => ({
        ...state,
        dimensionsChartDataIsFetching: false,
      }),
    },

    {
      name: "costsDimensionsTableRequest",
      function: (state) => ({
        ...state,
        dimensionsTableDataIsFetching: true,
      }),
      sagaFunction: costsDimensionsTableRequest,
    },
    {
      name: "costsDimensionsTableSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        dimensionsTableDataIsFetching: false,
        dimensionsTableData: data,
      }),
    },
    {
      name: "costsDimensionsTableFailure",
      function: (state) => ({
        ...state,
        dimensionsTableDataIsFetching: false,
      }),
    },

    {
      name: "costsProcessChartRequest",
      function: (state) => ({
        ...state,
        processChartDataIsFetching: true,
      }),
      sagaFunction: costsProcessChartRequest,
    },
    {
      name: "costsProcessChartSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        processChartDataIsFetching: false,
        processChartData: data,
      }),
    },
    {
      name: "costsProcessChartFailure",
      function: (state) => ({
        ...state,
        processChartDataIsFetching: false,
      }),
    },

    {
      name: "costsProcessTableRequest",
      function: (state) => ({
        ...state,
        processTableDataIsFetching: true,
      }),
      sagaFunction: costsProcessTableRequest,
    },
    {
      name: "costsProcessTableSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        processTableDataIsFetching: false,
        processTableData: data,
      }),
    },
    {
      name: "costsProcessTableFailure",
      function: (state) => ({
        ...state,
        processTableDataIsFetching: false,
      }),
    },
  ],
  {
    periodResultIsFetching: false,
    periodResultData: null,
    periodResultBarChartIsFetching: false,
    periodResultBarChartData: null,
    idleProcessIsFetching: false,
    idleProcessData: null,
    servingListIsFetching: false,
    servingListData: null,
    dimensionsChartDataIsFetching: false,
    dimensionsChartData: null,
    dimensionsTableDataIsFetching: false,
    dimensionsTableData: null,
    processChartDataIsFetching: false,
    processChartData: null,
    processTableDataIsFetching: false,
    processTableData: null,
  }
);

export { Creators, reducers, sagas };
