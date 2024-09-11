import React from "react";
import Styles from "../styles/Styles";

function MenuGroupWithPagesComponent({
  item,
  index,
  lastOne,
  goto,
  firstItem,
}) {
  const classes = Styles.useStyles();

  return (
    <Styles.Group $firstOne={firstItem} $lastOne={index === lastOne}>
      <Styles.GroupTitleContainer>
        <Styles.GroupNameContainer>
          {item.icon ? <item.icon className={classes.icon} /> : null}
          <Styles.GroupTitle>{item.groupTitle}</Styles.GroupTitle>
        </Styles.GroupNameContainer>
      </Styles.GroupTitleContainer>
      <Styles.SubGroup>
        {item.pages.map((page, pageIndex) => {
          return page.dontShow ? null : (
            <Styles.Page
              $disabled={!page.working}
              onClick={page.working ? () => goto(page) : null}
              key={page.title + pageIndex}
            >
              {page.icon ? <page.icon className={classes.icon} /> : null}
              {page.subicon ? (
                <page.subicon className={classes.subicon} />
              ) : null}
              {page.title}
            </Styles.Page>
          );
        })}
      </Styles.SubGroup>
    </Styles.Group>
  );
}

export default React.memo(MenuGroupWithPagesComponent);
