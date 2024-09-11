import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import { FontStyles } from "../../../../components";
import { MediaQueries } from "../../../../config";
import { Fonts } from "../../../../config";

const InputContainer = styled.div(({ theme }) => {
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
    flex: 1,
    [MediaQueries.smDown]: {
      width: "100%",
    },
  };
});
const Content = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "column",
    paddingBottom: 20,
  };
});

const InputGrid = styled(Grid)(({ theme }) => {
  const { spacing } = theme;
  return { padding: spacing(1) };
});

const Label = styled.p(() => ({
  margin: 0,
  display: "flex",
  flexDirection: "row",
  ...FontStyles.roman14,
}));
const LabelBold = styled.p(() => ({
  margin: 0,
  ...FontStyles.bold14,
}));
const LabelExLight = styled.p(() => ({
  margin: 0,
  ...FontStyles.light14,
}));

const InfoUsabilitySubTitle = styled(Typography)(({ theme }) => {
  const colors = theme.palette;
  return {
    fontFamily: Fonts.roman,
    fontSize: Fonts.sizes.small,
    color: colors.text.primary,
    textAlign: "flex-start",
  };
});

const Styles = {
  InputContainer,
  Content,
  InputGrid,
  Label,
  LabelBold,
  LabelExLight,
  InfoUsabilitySubTitle,
};

export default Styles;
