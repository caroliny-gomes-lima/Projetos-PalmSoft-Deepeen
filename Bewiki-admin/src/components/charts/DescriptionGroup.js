import React from "react";
import styled from "styled-components";

const DescriptionGroup = styled.div((props) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
}));

export default React.memo(DescriptionGroup);
