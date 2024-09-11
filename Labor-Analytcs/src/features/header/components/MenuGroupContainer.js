import React from "react";
import MenuGroupWithPages from "./MenuGroupWithPages";
import MenuGroupWithoutPages from "./MenuGroupWithoutPages";
import { PagesConfig } from "../../../config";
import { navigate } from "../../../navigation/navigate";
import { DrawerMenuStyles as Styles } from "../styles";

function MenuGroupContainerComponent({ toggleDrawer }) {
  const lastOne = PagesConfig.logged.length - 1;

  const goto = (item) => {
    navigate(item.path);
    toggleDrawer(false)(null);
  };

  let firstOne = true;
  return (
    <Styles.MenuLinksContainer>
      {PagesConfig.logged.map((item, index) => {
        if (!item.groupTitle) {
          return null;
        }
        const first = firstOne;
        firstOne = false;
        if (item.pages) {
          return item.dontShow ? null : (
            <MenuGroupWithPages
              key={item.groupTitle + index}
              item={item}
              index={index}
              lastOne={lastOne}
              goto={goto}
              firstItem={first}
            />
          );
        } else {
          return item.dontShow ? null : (
            <MenuGroupWithoutPages
              key={item.groupTitle + index}
              item={item}
              lastOne={index === lastOne}
              firstItem={first}
              goto={goto}
            />
          );
        }
      })}
    </Styles.MenuLinksContainer>
  );
}

export default React.memo(MenuGroupContainerComponent);
