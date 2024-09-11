import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import FontStyles from "../styles/fontStyles";

const Text = styled.p(
  ({ $fontFamily, $fontSize, $textColor, $styles, theme }) => {
    const { palette: colors, spacing } = theme;
    return {
      padding: 0,
      margin: 0,
      fontFamily: $fontFamily ? $fontFamily : FontStyles.medium12.fontFamily,
      fontSize: $fontSize ? spacing($fontSize) : FontStyles.medium12.fontSize,
      color: $textColor ? $textColor : colors.text.primary,
      display: "flex",
      justifyContent: "flex-start",
      alignContent: "center",
      letterSpacing: 0,
      ...$styles,
    };
  }
);

type CustomTextProps = {
  children: ReactNode;
  style?: React.CSSProperties;
  fontFamily?: string;
  fontSize?: number;
  textColor?: string;
};

function CustomText({
  children,
  style,
  fontFamily,
  fontSize,
  textColor,
}: CustomTextProps): JSX.Element {
  return (
    <Text
      $styles={style}
      $fontFamily={fontFamily}
      $fontSize={fontSize}
      $textColor={textColor}
    >
      {children}
    </Text>
  );
}

export default CustomText;
