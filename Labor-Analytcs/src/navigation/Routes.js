import React from "react";
import { Switch, Route } from "react-router-dom";
import { PagesConfig } from "../config";
import Pages from "../pages";
import { Creators as globalCreators } from "../features/globalReduxSagas";
import { connect } from "react-redux";
import { Header } from "../features";
import { Styles } from "./styles";
import { FilterHandler } from "../features/header/utils";
import { StatusFilterHandler } from "../features/header/utils"; //coloquei aqui

import PageError404 from "../pages/PageError404";

const filterHandler = new FilterHandler();
const statusFilterHandler = new StatusFilterHandler();

function Routes({ isLoggedIn, isFetching, getStatus }) {
  const mount = React.useCallback(() => {
    getStatus();
  }, [getStatus]);

  React.useEffect(mount, [mount]);
  return isLoggedIn ? (
    <Styles.InitialBackground $didMount={!isFetching}>
      <StatusFilterHandler.Context.Provider value={statusFilterHandler}>
        <FilterHandler.Context.Provider value={filterHandler}>
          <Header />
          <Styles.LoggedContainer id="scroll-container">
            <Styles.Container $maxWidth="xxl">
              <Switch>
                {PagesConfig.logged.map((item, index) => {
                  if (item.pages) {
                    return item.pages.map((page, index) => {
                      const Component = Pages[page.name];
                      return (
                        <Route
                          key={page.path + index}
                          exact={true}
                          path={page.path}
                          component={() => <Component />}
                        />
                      );
                    });
                  } else {
                    const Component = Pages[item.name];
                    return Component ? (
                      <Route
                        key={item.path + index}
                        exact={true}
                        path={item.path}
                        component={() => <Component />}
                      />
                    ) : (
                      <PageError404 />
                    );
                  }
                })}
              </Switch>
            </Styles.Container>
          </Styles.LoggedContainer>
        </FilterHandler.Context.Provider>
      </StatusFilterHandler.Context.Provider>
    </Styles.InitialBackground>
  ) : (
    <Styles.InitialBackground $didMount={!isFetching}>
      <Switch>
        {PagesConfig.notLogged.map((item, index) => (
          <Route
            key={item.path + index}
            exact={true}
            path={item.path}
            component={Pages[item.name]}
          />
        ))}
      </Switch>
    </Styles.InitialBackground>
  );
}

function mapStateToProps({ global, router }) {
  const { isLoggedIn, isFetching } = global;
  const { pathname } = router.location;
  return {
    isLoggedIn,
    pathname,
    isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  const { getGlobalStatus } = globalCreators;
  return {
    getStatus: () => dispatch(getGlobalStatus()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Routes));
