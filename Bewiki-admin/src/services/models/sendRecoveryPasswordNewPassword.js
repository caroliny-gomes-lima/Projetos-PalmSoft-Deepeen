function sendNewPass(response) {
  const data = response.data;
  const sendRecoveryPasswordNewPasswordModel = {
    email: data.email,
    password: data.password,
  };
  return sendRecoveryPasswordNewPasswordModel;
}

export default sendNewPass;
