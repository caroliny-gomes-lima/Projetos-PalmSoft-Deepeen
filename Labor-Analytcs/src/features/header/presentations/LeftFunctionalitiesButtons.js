import React from "react";
import { connect } from "react-redux";
import { Texts } from "../../../config";
import { RightFunctionalitiesButtonsStyles as Styles } from "../styles";
import { Creators as GlobalCreators } from "../../globalReduxSagas";
import { Settings, MeetingRoom } from "@material-ui/icons";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { customModal } from "../../modals/utils";
import { navigateTo } from "../../../navigation/navigate";

function LeftFunctionalitiesButtonsPresentation(props) {
  const texts = Texts["pt-BR"].header;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function confirmLogout() {
    customModal.setInfos(
      texts.exit,
      [texts.exitConfirmationText],
      {
        label: texts.exitConfirmation,
        onClick: () => {
          props.globalLogout();
          customModal.close();
        },
      },
      { label: texts.exitDeny, onClick: customModal.close }
    );
  }

  return (
    <>
      <Styles.ButtonsContainer>
        <Styles.ButtonContainedExit
          size="small"
          fullWidth={false}
          startIcon={<MeetingRoom />}
          onClick={confirmLogout}
        >
          {texts.exit}
        </Styles.ButtonContainedExit>
      </Styles.ButtonsContainer>
      <Styles.IconButtonsContainer>
        <IconButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Settings />
        </IconButton>
      </Styles.IconButtonsContainer>

      <Styles.IconExitButtonsContainer>
        <IconButton onClick={confirmLogout}>
          <MeetingRoom />
        </IconButton>
      </Styles.IconExitButtonsContainer>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        keepMounted
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          {texts.settingsOptions.integration}
        </MenuItem>
        <MenuItem onClick={() => navigateTo["UserRegister"]()}>
          {texts.settingsOptions.users}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {texts.settingsOptions.permissions}
        </MenuItem>
        <MenuItem onClick={() => navigateTo["ChangePassword"]()}>
          {texts.settingsOptions.changePassword}
        </MenuItem>
      </Menu>
    </>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  const { globalLogout } = GlobalCreators;
  return {
    globalLogout: function () {
      return dispatch(globalLogout());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(LeftFunctionalitiesButtonsPresentation));
