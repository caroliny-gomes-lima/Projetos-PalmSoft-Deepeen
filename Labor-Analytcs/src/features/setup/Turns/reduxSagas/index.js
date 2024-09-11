import createReducers from "../../../../store/helpers/createPageReducer";
import SendTurnsRequest from "./SendTurnsRequest";
import GetTurnsRequest from "./GetTurnsRequest";
import DeleteTurnsRequest from "./DeleteTurnRequest";
import UpdateTurnRequest from "./UpdateTurnRequest";
const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "SendTurns",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: SendTurnsRequest,
    },
    {
      name: "UpdateTurn",
      params: ["data", "id"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: UpdateTurnRequest,
    },
    {
      name: "GetTurns",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: GetTurnsRequest,
    },
    {
      name: "DeleteTurn",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: DeleteTurnsRequest,
    },
    {
      name: "GetTurnsSucess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: false,
        TurnsData: data,
      }),
    },
    {
      name: "TurnsFinish",
      function: (state, { data }) => ({
        ...state,
        isFetching: false,
      }),
    },
  ],
  {
    isFetching: false,
    TurnsData: null,
  }
);

export { Creators, reducers, sagas };
