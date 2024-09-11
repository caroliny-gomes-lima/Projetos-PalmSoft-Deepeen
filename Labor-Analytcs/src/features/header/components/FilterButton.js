import React from "react";
import { FiltersStyles as Styles } from "../styles";
import { FilterVariant } from "../../../config/icons";
import { Texts } from "../../../config";
import { FilterHandler } from "../utils";
import { ProductivityFilters } from "../../productivity/filters";
import { CostsFilters } from "../../costs/filters";
import { CapacityFilters } from "../../capacity/filters";
import { prefix } from "../../../navigation/navigate";

function getFilters(pathname) {
  switch (pathname) {
    case prefix + "/productivity":
      return ProductivityFilters;
    case prefix + "/capacity":
      return CapacityFilters;
    case prefix + "/costs":
      return CostsFilters;
    default:
      return ProductivityFilters;
  }
}

function FiltersComponents(props) {
  const context = React.useContext(FilterHandler.Context);
  const filterHandler = context;

  const title = Texts["pt-BR"].header.filterButton;
  return (
    <Styles.ButtonOutlined
      {...props}
      startIcon={<FilterVariant />}
      onClick={(event) => {
        event.stopPropagation();
        // TODO/HINT
        /*
         * pegar pelo redux a página navegada e mostrar os filtros de acordo.
         * no momento estão fixos os filtros de "produtividade"
         */
        const FilterComponent = getFilters(window.location.pathname);
        filterHandler.setFilterConfig(true, <FilterComponent />);
      }}
    >
      {title}
    </Styles.ButtonOutlined>
  );
}

export default React.memo(FiltersComponents);
