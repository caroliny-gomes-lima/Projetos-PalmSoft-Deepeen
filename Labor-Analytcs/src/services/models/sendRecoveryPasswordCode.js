function sendCode(response) {
  const data = response.data;
  const sendRecoveryPasswordCodeModel = {
    email: data.email,
    code: data.code,
    token: response.headers.authorization,
  };
  return sendRecoveryPasswordCodeModel;
}

export default sendCode;
