import styled from "styled-components";
import { Text } from "../../../components";
import { MediaQueries } from "../../../config";

const PeriodContainer = styled.div({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
});

const PeriodGroupContainer = styled.div(({ theme, $withMargin }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexGrow: 1,
    flexShrink: 0,
    alignItems: "center",
    [MediaQueries.mdDown]: {
      width: "100%",
      marginBottom: $withMargin ? spacing(1) : 0,
    },
  };
});

const PeriodText = styled(Text)(({ theme }) => {
  const { spacing } = theme;
  return {
    margin: spacing(0, 1),
  };
});

const Styles = {
  PeriodContainer,
  PeriodGroupContainer,
  PeriodText,
};

export default Styles;
