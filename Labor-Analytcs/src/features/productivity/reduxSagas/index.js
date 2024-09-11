import createReducers from "../../../store/helpers/createPageReducer";
import globalProductivityRequest from "./globalProductivityRequest";
import statusProcessFiltersRequest from "./statusProcessFiltersRequest";
const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "globalProductivityRequest",
      params: ["filters", "cancelToken"],
      function: (state, { filters }) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: globalProductivityRequest,
    },
    {
      name: "globalProductivitySuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: false,
        globalProductivityData: data,
      }),
    },
    {
      name: "globalProductivityFailure",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },
    {
      name: "statusProcessFiltersRequest",
      function: (state) => ({
        ...state,
        isFetchingFilter: true,
      }),
      sagaFunction: statusProcessFiltersRequest,
    },
    {
      name: "statusProcessFiltersSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetchingFilter: false,
        statusProcessFiltersData: data,
      }),
    },
    {
      name: "statusProcessFiltersFailure",
      function: (state) => ({
        ...state,
        isFetchingFilter: false,
      }),
    },
    {
      name: "historicProductivitySuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        historicProductivityData: data,
      }),
    },
    {
      name: "geralDataDataSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        GeralDataData: data,
      }),
    },
    {
      name: "productivityProcessSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        processData: data,
      }),
    },
    {
      name: "orderingProductivitySuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        orderingProductivityData: data,
      }),
    },
    {
      name: "exit",
      function: (state) => ({
        isFetching: false,
        globalProductivityData: null,
        historicProductivityData: null,
        processData: null,
        orderingProductivityData: null,
        GeralDataData: null,
      }),
    },
  ],
  {
    isFetching: false,
    isFetchingFilter: false,
    globalProductivityData: null,
    historicProductivityData: null,
    GeralDataData: null,
    processData: null,
    orderingProductivityData: null,
    statusProcessFiltersData: null,
  }
);

export { Creators, reducers, sagas };
