import { Console } from "../../lib";

export default function getListaAcessos(response) {
  if (response.ok) {
    try {
      const data = response.data.map((item) => {
        return {
          ...item,
          email: item.email,
          name: item.name,
          title: item.name,
          roleName: item.role?.name,
          enabled: item.enable,
        };
      });
      return { ...response, data };
    } catch (e) {
      Console.errorParseResponse("/user/get_all");
      return { ...response, ok: false };
    }
  } else {
    return response;
  }
}
