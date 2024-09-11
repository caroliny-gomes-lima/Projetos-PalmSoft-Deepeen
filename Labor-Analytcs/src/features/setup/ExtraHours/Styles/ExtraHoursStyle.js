import styled from "styled-components";
import { MediaQueries } from "../../../../config";
import { Fonts } from "../../../../config";
import { FontStyles } from "../../../../components";
import Text from "../../../../components/strings/Text";

const Container = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(1),
    paddingBottom: spacing(2),
    marginLeft: spacing(-2),
    marginRight: spacing(-2),
    borderRadius: 5,
    display: "flex",
    flex: 1,
    [MediaQueries.smDown]: {
      width: "100%",
    },
  };
});

const HeaderContainer = styled.div((props) => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: "10px",
    marginBottom: "-10px",
  };
});
const Content = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "column",
  };
});

const FilterContainer = styled.div(({ theme, $styles = {}, $background }) => {
  const { palette: colors, spacing } = theme;
  return {
    ...$styles,
    padding: spacing(1),
    backgroundColor: $background === 2 ? colors.darkBlue2 : colors.darkBlue,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: spacing(0.5),
  };
});

const FilterTitle = styled(Text)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.light,
    fontSize: Fonts.sizes.small,
    marginBottom: spacing(0),
  };
});

const Label = styled.p(() => ({
  margin: 0,
  display: "flex",
  flexDirection: "row",
  ...FontStyles.roman14,
}));

const Styles = {
  Container,
  Label,
  Content,
  FilterContainer,
  FilterTitle,
  HeaderContainer,
};

export default Styles;
