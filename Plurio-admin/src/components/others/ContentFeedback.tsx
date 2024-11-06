import React from "react";
import { Skeleton } from "@material-ui/lab";
import styled from "styled-components";
import CustomText from "./CustomText";
import SkeletonLoader from "./SkeletonLoader";
import { fonts } from "../../config";

const Content = styled.div(({ theme, secondaryColor }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(3),
  width: "100%",
  backgroundColor: secondaryColor ? "#8D9B9C" : "#D2D2D2",
  marginBottom: theme.spacing(2),
}));

function ContentFeedback({ children, data, loading, secondaryColor }: any) {
  return loading ? (
    <SkeletonLoader height={200}>
      <div style={{ width: "100%" }}></div>
    </SkeletonLoader>
  ) : data === null || data == undefined ? (
    <Content secondaryColor={secondaryColor}>
      <CustomText
        fontSize={1.75}
        fontFamily={fonts.semibold}
        textColor="#4D585A"
      >
        Sem Dados
      </CustomText>
    </Content>
  ) : data.length <= 0 ? (
    <Content secondaryColor={secondaryColor}>
      <CustomText
        fontSize={1.75}
        fontFamily={fonts.semibold}
        textColor="#4D585A"
      >
        Lista Vazia
      </CustomText>
    </Content>
  ) : (
    <>{children}</>
  );
}

export default ContentFeedback;
