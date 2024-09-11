import styled from "styled-components";
import { MediaQueries, Spacing, Themes } from "../../../../config";
import { Fonts } from "../../../../config";
import { FontStyles } from "../../../../components";
import Text from "../../../../components/strings/Text";

const Container = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "column",
    paddingBottom: 20,
  };
});

const StyledInput = styled.div(({ $type }) => {
  const spacing = Spacing;
  const colors = Themes.Light.palette;
  return {
    padding: spacing(1),
    paddingLeft: spacing(1),
    multiline: true,
    textOverflow: "ellipsis",
    backgroundColor: $type === 2 ? colors.darkerBlue : colors.lightBlueInput,
    borderRadius: 5,
    marginTop: spacing(2),
    boxShadow: `inset 0 0 0 ${colors.error.main}`,
    opacity: 1,
    width: "100%",
    minWidth: 100,
    fontSize: $type === 2 ? "1rem" : null,
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

const ListContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(2),
    paddingBottom: spacing(2),
    background: "#2C3E50",
    marginTop: spacing(2),
    marginLeft: spacing(1),
    marginRight: spacing(1),
    marginBottom: spacing(0),
    borderRadius: 5,
    display: "flex",
    //border: "solid",
    flexGrow: 1,
    [MediaQueries.smDown]: {
      width: "100%",
    },
  };
});

const ListContent = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(2),
    paddingBottom: spacing(2),
    background: "#2C3E50",
    marginTop: spacing(2),
    marginLeft: spacing(1),
    marginRight: spacing(1),
    marginBottom: spacing(0),
    borderRadius: 5,
    overflowX: "auto",
    overflowY: "hidden",
    display: "flex",
    flex: 1,
    [MediaQueries.smDown]: {
      width: "100%",
    },
  };
});
const FilterContainer = styled.div(({ theme, $styles = {}, $background }) => {
  const { palette: colors, spacing } = theme;
  return {
    ...$styles,
    padding: spacing(1),
    backgroundColor: $background === 2 ? colors.darkBlue2 : colors.darkBlue,
    display: "block",
    borderRadius: 5,
    //border: "solid",
    //borderColor: "red",
    margin: spacing(0.5),
  };
});

const Label = styled.p(() => ({
  margin: 0,
  ...FontStyles.roman14,
}));

const FilterTitle = styled(Text)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.bold,
    fontSize: Fonts.sizes.smaller,
    marginBottom: spacing(0),
  };
});
const textContent = styled.p(() => ({
  position: "relative",
  bottom: "-40px",
  left: "-126px",
  ...FontStyles.roman14,
  [MediaQueries.xsDown]: {
    position: "relative",
    bottom: "130px",
    left: "40px",
  },
}));
/*const LabelBold = styled.p(() => ({
    margin: 0,
    ...FontStyles.bold14,
  }));
  const LabelExLight = styled.p(() => ({
    margin: 0,
    ...FontStyles.light14,
  }));*/

const Styles = {
  Container,
  HeaderContainer,
  ListContainer,
  ListContent,
  FilterContainer,
  FilterTitle,
  textContent,
  Label,
  StyledInput,
};
export default Styles;
