import styled from "styled-components";
import { FontStyles, Text } from "../../../components";
import { Avatar } from "@material-ui/core";
import { Fonts, MediaQueries } from "../../../config";

const PersonInfo = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  [MediaQueries.smDown]: {
    display: "none",
  },
}));

const Name = styled(Text)((props) => ({
  color: props.theme.palette.text.primary,
  ...FontStyles.roman16,
  marginBottom: 0,
  marginTop: 5,
  textAlign: "left",
  width: "180px",
}));

const Role = styled(Text)((props) => ({
  color: props.theme.palette.text.primary,
  ...FontStyles.bold14,
  marginBottom: 0,
  marginTop: -5,
  textAlign: "left",
}));

const AvatarContainer = styled(Avatar)(({ theme }) => {
  const { spacing } = theme;
  return {
    width: 34,
    height: 34,
    marginRight: spacing(1),
    [MediaQueries.xsDown]: {
      width: 375, //acrescentei aqui
      display: "none",
    },
  };
});

const AvatarIcon = styled(Text)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    fontSize: Fonts.sizes.regular,
    fontFamily: Fonts.medium,
    color: colors.background.default,
  };
});

const Styles = {
  PersonInfo,
  AvatarContainer,
  AvatarIcon,
  Role,
  Name,
};

export default Styles;
