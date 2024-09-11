import React, { useState, useEffect } from "react";
import { createContext } from "react";


import { SessionStorage } from "../utils";

export const StorageContext = createContext({});

export default function StorageProvider({ children }: any): JSX.Element {
  const [data, setData] = useState<any>({});
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    const token = SessionStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    }
  }, [setIsLogged]);

  function logOut() {
    removeData("token");
    SessionStorage.removeItem("token");

    setIsLogged(false);
  }

  function addData(key?: any, value?: any) {
    setData((state?: any) => ({ ...state, [key]: value }));
  }

  function removeData(key?: any) {
    setData((state?: any) => {
      const newState = state;
      delete newState[key];
      return newState;
    });
  }

  function getData(key?: any) {
    return data[key];
  }

  return (
    <StorageContext.Provider
      value={{
        addData,
        removeData,
        getData,
        isLogged,
        setIsLogged,
        logOut,
      }}>
      {children}
    </StorageContext.Provider>
  );
}
