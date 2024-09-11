import createReducers from "../../../store/helpers/createPageReducer";
import opportunitiesDimensionsResultChartRequest from "./opportunitiesDimensionsResultChartRequest";
import opportunitiesDimensionsResultTableRequest from "./opportunitiesDimensionsResultTableRequest";
import opportunitiesCapacitySummaryRequest from "./opportunitiesCapacitySummaryRequest";
import opportunitiesProductivitySummaryRequest from "./opportunitiesProductivitySummaryRequest";
import opportunitiesSummaryRequest from "./opportunitiesSummaryRequest";
import opportunitiesUnassignedHoursRequest from "./opportunitiesUnassignedHoursRequest";

const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "opportunitiesDimensionsResultChartRequest",
      function: (state) => ({
        ...state,
        dimensionsResultChartDataIsFetching: true,
        dimensionsResultChartData: null,
      }),
      sagaFunction: opportunitiesDimensionsResultChartRequest,
    },
    {
      name: "opportunitiesDimensionsResultChartSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        dimensionsResultChartDataIsFetching: false,
        dimensionsResultChartData: data,
      }),
    },
    {
      name: "opportunitiesDimensionsResultChartFailure",
      function: (state) => ({
        ...state,
        dimensionsResultChartDataIsFetching: false,
      }),
    },

    {
      name: "opportunitiesDimensionsResultTableRequest",
      function: (state) => ({
        ...state,
        dimensionsResultTableDataIsFetching: true,
        dimensionsResultTableData: null,
      }),
      sagaFunction: opportunitiesDimensionsResultTableRequest,
    },
    {
      name: "opportunitiesDimensionsResultTableSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        dimensionsResultTableDataIsFetching: false,
        dimensionsResultTableData: data,
      }),
    },
    {
      name: "opportunitiesDimensionsResultTableFailure",
      function: (state) => ({
        ...state,
        dimensionsResultTableDataIsFetching: false,
      }),
    },

    {
      name: "opportunitiesCapacitySummaryRequest",
      function: (state) => ({
        ...state,
        capacitySummaryIsFetching: true,
        capacitySummary: null,
      }),
      sagaFunction: opportunitiesCapacitySummaryRequest,
    },
    {
      name: "opportunitiesCapacitySummarySuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        capacitySummaryIsFetching: false,
        capacitySummary: data,
      }),
    },
    {
      name: "opportunitiesCapacitySummaryFailure",
      function: (state) => ({
        ...state,
        capacitySummaryIsFetching: false,
      }),
    },

    {
      name: "opportunitiesProductivitySummaryRequest",
      function: (state) => ({
        ...state,
        productivitySummaryIsFetching: true,
        productivitySummary: null,
      }),
      sagaFunction: opportunitiesProductivitySummaryRequest,
    },
    {
      name: "opportunitiesProductivitySummarySuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        productivitySummaryIsFetching: false,
        productivitySummary: data,
      }),
    },
    {
      name: "opportunitiesProductivitySummaryFailure",
      function: (state) => ({
        ...state,
        productivitySummaryIsFetching: false,
      }),
    },

    {
      name: "opportunitiesSummaryRequest",
      function: (state) => ({
        ...state,
        summaryIsFetching: true,
        summary: null,
      }),
      sagaFunction: opportunitiesSummaryRequest,
    },
    {
      name: "opportunitiesSummarySuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        summaryIsFetching: false,
        summary: data,
      }),
    },
    {
      name: "opportunitiesSummaryFailure",
      function: (state) => ({
        ...state,
        summaryIsFetching: false,
      }),
    },

    {
      name: "opportunitiesUnassignedHoursRequest",
      function: (state) => ({
        ...state,
        unassignedHoursIsFetching: true,
        unassignedHours: null,
      }),
      sagaFunction: opportunitiesUnassignedHoursRequest,
    },
    {
      name: "opportunitiesUnassignedHoursSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        unassignedHoursIsFetching: false,
        unassignedHours: data,
      }),
    },
    {
      name: "opportunitiesUnassignedHoursFailure",
      function: (state) => ({
        ...state,
        unassignedHoursIsFetching: false,
      }),
    },
  ],
  {
    dimensionsResultChartDataIsFetching: true,
    dimensionsResultChartData: null,
    dimensionsResultTableDataIsFetching: true,
    dimensionsResultTableData: null,
    capacitySummaryIsFetching: true,
    capacitySummary: null,
    productivitySummaryIsFetching: true,
    productivitySummary: null,
    summaryIsFetching: true,
    summary: null,
    unassignedHoursIsFetching: true,
    unassignedHours: null,
  }
);

export { Creators, reducers, sagas };
