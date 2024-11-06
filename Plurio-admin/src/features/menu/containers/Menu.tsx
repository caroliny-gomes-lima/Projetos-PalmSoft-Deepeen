import React from "react";
import Styles from "../styles/Styles";
import Drawer from "@material-ui/core/Drawer";
import { CircularProgress, IconButton, makeStyles } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { CustomText, DefaultLogo } from "../../../components";
import { Colors, fonts, pagesConfig, Spacing, SVG } from "../../../config";
import styled from "styled-components";
import { MenuGroupWithPages } from "../components";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawerPaper: {
    borderRight: "none",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  iconStyle: {
    width: "12px",
    height: "12px",
    marginLeft: "2px",
    marginRight: "2px",
    fill: "white",
  },
  footer: {
    width: "100%",
    justifyContent: "space-around",
    display: "flex",
  },
}));

function Menu({ openMenu, isOpen }) {
  const classes = useStyles();
  const drawer = (
    <>
      <Styles.Container>
        <Styles.ScrollContainer>
          <Styles.Header>
            <DefaultLogo white maxWidth={Spacing(14)} />
          </Styles.Header>

          {pagesConfig ? (
            pagesConfig.logged?.map((item, index) => (
              <MenuGroupWithPages
                key={item.groupTitle + index}
                headerName={item.groupTitle}
                item={item.pages}
                firstItem={index === 0}
              />
            ))
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
        <div className={classes.footer}>
          <CustomText
            fontSize={1.2}
            fontFamily={fonts.light}
            textColor={Colors.white}
            style={{
              paddingBlock: Spacing(1),
            }}
          >

            {"Plurio Web Admin"}<SVG.copyrightIcon className={classes.iconStyle} />{"2024"}
          </CustomText>

          <CustomText
            fontSize={1.2}
            fontFamily={fonts.light}
            textColor={Colors.white}
            style={{
              paddingBlock: Spacing(1),
            }}
          >
            {process.env.REACT_APP_ENV + " v"}
            {process.env.REACT_APP_VERSION}
          </CustomText>
        </div>
      </Styles.Container>
    </>
  );

  const MyHidden = styled(Hidden)(() => {
    return {};
  });

  return (
    <Styles.ShowQuery>
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
        <MyHidden mdDown implementation="css">
          <Drawer
            anchor={"left"}
            variant="permanent"
            open
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </MyHidden>
      </nav>
    </Styles.ShowQuery>
  );
}

export default Menu;
