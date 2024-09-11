import createReducers from "../../../../store/helpers/createPageReducer";
import PrevisionFlowRequest from "./PrevisionFlowRequest";
import StayCheckInfoFlowRequest from "./StayCheckInfoFlowRequest";

const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "PrevisionFlowRequest",
      params: ["page", "pageSize", "sort", "name", "stayType", "status"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
        PrevisionFlowData: null,
      }),
      sagaFunction: PrevisionFlowRequest,
    },

    {
      name: "PrevisionFlowRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: false,
        PrevisionFlowData: data,
      }),
    },

    {
      name: "PrevisionFlowRequestFailure",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },

    {
      name: "StayCheckInfoFlowRequest",
      params: ["startDate", "endDate"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
        CheckInfoData: null,
      }),
      sagaFunction: StayCheckInfoFlowRequest,
    },

    {
      name: "StayCheckInfoFlowRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        CheckInfoData: data,
        isFetching: false,
      }),
    },

    {
      name: "StayCheckInfoFlowRequestFailure",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },
  ],
  {
    isFetching: false,
    PrevisionFlowData: null,
    CheckInfoData: null,
  }
);

export { Creators, reducers, sagas };
