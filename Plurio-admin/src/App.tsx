import React, { useContext } from "react";
import "./App.css";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { StorageContext } from "./contexts/StorageContext";
import pagesConfig from "./config/pagesConfig";
import pages from "./pages/index";
import { Spacing, Theme } from "./config";
import { makeStyles } from "@material-ui/core";
import { Header, Menu } from "./features";

const useStyles = makeStyles((theme: any) => {
  return {
    pageContainer: {
      backgroundColor: "#F1F5FF",
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      flex: 1,
      padding: 0,
      maxWidth: "80vw",
      height: "90vw",
      backgroundSize: "cover",
      backgroundPosition: "bottom",

      [Theme.Light.breakpoints.down("xl")]: {
        maxWidth: "80vw",
      },

      [Theme.Light.breakpoints.down("md")]: {
        maxWidth: "100vw",
      },
    },
    pageContainerLanding: {
      display: "flex",
      width: "100%",

      flexDirection: "column",

      justifyContent: "flex-start",
      alignItems: "flex-start",
      overflowY: "auto",
      overflowX: "hidden",

      backgroundColor: "#F1F5FF",
    },
    paddingContainer: {
      padding: Spacing(3),

    },
  };
});

interface IUserProps {
  Home: () => Element;
}

function App() {
  const location = useLocation();
  const classes = useStyles();
  const { isLogged, cancelToken } = useContext<any>(StorageContext);
  const [menuHeight, setHeight] = React.useState<any>(null);
  const [menu, setMenu] = React.useState<any>(false);

  const MOCK_DATA = { name: "Leandro Bittencourt", type: "ADMIN" };

  React.useLayoutEffect(() => {
    if (!menuHeight) {
      const mh = document.getElementById("header-menu")?.offsetHeight;

      const fh = document.getElementById("footer")?.offsetHeight;
      let totalH = 0;
      if (mh) {
        totalH += mh;
      }
      if (fh) {
        totalH += fh;
      }

      setHeight(totalH);
    }
  }, [menuHeight]);

  React.useEffect(() => {
    cancelToken.cancel();
  }, [location.pathname]);

  //Tirar o ! antes caso servíço de login estiver funcionando-----------
  return !isLogged ? (
    <>
      <div
        style={{
          transition: "1s",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Menu openMenu={setMenu} isOpen={menu} />
        <div className={classes.pageContainer}>
          <Header userData={MOCK_DATA} openMenu={() => setMenu(true)} />
          <div
            className={classes.paddingContainer}
            style={{
              height: menuHeight
                ? `calc(100vh - ${menuHeight}px)`
                : `calc(100vh - ${Spacing(17.25)}px)`,
            }}
          >
            <Routes>
              {pagesConfig.logged.map((item: any, index?: any) => {
                if (item.pages) {
                  return item.pages.map((page: any, index?: any) => {
                    const Component = pages[page.name as keyof IUserProps];
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
    </>
  ) : (
    <div className={classes.pageContainerLanding}>
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
    </div>
  );
}

export default App;
