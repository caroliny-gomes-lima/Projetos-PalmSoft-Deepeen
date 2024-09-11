import React from "react";
import Styles from "../styles/Styles";
import ShortCutsHomePage from "../components/HomeShortCuts";
import { HomeContainerShortCuts } from "../components";

function HomePage() {
  return (
    <Styles.Container>
      <Styles.Background>
        <Styles.BackgroundImage />
      </Styles.Background>
      <Styles.Logo />
      <HomeContainerShortCuts />
    </Styles.Container>
  );
}

export default HomePage;
