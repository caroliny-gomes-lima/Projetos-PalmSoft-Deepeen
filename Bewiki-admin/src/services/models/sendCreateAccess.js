function sendCreateAccess(data) {
  const sendCreateAccessModel = {
    password: data.password,
    name: data.name,
    isAdmin: data.isAdmin ? data.isAdmin : false,
    email: data.email,
    role: 1,
  };
  return sendCreateAccessModel;
}

export default sendCreateAccess;
