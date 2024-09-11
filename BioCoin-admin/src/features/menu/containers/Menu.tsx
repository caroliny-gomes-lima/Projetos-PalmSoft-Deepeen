import React, { useContext } from "react";
import Styles from "../styles/Styles";
import Drawer from "@material-ui/core/Drawer";
import {
  CircularProgress,
  Grid,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { ButtonContained, CustomText, DefaultLogo } from "../../../components";
import { Colors, fonts, pagesConfig, Spacing, Texts } from "../../../config";
import styled from "styled-components";
import { MenuGroupWithPages } from "../components";
import { Close, ExitToApp } from "@material-ui/icons";
import { paths } from "../../../navigation/navigate";
import { useLocation, useNavigate } from "react-router-dom";
import { SessionStorage } from "../../../utils";
import { StorageContext } from "../../../contexts/StorageContext";
import { customModal } from "../../../components/modals/utils";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawerPaper: {
    //width: "auto",
    borderRight: "none",
    backgroundColor: "rgba(255,255,255, 0.94)",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Menu({ openMenu, isOpen }) {
  const { setIsLogged } = useContext<any>(StorageContext);
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogout() {
    const texts = Texts["pt-BR"].login.ModalLogout;
    customModal.setInfos(
      texts.title,
      [""],
      {
        label: texts.Confirm,
        onClick: () => {
          customModal.close();
          setIsLogged(false);
          SessionStorage.removeItem("token");
          SessionStorage.removeItem("data");
          navigate(paths.login);
        },
      },
      {
        label: texts.cancel,
        onClick: () => {
          customModal.close();
        },
      },
      null,
      null,
      null
    );
  }

  const drawer = (
    <>
      <Styles.Container>
        <Styles.ScrollContainer>
          <Styles.Header>
            <DefaultLogo maxWidth={Spacing(5)} />
            <IconButton size="small" onClick={() => openMenu(!isOpen)}>
              <Close color="secondary" />
            </IconButton>
          </Styles.Header>

          {pagesConfig ? (
            <>
              {pagesConfig?.logged?.map((item, index) => {
                return !item.showOnMenu ? null : (
                  <MenuGroupWithPages
                    key={item.nameGroup + index}
                    headerName={item.nameGroup}
                    item={item.pages}
                    firstItem={index === 0}
                    pathname={location.pathname}
                    isOpen={isOpen}
                    openMenu={openMenu}
                  />
                );
              })}
            </>
          ) : (
            <div
              style={{
                width: "96%",
                marginTop: "10%",
                justifyContent: "center",
                alignContent: "center",
                display: "flex",
              }}
            >
              <CircularProgress color="secondary" />
            </div>
          )}
        </Styles.ScrollContainer>
        {/* <Styles.LogoutArea>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ButtonContained
              customColor={Colors.black}
              startIcon={<ExitToApp />}
              label="Sair"
              onClick={handleLogout}
            />
          </Grid>
        </Styles.LogoutArea> */}
        <CustomText
          fontSize={1.5}
          fontFamily={fonts.medium}
          textColor={Colors.darkGray}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: Spacing(0),
            paddingBottom: Spacing(1),
          }}
        >
          {process.env.REACT_APP_ENV + " v"}
          {process.env.REACT_APP_VERSION}
        </CustomText>
      </Styles.Container>
    </>
  );

  const MyHidden = styled(Hidden)(() => {
    return {};
  });

  return (
    <>
      <Styles.WebMenu>
        <Styles.Container>

            <Styles.Header>
              <DefaultLogo maxWidth={Spacing(5)} />
            </Styles.Header>
            <Styles.ScrollContainer>
            {pagesConfig ? (
              <>
                {pagesConfig?.logged?.map((item, index) => {
                  return !item.showOnMenu ? null : (
                    <MenuGroupWithPages
                      noAuto
                      key={item.nameGroup + index}
                      headerName={item.nameGroup}
                      item={item.pages}
                      firstItem={index === 0}
                      pathname={location.pathname}
                      isOpen={isOpen}
                      openMenu={openMenu}
                    />
                  );
                })}
              </>
            ) : (
              <div
                style={{
                  width: "96%",
                  marginTop: "10%",
                  justifyContent: "center",
                  alignContent: "center",
                  display: "flex",
                }}
              >
                <CircularProgress color="secondary" />
              </div>
            )}
          </Styles.ScrollContainer>
          {/* <Styles.LogoutArea>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ButtonContained
              customColor={Colors.black}
              startIcon={<ExitToApp />}
              label="Sair"
              onClick={handleLogout}
            />
          </Grid>
        </Styles.LogoutArea> */}
          <CustomText
            fontSize={1.5}
            fontFamily={fonts.medium}
            textColor={Colors.darkGray}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: Spacing(0),
              paddingBottom: Spacing(1),
            }}
          >
            {process.env.REACT_APP_ENV + " v"}
            {process.env.REACT_APP_VERSION}
          </CustomText>
        </Styles.Container>
      </Styles.WebMenu>
      <Styles.MobileMenu>
        <nav aria-label="mailbox folders">
          <MyHidden smUp={true} implementation="css">
            <Drawer
              variant="temporary"
              anchor={"left"}
              open={isOpen}
              onClose={() => openMenu(!isOpen)}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </MyHidden>
        </nav>
      </Styles.MobileMenu>{" "}
    </>
  );
}

export default Menu;
