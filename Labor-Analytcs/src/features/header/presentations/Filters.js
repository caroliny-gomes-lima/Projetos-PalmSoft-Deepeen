import React from "react";
import { Texts } from "../../../config";
import { ClickAwayListener } from "@material-ui/core";
import { FiltersStyles as Styles } from "../styles";
import { FilterHandler } from "../utils";

function useDidMount() {
  const [visible, setVisible] = React.useState(false);
  const [filters, setFilters] = React.useState(null);
  const context = React.useContext(FilterHandler.Context);
  const filterHandler = context;
  const mount = React.useCallback(() => {
    filterHandler.setFilterControlVisibilityCallback(setVisible);
    filterHandler.setFilterConfigCallback(setFilters);
  }, [setVisible, setFilters, filterHandler]);

  React.useEffect(mount, [mount]);

  return { visible, filters, setVisible };
}

function FiltersPresentation() {
  const { visible, filters, setVisible } = useDidMount();
  const title = Texts["pt-BR"].header.filterTitle;
  return (
    <ClickAwayListener
      mouseEvent="onMouseUp"
      onClickAway={() => {
        if (visible) {
          setVisible(false);
        }
      }}
    >
      <Styles.Container $visible={visible}>
        <Styles.Title>{title}</Styles.Title>
        {filters}
      </Styles.Container>
    </ClickAwayListener>
  );
}

export default React.memo(FiltersPresentation);
