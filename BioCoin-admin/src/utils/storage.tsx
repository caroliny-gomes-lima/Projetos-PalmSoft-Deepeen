export const getView = () => localStorage.getItem("view");
export const isCustomerView = () =>
  localStorage.getItem("view") === "customer_view";
export const isUserView = () => localStorage.getItem("view") === "user_view";
export const setView = (isCustomer?: any) =>
  localStorage.setItem("view", isCustomer ? "customer_view" : "user_view");
