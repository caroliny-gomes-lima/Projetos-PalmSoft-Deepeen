import Parse from "../helpers/Parse";

function parseFunction(item) {
  let avatarName = "";
  const split = item.name ? item.name.split(" ") : null;
  let firstName;
  let lastName;
  if (split) {
    firstName = split[0];
    lastName = split[1];
  }

  if (lastName && firstName) {
    avatarName =
      firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
  } else {
    avatarName = item.email.substring(0, 2).toUpperCase();
  }

  return {
    role: item.role.name,
    avatarName,
    userId: item.id,
    email: item.email,
    isAdmin: item.isAdmin,
    enable: item.enable,
    name: split ? firstName + " " + lastName : item.email,
  };
}
export default function getUserInfos(response) {
  const parse = new Parse(response.data, response.endpoint, parseFunction);
  return { ...response, data: parse.parse() };
}
