//Botões sem grupos do menu lateral (ex: relatorios, mpa da unidade, etc...)
import React from "react";
import { DrawerMenuStyles as Styles } from "../styles";

function MenuGroupContainerComponent({ item, lastOne, firstItem, goto }) {
  const classes = Styles.useStyles();

  return (
    <Styles.Group $firstOne={firstItem} $lastOne={lastOne} $withoutPadding>
      <Styles.GroupTitleContainer>
        <Styles.GroupNameContainer
          onClick={item.working ? () => goto(item) : null}
        >
          {item.icon ? <item.icon className={classes.icon} /> : null}
          <Styles.GroupTitle>
            {item.groupTitle.toLocaleUpperCase()}
          </Styles.GroupTitle>
        </Styles.GroupNameContainer>
      </Styles.GroupTitleContainer>
    </Styles.Group>
  );
}

export default React.memo(MenuGroupContainerComponent);
