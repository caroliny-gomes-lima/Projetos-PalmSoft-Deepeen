import createReducers from "../../../../store/helpers/createPageReducer";
import PlannedEquationsRequestLoad from "./PlannedEquationsRequestLoad";
import PerformedEquationsRequestLoad from "./PerformedEquationsRequestLoad";
import EquationsRequestSave from "./EquationsRequestSave";
import EquationsRequestDelete from "./EquationsRequestDelete";
const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "PlannedEquationsRequestLoad",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
        PlannedEquationsHistoryData: null,
      }),
      sagaFunction: PlannedEquationsRequestLoad,
    },

    {
      name: "PlannedEquationsRequestLoadSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: false,
        PlannedEquationsHistoryData: data,
      }),
    },

    {
      name: "PerformedEquationsRequestLoad",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
        performedEquationsHistoryData: null,
      }),
      sagaFunction: PerformedEquationsRequestLoad,
    },

    {
      name: "PerformedEquationsRequestLoadSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: false,
        performedEquationsHistoryData: data,
      }),
    },

    {
      name: "EquationsRequestLoadFailure",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },

    {
      name: "EquationsRequestSave",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: EquationsRequestSave,
    },

    {
      name: "EquationsRequestSaveFinish",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },

    {
      name: "EquationsRequestDelete",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: EquationsRequestDelete,
    },

    {
      name: "EquationsRequestDeleteFinish",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },
  ],
  {
    isFetching: false,
    PlannedEquationsHistoryData: null,
    performedEquationsHistoryData: null,
  }
);

export { Creators, reducers, sagas };
