export default function errorResponseMessage(response) {
  if (response?.data) {
    const message = responseWidthData(response.data);
    if (message) {
      return message;
    }
  }
  if (response.problem === "CANCEL_ERROR") {
    return "Filtro cancelado, os dados não serão exibidos.";
  }
  if (response.problem === "NOT_ADMIN") {
    return "O usuário informado não possui acesso ao ambiente Admin. Por favor, contatar equipe de Suporte Técnico.";
  }
  if (response.status >= 500 || !response?.status) {
    return "Algo deu errado ao contactar o servidor, tente novamente mais tarde.";
  }
  if (response.status === 403) {
    return "Sua sessão expirou. Logue novamente para continuar utilizando nossos serviços.";
  }

  if (response.status === 401) {
    return "Nome de usuário e/ou senha inválido(s). Por favor, tente novamente.";
  }
}

function responseWidthData(data) {
  if (data.log) {
    return data.log;
  } else if (data.message && data.message !== "error from api") {
    return data.message;
  }
}
