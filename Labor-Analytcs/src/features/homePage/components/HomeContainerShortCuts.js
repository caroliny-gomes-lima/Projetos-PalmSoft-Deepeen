import React from "react";
import HomeShortCuts from "./HomeShortCuts";
import { PagesConfig } from "config";
import { navigate } from "navigation/navigate";
import { ShortCutsStyles as Styles } from "../styles";
import { BlockTitle } from "../../../pages/styles/defaultStyles";
import { Texts } from "../../../config";

function HomeContainerShortCuts() {
  const lastOne = PagesConfig.logged.length - 1;
  const texts = Texts["pt-BR"].Home;

  const goto = (item) => {
    navigate(item.path);
  };

  let firstOne = true;
  return (
    <Styles.Container>
      <Styles.Content $startCol={1} $endCol={115} $startRow={2} $endRow={10}>
        <Styles.HeaderContent>
          <BlockTitle>{texts.title}</BlockTitle>
        </Styles.HeaderContent>

        {PagesConfig.logged.map((item, index) => {
          if (!item.groupTitle) {
            return null;
          }
          const first = firstOne;
          firstOne = false;
          if (item.pages) {
            return item.dontShow ? null : (
              <HomeShortCuts
                key={item.groupTitle + index}
                item={item}
                lastOne={lastOne}
                goto={goto}
                firstItem={first}
              />
            );
          }
        })}
      </Styles.Content>
    </Styles.Container>
  );
}

export default React.memo(HomeContainerShortCuts);
