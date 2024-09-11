import React from "react";
import Styles from "../styles/Styles";
import { customModal } from "../../../components/modals/utils";
import { useNavigate } from "react-router-dom";

type CustomMenuGroupProps = {
  item: any;
  firstItem: boolean;
  headerName: string;
  pathname: string;
  isOpen: any;
  openMenu: any;
  noAuto?: boolean;
};

function MenuGroupWithPagesComponent({
  item,
  pathname,
  isOpen,
  openMenu,
  noAuto,
}: CustomMenuGroupProps) {
  const navigate = useNavigate();

  const goto = (page: any, pageTitle: string) => {
    let link;
    if (!page.isWorking === false) {
      if (!noAuto) {
        openMenu(!isOpen);
      }

      navigate(page.path);
    } else {
      link = null;
    }
    return link;
  };

  // function isDisabled(path: string) {
  //   let a = false;

  //   pagesConfig.logged.map((item) => {
  //     return item.pages.map((element) => {
  //       if (path === element.path) {
  //         if (element.isWorking !== (undefined || null)) {
  //           a = element.working;
  //         } else {
  //           a = false;
  //         }
  //       }
  //       return element;
  //     });
  //   });
  //   return a;
  // }

  return (
    <Styles.Group>
      <Styles.SubGroup>
        {item.map((page: any, pageIndex: number) => {
          return (
            <Styles.Page
              $currentPage={page.path === pathname}
              $disabled={!page.isWorking}
              key={page.name + pageIndex}
              onClick={page.isWorking ? () => goto(page, page.title) : null}
            >
              {page.icon ? (
                <Styles.Icon
                  alt=""
                  $HoverColor={page.path === pathname}
                  src={page.icon}
                />
              ) : null}
              {page?.title}
            </Styles.Page>
          );
        })}
      </Styles.SubGroup>
    </Styles.Group>
  );
}

export default MenuGroupWithPagesComponent;
