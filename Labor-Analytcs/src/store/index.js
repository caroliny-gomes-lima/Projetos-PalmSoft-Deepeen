import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware, connectRouter } from "connected-react-router";

import reducers from "../features/reducers";
import sagas from "./sagas";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
middleware.push(routerMiddleware(history));

const enhancers = [applyMiddleware(...middleware)];
const initialState = {};
const store = createStore(
  combineReducers({ ...reducers, router: connectRouter(history) }),
  initialState,
  compose(...enhancers)
);

const configureStore = () => {
  return { store };
};

sagaMiddleware.run(sagas);

export default configureStore;
