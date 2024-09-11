
import errorResponseMessage from "./getErrorMessage";
import { AxiosRequestConfig } from 'axios';
async function caller(methodFunc, endpoint: string, model?: any , body?: any, axiosConfig?: AxiosRequestConfig) {
  const response = await methodFunc(endpoint, body, axiosConfig);

  if (response.ok) {
    if (model) {
      return model(response);
    } else {
      return response;
    }
  } else {
    const errorMsg = errorResponseMessage(response);
   /*  errorModal.setInfos(
      "Erro",
      errorMsg,
      { label: "OK", onClick: () => errorModal.close() },
      null,
      null,
      false
    ); */
    return Object.assign(new Error("error"), {
      message: "error from api",
      ...response,
      errorType: endpoint,
    });
  }
}

export default caller;
