import React, { useState } from "react";
import styled from "styled-components";

const SwiperView = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    flexDirection: "row",
    display: "flex",
    marginTop: spacing(2),
    justifyContent: "center",
  };
});
const Dots = styled.div(({ theme, $setPage, $index, $screenIndex }) => {
  const { spacing, palette: colors } = theme;
  return {
    borderRadius: spacing(8),
    backgroundColor: $setPage ? colors.action.active : colors.lightGray,
    width: $index === $screenIndex ? spacing(5) : spacing(1.2),
    marginRight: spacing(3),
    height: spacing(1.2),
  };
});

function Swiper({ screens, loopScreens }) {
  const [index, setIndex] = useState(0);
  const Screen = screens[index];

  const goNext = () => {
    if (index < screens.length - 1) {
      setIndex(index + 1);
    } else if (loopScreens) {
      setIndex(0);
    }
  };

  const goPrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else if (loopScreens) {
      setIndex(screens.length - 1);
    }
  };

  const goTo = (index) => {
    if (index >= 0 && index < screens.length) {
      setIndex(index);
    }
  };

  return Screen({
    goNext,
    goPrevious,
    goTo,
    RenderSwiperDots: () => (
      <SwiperDots screenIndex={index} screens={screens} />
    ),
  });
}

function SwiperDots({ screens, screenIndex }) {
  return (
    <SwiperView>
      {screens.map((item, index) => (
        <Dots
          key={index}
          $setPage={index <= screenIndex}
          $index={index}
          $screenIndex={screenIndex}
        />
      ))}
    </SwiperView>
  );
}

export default React.memo(Swiper);
