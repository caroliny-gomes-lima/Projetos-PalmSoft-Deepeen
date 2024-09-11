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
  if (response.status >= 500 || !response?.status) {
    return "Algo deu errado ao contactar o servidor, tente novamente mais tarde.";
  }
  if (response.status === 403) {
    return "Usuário e/ou senha incorretos. Por favor, tente novamente.";
  }

  if (response.status === 401) {
    return "Sua sessão expirou. Logue novamente para continuar utilizando nossos serviços.";
  }
}

function responseWidthData(data) {
  if (data.log) {
    return data.log;
  } else if (data.message && data.message !== "error from api") {
    return data.message;
  }
}
