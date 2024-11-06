import React from "react";
import { StorageContext } from "../contexts/StorageContext";
import alerts from "./alerts";
import ResponseError from "../services/helpers/ResponseError";
import errorStatusMessage from "../services/helpers/errorStatusMessage";

function useStateCallback(initialState?: any) {
  const [state, setState] = React.useState<any>(initialState);
  const cbRef = React.useRef<any>(null); // mutable ref to store current callback

  const setStateCallback = React.useCallback((state?: any, cb?: any) => {
    cbRef.current = cb; // store passed callback to ref
    setState(state);
  }, []);

  React.useEffect(() => {
    // cb.current is `null` on initial render, so we only execute cb on state *updates*
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null; // reset callback after execution
    }
  }, [state]);

  return [state, setStateCallback];
}

function useConstructor(onBuilding?: any) {
  const created = React.useRef<any>(false);
  if (!created?.current) {
    created.current = true;
    onBuilding();
  }
}

function useMount(onMount?: any, onUnmount?: any) {
  const mounted = React.useRef(false);
  React.useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      onMount();
      return onUnmount;
    }
  }, [onMount, onUnmount, mounted]);
}

function useRequest() {
  const [loading, setLoading] = React.useState(false);
  const storage = React.useContext<any>(StorageContext);

  async function call(storageKey: string | null, apiRequest: any, callback: (response: any) => void, customError?: (response: any) => void) {
    setLoading(true);
    const response = await apiRequest;
    setLoading(false);

    if (response) {
      if (storageKey) {
        storage.addData(storageKey, response);
      }
      if (callback) {
        callback(response);
      }
      if (!response.ok) {
        if (customError) {
          customError(response);
        } else {
          const errorResponse = new ResponseError(response);

          if (errorResponse.message) {
            alerts.alertError(errorResponse.message);
          } else {
            const errorMsg = errorStatusMessage(response);
            alerts.alertError(errorMsg);
          }
        }
      }
    }
    return response;
  }

  return { loading, call };
}

const hooks = {
  useStateCallback,
  useMount,
  useConstructor,
  useRequest,
};
export default hooks;
