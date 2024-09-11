import createReducers from "../../../../store/helpers/createPageReducer";
import SendExtraHoursRequest from "./SendExtraHoursRequest";
import GetExtraHoursRequest from "./GetExtraHoursRequest";
import ExtraHoursRequestDelete from "./ExtraHoursRequestDelete";
const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "SendExtraHours",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: SendExtraHoursRequest,
    },
    {
      name: "GetExtraHours",
      params: ["data", "callback"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
        ExtraHoursData: null,
      }),
      sagaFunction: GetExtraHoursRequest,
    },
    {
      name: "GetExtraHoursSucess", //pega resultado da busca na api
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: false,
        ExtraHoursData: data,
      }),
    },
    {
      name: "ExtraHoursFinish", //finaliza  busca
      function: (state, { data }) => ({
        ...state,
        isFetching: false,
      }),
    },
    {
      name: "ExtraHoursRequestDelete",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: ExtraHoursRequestDelete,
    },
  ],
  {
    isFetching: false,
    ExtraHoursData: null,
  }
);

export { Creators, reducers, sagas };
