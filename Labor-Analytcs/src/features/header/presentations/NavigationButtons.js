import React from "react";
import { connect } from "react-redux";
import { PagesConfig } from "../../../config";
import { navigate } from "../../../navigation/navigate";
import { NavigationButtonsStyles as Styles } from "../styles";
import { FiltersButton } from "../components";
import { StatusButtonNotification } from "../components";
import { Alerts } from "../../../lib";
import { Box, Grid } from "@material-ui/core";

function NavigationButtons({
  pages,
  withFilter,
  pathname,
  showFilters,
  showStausFilters,
}) {
  const goto = (item) => {
    if (item.working === false) {
      Alerts.alertNotImplemented();
    } else {
      navigate(item.path);
    }
  };

  return pages ? (
    <Styles.Container>
      <>
        <Grid container spacing={1} direction="row">
          {withFilter ? (
            <Styles.ButtonContainer>
              <Grid item xs={7} sm={12} md={8} lg={12}>
                <Box display={"flex"} flexDirection={"row"}>
                  <FiltersButton
                    onClick={(event) => {
                      event.stopPropagation();
                      showFilters();
                    }}
                  />
                  <StatusButtonNotification
                    onClick={(event) => {
                      event.stopPropagation();
                      showStausFilters();
                    }}
                  />
                </Box>
              </Grid>
            </Styles.ButtonContainer>
          ) : null}

          <Styles.NavigationContainer>
            {pages.map((item, index) => {
              if (item.showOnHeader === true) {
                const Button =
                  item.path === pathname
                    ? Styles.ButtonContained
                    : Styles.ButtonOutlined;
                return (
                  <Styles.ButtonContainer key={index}>
                    <Grid item xs={10} sm={12} md={12} lg={12}>
                      <Button
                        disabled={!item.working}
                        onClick={() => goto(item)}
                        style={{ height: "45px" }}
                        startIcon={<item.icon />}
                      >
                        {item.title}
                      </Button>
                    </Grid>
                  </Styles.ButtonContainer>
                );
              } else {
                return null;
              }
            })}
          </Styles.NavigationContainer>
        </Grid>
      </>
    </Styles.Container>
  ) : null;
}

function getNavigationPagesAndCheckFilter(item, pathname) {
  let j = 0;
  const jMax = item.pages.length;
  for (; j < jMax; j++) {
    const page = item.pages[j];
    if (pathname === page.path) {
      return { pages: item.pages, withFilter: page.withFilter };
    }
  }
  return { pages: null, withFilter: false };
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
  const { pages, withFilter } = getNavigationGroup(router.location.pathname);
  return {
    pages,
    withFilter,
    pathname: router.location.pathname,
  };
}

export default connect(mapStateToProps)(React.memo(NavigationButtons));
