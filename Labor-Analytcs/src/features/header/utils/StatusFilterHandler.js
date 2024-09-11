import React from "react";

class StatusFilterHandler {
  static Context = React.createContext(null);

  StatusCotrolVisibility = null;
  StatusConfig = null;

  setStatusControlVisibilityCallBack = (StatusControlVisibilityCallback) => {
    this.StatusCotrolVisibility = StatusControlVisibilityCallback;
  };

  setStatusConfigCallBack = (StatusConfigCallback) => {
    this.StatusConfig = StatusConfigCallback;
  };

  setStatusConfig = (Visible = false, statusFilterConfig) => {
    this.StatusConfig(statusFilterConfig);
    this.StatusCotrolVisibility(Visible);
  };

  hideStatusFilter = () => {
    this.StatusCotrolVisibility(false);
  };
}

export default StatusFilterHandler;
