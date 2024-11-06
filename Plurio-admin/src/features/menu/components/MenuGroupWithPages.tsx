import React from "react";
// import { navigate } from "../../../navigation/navigate";
import Styles from "../styles/Styles";
import { customModal } from "../../../components/modals/utils";
import { pagesConfig } from "../../../config";
import { useNavigate } from "react-router-dom";
import { CustomText } from "../../../components";

type CustomMenuGroupProps = {
  item: any;
  firstItem: boolean;
  headerName: string;
};

function MenuGroupWithPagesComponent({
  item,
  firstItem,
  headerName,
}: CustomMenuGroupProps) {
  const navigate = useNavigate();
  const [selectedPath, setSelectedPath] = React.useState<string>(location.pathname);
  const classes = Styles.useStyles();

  function handleLogout() {
    customModal.setInfos(
      "Sair",
      ["Encerrar sessão atual e sair da conta?"],
      {
        label: "Sim, Sair",
        onClick: () => {
          customModal.close();

          // globalLogout();
        },
      },
      {
        label: "Voltar",
        onClick: () => {
          customModal.close();
        },
      },
      null,
      null,
      null
    );
  }

  const goto = (path: string, title: string) => {
    let link;
    if (!isDisabled(path) === false) {
      if (title === "Sair") {
        handleLogout();
      } else {
        navigate(path);
      }
    } else {
      link = null;
    }
    return link;
  };


  function isDisabled(path: string) {
    let a = false;
    pagesConfig.logged.map((item) => {
      return item.pages.map((element) => {
        if (path === element.path) {
          if (element.working !== (undefined || null)) {
            a = element.working;
          } else {
            a = false;
          }
        }
        return element;
      });
    });
    return a;
  }

  return (
    <Styles.Group $firstOne={firstItem}>
      <Styles.GroupTitleContainer>
        <Styles.GroupNameContainer>
          <Styles.GroupTitle>{headerName}</Styles.GroupTitle>
        </Styles.GroupNameContainer>
      </Styles.GroupTitleContainer>
      <Styles.SubGroup>
        {item.map((page: any, pageIndex: number) => {
          return page.title !== "Sair" ? (
            <Styles.NavigationButton
              $buttonContained={true}
              $currentPage={page.path === location?.pathname}
              $changeColor={page.path === selectedPath}
              $buttonColor={page.title === "Sair" ? "red" : "primary.main"}
              $disabled={!isDisabled(page.path)}
              key={page.name + pageIndex}
              onClick={() => goto(page.path, page.title)}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {page.icon && typeof page.icon !== 'string' ? (
                  <page.icon alt="" />
                ) : null}
                {page.title}
              </div>
            </Styles.NavigationButton>
          ) : (
            <Styles.LeaveButton onClick={() => handleLogout()}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {page.icon && typeof page.icon !== 'string' ? (
                  <page.icon alt="" />
                ) : null}
                {page.title}
              </div>
            </Styles.LeaveButton>
          );
        })}
      </Styles.SubGroup>
    </Styles.Group>
  );
}

export default MenuGroupWithPagesComponent;
