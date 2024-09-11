import React from "react";
import Styles from "../styles/Styles";
import { connect } from "react-redux";
import { PagesConfig } from "../../../config";
import { navigate } from "../../../navigation/navigate";
import { Grid, Hidden } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Badge } from "@material-ui/core";

function PageGuide({ pages, pathname, IconVertical, children, NewRequest }) {
  const classes = Styles.useStyles();
  const newRequest = null;
  const [showNavigation, setShowNavigation] = React.useState(false);
  const goto = (item) => {
    navigate(item.path);
  };

  const drawNavButtons = pages ? (
    <>
      {pages.map((item, index) => {
        if (item.showOnsubMenu === true) {
          const Button =
            item.path === pathname
              ? Styles.ButtonContained
              : Styles.ButtonOutlined;
          return (
            <Styles.ButtonContainer key={index}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Button onClick={() => goto(item)} style={{ height: "45px" }}>
                  {item.title}
                  {newRequest ? (
                    <Styles.NotificationContainer>
                      <Badge color="secondary" variant="dot">
                        <Styles.NotificationIcon />
                      </Badge>
                      <Styles.NotificationValue>
                        + {newRequest}
                      </Styles.NotificationValue>
                    </Styles.NotificationContainer>
                  ) : null}
                  <Hidden xsDown implementation="css">
                    <ChevronRightIcon />
                  </Hidden>
                </Button>
              </Grid>
            </Styles.ButtonContainer>
          );
        } else {
          return null;
        }
      })}
    </>
  ) : null;

  return (
    <Styles.ScrollContainer>
      <Styles.Container>
        <Grid container spacing={1} direction="row" justify="flex-start">
          <Grid item xs={12} sm={12} md={3} lg={3}>
            {pages ? (
              <Hidden smUp implementation="css">
                <Styles.CardNavigation $defaultPadding $defaultMargin>
                  <Styles.HeaderCardNavigation>
                    <IconVertical className={classes.icon} />
                    <Styles.MenuTitleButton
                      aria-label="menu"
                      onClick={() => setShowNavigation((open) => !open)}
                    >
                      {pages.map((item) => {
                        const pageName =
                          item.path === pathname ? item.title : null;
                        return <>{pageName}</>;
                      })}

                      <Styles.IconExpandMore />
                    </Styles.MenuTitleButton>
                  </Styles.HeaderCardNavigation>
                  {showNavigation ? <>{drawNavButtons}</> : null}
                </Styles.CardNavigation>
              </Hidden>
            ) : null}

            {pages ? (
              <Hidden xsDown implementation="css">
                <Styles.CardNavigation>
                  <IconVertical className={classes.icon} />
                  <Styles.Line />
                  {drawNavButtons}
                </Styles.CardNavigation>
              </Hidden>
            ) : null}
          </Grid>
          {children}
        </Grid>
      </Styles.Container>
    </Styles.ScrollContainer>
  );
}

function getNavigationPagesAndCheckFilter(item, pathname) {
  let j = 0;
  const jMax = item.pages.length;
  for (; j < jMax; j++) {
    const page = item.pages[j];
    let result = null;
    if (page.subPage) {
      for (let index = 0; index < page.subPage.length; index++) {
        if (pathname === page.subPage[index].path) {
          result = {
            pages: page.subPage,
            IconVertical: page.subicon,
          };
          return result;
        }
      }
    }
  }
  return {
    pages: null,
    IconVertical: null,
  };
}

function getNavigationGroup(pathname) {
  const items = PagesConfig.logged;
  let i = 0;
  const iMax = items.length;
  let result = null;
  for (; i < iMax; i++) {
    const item = items[i];
    if (item.groupTitle && item.pages) {
      result = getNavigationPagesAndCheckFilter(item, pathname);
    }
    if (result?.pages) {
      break;
    }
  }
  return result;
}
function mapStateToProps({ router }) {
  const { pages, IconVertical } = getNavigationGroup(router.location.pathname);
  return {
    pages,
    IconVertical,
    pathname: router.location.pathname,
  };
}

export default connect(mapStateToProps)(React.memo(PageGuide));
