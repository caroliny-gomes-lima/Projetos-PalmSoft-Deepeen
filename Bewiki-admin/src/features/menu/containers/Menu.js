import React from "react";
import Styles from "../styles/Styles";
import { connect } from "react-redux";
import { PagesConfig } from "../../../config";
import { MenuGroupWithPages } from "../components";
import { navigate } from "../../../navigation/navigate";
import { Close, MeetingRoom } from "@material-ui/icons/";
import { errorModal } from "../../../features/modals/utils";
import { Texts } from "../../../config";
import { Creators as GlobalCreators } from "../../globalReduxSagas";
import { Drawer, Grid, Hidden, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawerPaper: {
    borderRihgt: "none",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Menu({ openMenu, isOpen }, props) {
  const lastOne = PagesConfig.logged.length - 1;
  const texts = Texts["pt-BR"].header;
  const { window } = props;
  const classes = useStyles();
  let firstOne = true;

  const goto = (item) => {
    navigate(item.path);
    handleDrawerClose();
  };

  function handleLogout() {
    errorModal.setInfos(
      texts.exit,
      texts.exitConfirmationText,
      {
        label: texts.exitConfirmation,
        onClick: () => {
          errorModal.close();
          props.globalLogout();
        },
      },
      {
        label: texts.exitDeny,
        onClick: () => {
          errorModal.close();
        },
      }
    );
  }

  const handleDrawerClose = () => {
    openMenu(false);
  };

  const drawer = (
    <Styles.Container>
      <Styles.FirstContentGroup>
        <Grid item xs={2} sm={2} md={2} lg={1}>
          <Styles.Logo />
          <Styles.SubLogo>ADMIN</Styles.SubLogo>
        </Grid>

        <Styles.CloseMenuButton onClick={handleDrawerClose}>
          <Close />
        </Styles.CloseMenuButton>
      </Styles.FirstContentGroup>
      <Styles.Line />
      <Styles.ScrollContainer>
        {PagesConfig.logged.map((item, index) => {
          const first = firstOne;
          firstOne = false;
          if (!item.groupTitle) {
            return null;
          }
          if (item.pages) {
            return (
              <MenuGroupWithPages
                key={item.groupTitle + index}
                item={item}
                index={index}
                lastOne={lastOne}
                goto={goto}
                firstItem={first}
              />
            );
          }
          return {};
        })}
        <Styles.Group>
          <Styles.GroupTitleContainer>
            <Styles.GroupNameContainer>
              <Styles.GroupTitle>SISTEMA</Styles.GroupTitle>
            </Styles.GroupNameContainer>
          </Styles.GroupTitleContainer>
          <Styles.SubGroup>
            <Styles.Page
              $disabled={false}
              onClick={() => handleLogout()}
              key={0}
            >
              <MeetingRoom className={classes.icon} /> Sair
            </Styles.Page>
          </Styles.SubGroup>
        </Styles.Group>
      </Styles.ScrollContainer>
    </Styles.Container>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Styles.ShowQuery>
      <nav lassName={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={"left"}
            open={isOpen}
            onClose={openMenu}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            anchor="left"
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </Styles.ShowQuery>
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

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Menu));
