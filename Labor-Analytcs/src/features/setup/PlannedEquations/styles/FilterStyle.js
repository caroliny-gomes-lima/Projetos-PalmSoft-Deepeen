import styled from "styled-components";
import { Text } from "../../../../components";
import { Fonts } from "../../../../config";

const FiltersContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    margin: spacing(-0.5),
    width: `calc(100% + ${spacing(1)}px)`,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  };
});

const CheckContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    paddingRight: spacing(2),
    maxWidth: `calc(100% - ${spacing(1)}px)`,
    marginLeft: spacing(1),
    alignSelf: "flex-end",
  };
});

const CheckContent = styled(Text)(() => {
  return {
    fontFamily: Fonts.medium,
    fontSize: Fonts.sizes.small,
  };
});

const Styles = {
  CheckContainer,
  CheckContent,
  FiltersContainer,
};

export default Styles;
