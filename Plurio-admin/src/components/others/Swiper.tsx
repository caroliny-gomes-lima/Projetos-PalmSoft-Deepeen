import React, { useState } from "react";
import styled from "styled-components";

import FontStyles from "../styles/fontStyles";

const SwiperView = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    flexDirection: "row",
    display: "flex",
    marginTop: spacing(2),
    justifyContent: "flex-start",
    height: spacing(0.2),
    width: "100%",
    backgroundColor: "gray",
  };
});
const Bar = styled.div(({ $width, theme }) => {
  const { spacing } = theme;
  return {
    backgroundColor: "blue",
    width: `${$width * 100}%`,
    height: spacing(0.2),
  };
});
const NavigationTitle = styled.p(() => {
  // const { spacing } = theme;
  return {
    ...FontStyles.medium12,
    color: "#C2C2C2",
    margin: 0,
  };
});
const NavigationPage = styled.p(() => {
  return {
    ...FontStyles.medium14,
    color: "#C2C2C2",
    margin: 0,
  };
});
interface Pages {
  screens: ((screens: any) => JSX.Element)[];
}
function Swiper({ screens }: Pages): JSX.Element {
  const [index, setIndex] = useState(0);
  const Screen = screens[index];

  const goNext = () => {
    if (index < screens.length - 1) {
      setIndex(index + 1);
    }
  };

  const goPrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const goTo = (index: number) => {
    if (index >= 0 && index < screens.length) {
      setIndex(index);
    }
  };

  return Screen({
    goNext,
    goPrevious,
    goTo,
    RenderSwiperDots: (pageTitle: string) => (
      <SwiperDots screenIndex={index} screens={screens} pageTitle={pageTitle} />
    ),
  });
}

function SwiperDots({ screens, screenIndex, pageTitle }) {
  return (
    <>
      <NavigationTitle>Navegação</NavigationTitle>
      <NavigationPage>{pageTitle}</NavigationPage>
      <SwiperView>
        <Bar $width={(1 + screenIndex) / screens?.length} />
      </SwiperView>
    </>
  );
}

export default Swiper;
