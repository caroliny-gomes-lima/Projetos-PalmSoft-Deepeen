async function caller(methodFunc, endpoint, model, body, axiosConfig) {
  const response = await methodFunc(endpoint, body, axiosConfig);
  if (response.ok) {
    if (model) {
      return model(response);
    } else {
      return response;
    }
  } else {
    throw Object.assign(new Error("error"), {
      message: "error from api",
      ...response,
      errorType: endpoint,
    });
  }
}

export default caller;
