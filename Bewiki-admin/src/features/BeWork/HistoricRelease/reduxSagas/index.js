import createReducers from "../../../../store/helpers/createPageReducer";
import HistoricReleaseRequest from "./HistoricReleaseRequest";

const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "HistoricReleaseRequest",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
        HistoricReleaseData: null,
      }),
      sagaFunction: HistoricReleaseRequest,
    },

    {
      name: "HistoricReleaseRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: false,
        HistoricReleaseData: data,
      }),
    },

    {
      name: "HistoricReleaseRequestFailure",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },

    {
      name: "HistoricReleaseRequestFinish",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },
  ],
  {
    isFetching: false,
    HistoricReleaseData: null,
  }
);

export { Creators, reducers, sagas };
