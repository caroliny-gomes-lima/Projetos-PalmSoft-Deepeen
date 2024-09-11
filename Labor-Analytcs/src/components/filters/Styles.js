import styled from "styled-components";
import Text from "../strings/Text";
import { Fonts } from "../../config";
import DefaultButtonContained from "../buttons/ButtonContained";
import DefaultButtonOutlined from "../buttons/ButtonOutlined";

const FiltersContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    margin: spacing(-0.5),
    width: `calc(100% + ${spacing(1)}px)`,
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    flexWrap: "wrap",
  };
});

const FilterContainer = styled.div(({ theme, $styles = {} }) => {
  const { palette: colors, spacing } = theme;
  return {
    ...$styles,
    padding: spacing(1),
    maxWidth: `calc(100% - ${spacing(1)}px)`,
    backgroundColor: colors.lightBlue + 70,
    border: `1px solid rgba(255, 255, 255, 0.2)`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 4,
    margin: spacing(0.5),
  };
});

const FilterTitle = styled(Text)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.medium,
    fontSize: Fonts.sizes.small,
    marginBottom: spacing(1),
  };
});

const ButtonsContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: `calc(100% + ${spacing(1)})`,
    margin: spacing(1, -0.5, 0, -0.5),
  };
});

const ButtonContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return { padding: spacing(0.5) };
});

const ButtonContained = styled(DefaultButtonContained)({
  textTransform: "none",
});

const ButtonOutlined = styled(DefaultButtonOutlined)({
  textTransform: "none",
});

const Style = {
  FiltersContainer,
  FilterContainer,
  FilterTitle,
  ButtonsContainer,
  ButtonContainer,
  ButtonOutlined,
  ButtonContained,
};

export default Style;
