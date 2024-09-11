import React from "react";
import { Switch, Route } from "react-router-dom";
import { PagesConfig } from "../config";
import Pages from "../pages";
import { Creators as globalCreators } from "../features/globalReduxSagas";
import { connect } from "react-redux";
import { Styles } from "./styles";
import { Menu, PageGuide, Header } from "../features";
function Routes({ isLoggedIn, isFetching, getStatus, pathname }) {
  const mount = React.useCallback(() => {
    getStatus();
  }, [getStatus]);
  React.useEffect(mount, [mount]);

  const [isOpen, openMenu] = React.useState(false);

  return isLoggedIn ? (
    <Styles.InitialBackground $didMount={!isFetching}>
      <Menu isOpen={isOpen} openMenu={openMenu} />
      <Styles.LoggedContainer id="scroll-container">
        <Header isOpen={isOpen} openMenu={() => openMenu(!isOpen)} />
        <Switch>
          {PagesConfig.logged.map((item, index) => {
            if (item.pages) {
              return item.pages.map((page, index) => {
                const Component = Pages[page.name];
                return (
                  <Route
                    key={page.navigationId}
                    exact={true}
                    path={page.path}
                    component={() => (
                      <PageGuide>
                        <Component />
                      </PageGuide>
                    )}
                  />
                );
              });
            }
            return null;
          })}
        </Switch>
      </Styles.LoggedContainer>
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
