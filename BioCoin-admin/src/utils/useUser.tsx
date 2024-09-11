import React from "react";
import { StorageContext } from "../contexts/StorageContext";
import hooks from "./hooks";
import { api } from "../services";

export default function useUser() {
  const { call } = hooks.useRequest();
  const { isLogged, getData, addData } = React.useContext<any>(StorageContext);

  const updateUser = (user, image?) => {
    addData("userData", {
      ...userData,
      ...user,
      image: image || userData?.image,
    });
  };

  const userData = isLogged ? getData("userData") : null;
  React.useEffect(() => {
    if (!userData) {
      call(null, api.GetUser(), (data) => {
        if (data.ok) {
          if (data.data.imageId) {
            call(null, api.GetUserProfileImage(), (response) => {
              addData("userData", {
                ...data?.data,
                image: response?.data,
              });
            });
          } else {
            addData("userData", {
              ...data?.data,
              image: null,
            });
          }
        }
      });
    }
  }, [userData]);

  return {
    userData,
    updateUser,
  };
}
