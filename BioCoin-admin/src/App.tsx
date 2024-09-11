import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StorageContext } from "./contexts/StorageContext";
import pagesConfig from "./config/pagesConfig";
import pages from "./pages/index";
import { Spacing } from "./config";
import { makeStyles } from "@material-ui/core";
import { Header, Menu } from "./features";
import Home from "../src/assets/images/Home.png";
import Login from "../src/assets/images/Login.png";
import { Footer } from "./features/Footer";
import Themes from "./config/theme";

const useStyles = makeStyles((theme: any) => {
  return {
    backGround: {
      width: "100%",
      height: "auto",
      backgroundImage: `url(${Home})`,
      filter: "opacity(50)",
      overflow: "hidden",
    },
    pageContainer: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      overflowY: "hidden",
      overflowX: "hidden",
      gap: 0,
      "&::-webkit-scrollbar": {
        width: "0.4em",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "unset",
      },
    },
    pagePadding: {
      padding: Spacing(3),
      display: "flex",
      width: "100%",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",

      gap: 0,
    },

    backGroundLanding: {
      backgroundImage: `url(${Login})`,
      filter: "opacity(50)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    pageContainerLanding: {
      transition: "1s",
      width: "100%",
      height: "100vh",
    },
    pageLandingContent: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      overflow: "hidden",
    },
    routeContainer: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      flex: 1,
      padding: 0,
      maxWidth: "80vw",
      [Themes.Light.breakpoints.down("md")]: {
        maxWidth: "100vw",
      },
    },
  };
});

interface IUserProps {
  Home: () => Element;
}

function App() {
  const classes = useStyles();
  const { isLogged } = useContext<any>(StorageContext);
  const [menuHeight, setHeight] = React.useState<any>(null);
  const [menu, setMenu] = React.useState<any>(false);

  React.useLayoutEffect(() => {
    if (isLogged && (menuHeight === null || menuHeight === undefined)) {
      const mh = document.getElementById("header-menu");

      setHeight(mh?.offsetHeight);
    }
  }, [menuHeight, isLogged]);

  return isLogged ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div className={classes.backGround}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100vw",
            height: "100vh",
            overflow: "none",
          }}
        >
          <Router basename={process.env.PUBLIC_URL}>
            <Menu openMenu={setMenu} isOpen={menu} />
            <div className={classes.routeContainer}>
              <Header openMenu={() => setMenu(true)} />

              <div
                className={classes.pageContainer}
                style={{
                  height: menuHeight
                    ? `calc(90vh - ${menuHeight}px)`
                    : `calc(90vh - ${Spacing(9.5)}px)`,
                    overflowY: "auto",
                  justifyContent: "space-between",
                  
                }}
              >
          
                  <div className={classes.pagePadding}>
                    <Routes>
                      {pagesConfig.logged.map((item: any, index?: any) => {
                        if (item.pages) {
                          return item.pages.map((page: any, index?: any) => {
                            const Component =
                              pages[page.name as keyof IUserProps];
                            return (
                              <Route
                                key={page.navigationId}
                                path={page.path}
                                element={<Component />}
                              />
                            );
                          });
                        }
                        return null;
                      })}
                    </Routes>
                  </div>
               
              </div>
            </div>
          </Router>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div className={classes.backGroundLanding}>
      <Router basename={process.env.PUBLIC_URL}>
        <div className={classes.pageContainerLanding}>
          <div className={classes.pageLandingContent}>
            <Routes>
              {pagesConfig.notLogged.map((item?: any, index?: any) => {
                const Component = pages[item.name as keyof IUserProps];
                return (
                  <Route
                    key={item.path + index}
                    path={item.path}
                    element={<Component />}
                  />
                );
              })}
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
