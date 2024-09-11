export default function buildQueryParamsUrl(endpoint, params) {
  const urlSearchParams = new URLSearchParams(params);
  urlSearchParams.forEach((value, name, searchParams) => {
    if (value === null || value === undefined || value === "") {
      searchParams.delete(name);
    }
  });
  return `${endpoint}?${urlSearchParams.toString()}`;
}
