import React from "react";

class FilterHandler {
  static Context = React.createContext(null);

  filterControlVisibility = null; // TODO/HINT expect function callback
  filterConfigCallback = null; // TODO/HINT expect function callback

  setFilterControlVisibilityCallback = (filterControlVisibilityCallback) => {
    this.filterControlVisibility = filterControlVisibilityCallback;
  };

  setFilterConfigCallback = (filterConfigCallback) => {
    this.filterConfigCallback = filterConfigCallback;
  };

  setFilterConfig = (visible = false, filterConfig) => {
    this.filterConfigCallback(filterConfig);
    this.filterControlVisibility(visible);
  };

  hideFilter = () => {
    this.filterControlVisibility(false);
  };
}

export default FilterHandler;
