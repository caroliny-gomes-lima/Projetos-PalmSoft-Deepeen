import createReducers from "../../../store/helpers/createPageReducer";
import ReportLoad from "./ReportLoad";

const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "reportsRequestLoad",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
        reportData: null,
        reportData100: null,
      }),
      sagaFunction: ReportLoad,
    },
    {
      name: "reportRequestLoadSuccess",
      params: ["data", "data100"],
      function: (state, { data, data100 }) => ({
        ...state,
        isFetching: false,
        reportData: data,
        reportData100: data100,
      }),
    },
    {
      name: "reportRequestLoadFailure",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },
  ],
  {
    isFetching: false,
    reportData: null,
    reportData100: null,
  }
);

export { Creators, reducers, sagas };
