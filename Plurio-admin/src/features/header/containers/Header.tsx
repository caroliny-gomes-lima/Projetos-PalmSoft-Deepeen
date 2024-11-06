import React, { ReactElement } from "react";
import Styles from "../styles/Styles";
import MenuIcon from "@material-ui/icons/Menu";
import { CustomText } from "../../../components";
import { fonts, pagesConfig } from "../../../config";
import colors from "../../../config/colors";

type CustomHeaderProps = {
  openMenu: () => void;
  userData: { name: string, type: string }; //integração dos dados do usuário
};

function Header({ openMenu, userData }: CustomHeaderProps) {
  const classes = Styles.useStyles();

  const getCurrentPage = (path) => {
    let currentPage = <></>;

    pagesConfig.logged.map((item) => {
      return item.pages.map((element: any) => {
        if (path === element?.path) {
          currentPage = (
            <div>
              <CustomText
                fontSize={18 / 8}
                fontFamily={fonts.bold}
                textColor="#7A12F5"
                style={{
                  display: "flex",
                  gap: "5px",
                  paddingRight: "8px"
                }}
              >
                {element?.icon && (
                  <element.icon alt="" className={classes.icon} />
                )}
                {element?.title}
              </CustomText>
              <Styles.TextDescript>{element?.description}</Styles.TextDescript>
            </div>
          );
        }
        return element;
      });
    });
    return currentPage;
  };

  return (
    <Styles.Container id="header-menu">
      <Styles.FirstContentGroup>
        <Styles.Rectangle onClick={openMenu}>
          <Styles.IconMenu />
        </Styles.Rectangle>
        {getCurrentPage(location.pathname)}
      </Styles.FirstContentGroup>
      <Styles.UserContentGroup>
        <div className={classes.dot} />
        <div style={{ display: "flex", flexDirection: "column" }} >
          <CustomText
            textColor={colors.darkBlue}
            fontFamily={fonts.semibold}
            fontSize={2}
          >
            {/* integração dos dados do usuário */}
            {userData.name}
          </CustomText>
          <CustomText
            textColor={colors.purple}
            fontFamily={fonts.bold}
            fontSize={1.5}
          >
            {userData.type}
          </CustomText>
        </div>
      </Styles.UserContentGroup>
    </Styles.Container>
  );
}

export default Header;
