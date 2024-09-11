//Botões com grupos do menu lateral (ex: SetUp, DashBoard, Liberação de Acessos etc...)

import React from "react";
import { DrawerMenuStyles as Styles } from "../styles";

function MenuGroupWithPagesComponent({
  item,
  index,
  lastOne,
  goto,
  firstItem,
}) {
  const classes = Styles.useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <Styles.Group
      $firstOne={firstItem}
      $lastOne={index === lastOne}
      $withoutPadding={!open}
    >
      <Styles.GroupTitleContainer onClick={() => setOpen(!open)}>
        <Styles.GroupNameContainer>
          {item.icon ? <item.icon className={classes.icon} /> : null}
          <Styles.GroupTitle>{item.groupTitle}</Styles.GroupTitle>
        </Styles.GroupNameContainer>
        <Styles.StyledChevronDown $open={open} />
      </Styles.GroupTitleContainer>
      <Styles.HideGroup $open={open}>
        {item.pages.map((page, pageIndex) => {
          return page.dontShow ? null : (
            <Styles.Page
              $disabled={!page.working}
              onClick={page.working ? () => goto(page) : null}
              key={page.title + pageIndex}
            >
              <Styles.DotStyle>•</Styles.DotStyle> {page.title}
            </Styles.Page>
          );
        })}
      </Styles.HideGroup>
    </Styles.Group>
  );
}

export default React.memo(MenuGroupWithPagesComponent);
