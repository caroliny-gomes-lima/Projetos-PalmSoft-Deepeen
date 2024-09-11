export default function buildQueryParamsUrl(endpoint, params) {
  Object.keys(params).forEach((key) => {
    if (
      params[key] === null ||
      params[key] === undefined ||
      params[key] === ""
    ) {
      delete params[key];
    }
  });

  const urlSearchParams = new URLSearchParams(params);
  return `${endpoint}?${urlSearchParams.toString()}`;
}
