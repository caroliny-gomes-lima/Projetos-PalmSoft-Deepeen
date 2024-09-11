import styled from "styled-components";
import { Text } from "../../../../components";
import { Colors } from "../../../../config";
import FontStyle from "../../../../components/styles/fontsStyles";

const FilterContent = styled.div(({ theme, status }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    width: "100%",
    background: status ? "#F0F0F0" : Colors.white0,
    alignItems: "center",
    padding: status ? spacing(0, 0, 0, 1.5) : spacing(0, 1.5),
    borderRadius: 5,
    marginLeft: status ? spacing(1) : 0,
  };
});

export const FilterTitle = styled(Text)(() => {
  return {
    ...FontStyle.semibold12,
    color: Colors.black,
  };
});

export const FilterText = styled(FilterTitle)(() => {
  return {
    ...FontStyle.bold14
  };
});

const Styles = {
  FilterTitle,
  FilterContent,
  FilterText
};

export default Styles;
