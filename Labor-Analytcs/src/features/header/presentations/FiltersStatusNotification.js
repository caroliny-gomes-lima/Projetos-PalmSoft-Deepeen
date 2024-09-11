import React from "react";
import { StatusFilterHandler } from "../utils";
import { ClickAwayListener } from "@material-ui/core";
import { StatusFiltersStyle as Styles } from "../styles";

function useDidMount() {
  const [visible, setVisible] = React.useState(false);
  const [statusFilters, setStatusFilters] = React.useState(null);
  const context = React.useContext(StatusFilterHandler.Context);
  const filterStatusHandler = context;
  const mount = React.useCallback(() => {
    filterStatusHandler.setStatusControlVisibilityCallBack(setVisible);
    filterStatusHandler.setStatusConfigCallBack(setStatusFilters);
  }, [setVisible, setStatusFilters, filterStatusHandler]);

  React.useEffect(mount, [mount]);

  return { visible, statusFilters, setVisible };
}

function StatusPresentation() {
  const { visible, statusFilters, setVisible } = useDidMount();
  return (
    <ClickAwayListener
      mouseEvent="onMouseUp"
      onClickAway={() => {
        if (visible) {
          setVisible(false);
        }
      }}
    >
      <Styles.Container $visible={visible}>{statusFilters}</Styles.Container>
    </ClickAwayListener>
  );
}

export default React.memo(StatusPresentation);
