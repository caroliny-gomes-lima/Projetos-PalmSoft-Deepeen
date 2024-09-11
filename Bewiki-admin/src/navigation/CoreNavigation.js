import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../store";

import { Modal, ModalError } from "../features";
import { Box } from "@material-ui/core";

import Routes from "./Routes";

function CoreNavigation() {
  return (
    <ConnectedRouter history={history}>
      <Box bgcolor="background.default" height="100%" overflow="hidden">
        <Routes />
      </Box>
      <Modal />
      <ModalError />
    </ConnectedRouter>
  );
}

export default React.memo(CoreNavigation);
