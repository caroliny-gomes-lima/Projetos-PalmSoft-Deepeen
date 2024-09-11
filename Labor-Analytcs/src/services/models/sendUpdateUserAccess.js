function sendUpdateUserAccess(data) {
  const sendUpdateUserAccessModel = {
    id: data.id,
    name: data.name,
    isAdmin: data.isAdmin,
    email: data.email,
    enable: data.enabled,
    role: data.role,
  };
  return sendUpdateUserAccessModel;
}

export default sendUpdateUserAccess;
