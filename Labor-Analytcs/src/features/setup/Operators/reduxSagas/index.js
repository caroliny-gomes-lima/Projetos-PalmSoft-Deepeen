import createReducers from "../../../../store/helpers/createPageReducer";
import SendOperatorsRequest from "./SendOperatorsRequest";
import GetOperatorsRequest from "./GetOperatorsRequest";
const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "SendOperators",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: SendOperatorsRequest,
    },
    {
      name: "GetOperators",
      params: ["idOp", "sector", "shift", "status"],
      function: (state, { idOp, sector, shift, status }) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: GetOperatorsRequest,
    },
    {
      name: "GetOperatorsSucess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: false,
        OperatorsData: data,
      }),
    },
    {
      name: "OperatorsFinish",
      function: (state, { data }) => ({
        ...state,
        isFetching: false,
      }),
    },
  ],
  {
    isFetching: false,
    OperatorsData: null,
  }
);

export { Creators, reducers, sagas };
