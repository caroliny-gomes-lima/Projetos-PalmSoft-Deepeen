import Parse from "../helpers/Parse";

function parseFunction(item) {
  return {
    email: item.email,
    name: item.name,
    lastName: item.lastName,
  };
}
export default function getUserInfos(response) {
  const parse = new Parse(response.data, response.endpoint, parseFunction);
  return { ...response, data: parse.parse() };
}
