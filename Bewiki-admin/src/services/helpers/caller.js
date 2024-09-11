import { Creators } from "../../features/globalReduxSagas";
import { SessionStorage } from "../../lib";
import configureStore from "../../store";

async function caller(methodFunc, endpoint, model, body, axiosConfig) {
  const response = await methodFunc(endpoint, body, axiosConfig);
  if (response.ok) {
    if (model) {
      return model(response);
    } else {
      return response;
    }
  } else {

    if (response.status === 401 && SessionStorage.getItem("isLoggedIn")) {      
      const { store } = configureStore();
      const { globalLogout } = Creators
      store.dispatch(globalLogout());
    } else {
      throw Object.assign(
        new Error("error"),
        {
          message: "error from api",
          ...response,
          errorType: endpoint,
        }
      );
    }

  }
}

export default caller;
