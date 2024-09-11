import React from "react";
import { connect } from "react-redux";
import { StatusFilterHandler } from "../utils";
import StatusNotificationTable from "../containers/NotificationStatusTable";
import { CostsFilters } from "../../costs/filters";
import { CapacityFilters } from "../../capacity/filters";
import { prefix } from "../../../navigation/navigate";

import { StatusFiltersStyle as Styles } from "../styles";
import { NotificationImportant } from "@material-ui/icons";
import { Badge, Box } from "@material-ui/core";

function getSatusFilters(pathname) {
  switch (pathname) {
    case prefix + "/productivity":
      return StatusNotificationTable;
    case prefix + "/capacity":
      return CapacityFilters;
    case prefix + "/costs":
      return CostsFilters;
    default:
      return StatusNotificationTable;
  }
}

function StatusFilersComponents(props) {
  const context = React.useContext(StatusFilterHandler.Context);
  const filterStatusHandler = context;
  return (
    <Box ml={1}>
      <Badge
        badgeContent={props.statusProcessFiltersData?.length}
        color="secondary"
      >
        <Styles.IconButton
          {...props}
          onClick={(event) => {
            event.stopPropagation();
            const StatusFilterComponent = getSatusFilters(
              window.location.pathname
            );
            filterStatusHandler.setStatusConfig(
              true,
              <StatusFilterComponent />
            );
          }}
        >
          <NotificationImportant fontSize="default" />
        </Styles.IconButton>
      </Badge>
    </Box>
  );
}
function mapStateToProps(state) {
  const { statusProcessFiltersData, isFetchingFilter } = state.productivity;
  return {
    statusProcessFiltersData,
    isFetchingFilter,
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(StatusFilersComponents));
