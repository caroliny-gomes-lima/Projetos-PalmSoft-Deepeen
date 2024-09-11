import { createReducers } from "../../../store/helpers";
import recoveryPasswordRequest from "./recoveryPasswordRequest";
import recoveryPasswordCode from "./recoveryPasswordCode";
import recoveryPasswordNewPassword from "./recoveryPasswordNewPassword";

const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "recoveryPasswordRequest",
      params: ["email"],
      function: (state) => ({
        ...state,
        success: false,
        isFetching: true,
      }),
      sagaFunction: recoveryPasswordRequest,
    },
    {
      name: "recoveryPasswordFinished",
      params: ["email", "success"],
      function: (state, { email, success }) => ({
        ...state,
        isFetching: false,
        success,
        email,
      }),
    },
    {
      name: "recoveryPasswordClearData",
      function: (state) => ({
        ...state,
        success: false,
        isFetching: false,
        email: null,
        token: null,
      }),
    },
    {
      name: "recoveryPasswordClearDataStart",
      function: (state) => ({
        ...state,
        success: false,
        email: null,
        token: null,
      }),
    },
    {
      name: "recoveryPasswordCodeRequest",
      params: ["code"],
      function: (state) => ({
        ...state,
        isFetching: true,
        success: false,
      }),
      sagaFunction: recoveryPasswordCode,
    },
    {
      name: "recoveryPasswordCodeSuccess",
      params: ["token"],
      function: (state, { token }) => ({
        ...state,
        isFetching: false,
        token: token.token,
      }),
    },
    {
      name: "recoveryPasswordCodeFailure",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },

    {
      name: "recoveryPasswordNewPasswordRequest",
      params: ["password", "code"],
      function: (state) => ({
        ...state,
        isFetching: true,
        success: false,
      }),
      sagaFunction: recoveryPasswordNewPassword,
    },
    {
      name: "recoveryPasswordNewPasswordFinished",
      function: (state) => ({
        ...state,
        isFetching: false,
        // email: null,
      }),
    },
    {
      name: "recoveryPasswordNewPasswordFailure",
      function: (state) => ({
        ...state,
        isFetching: false,
        // email: null,
      }),
    },
  ],
  {
    email: null,
    token: null,
    isFetching: false,
    success: false,
  }
);

export { Creators, reducers, sagas };
