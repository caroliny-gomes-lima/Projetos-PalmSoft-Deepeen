import { Backdrop, Paper, Modal } from "@material-ui/core";
import styled from "styled-components";
import { MediaQueries } from "../../../../config";
import Text from "../../../../components/strings/Text";
import { Close as DefaultClose } from "../../../../config/icons";
import { FontStyles } from "../../../../components";

const styledBackDrop = styled(Backdrop)({
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
  backgroundColor: "#00000020",
});

const StyledRegisterModal = styled(Modal)({
  outlineWidth: 0,
  borderWidth: 0,
  ":focus": {},
});

const Container = styled(Paper)(({ theme }) => {
  const { palette: colors, spacing, breakpoints } = theme;
  return {
    position: "absolute",
    bottom: 600,
    left: "50%",
    transform: "translate(-50%, 100%)",
    width: "90%",
    maxWidth: breakpoints.values.xl - 200,
    padding: spacing(2),
    outline: "none",
    backgroundColor: colors.darkBlue,
    transition: "opacity 0.2s",
    maxHeight: "80vh",
    [MediaQueries.mdDown]: {
      width: "90%",
    },

    [MediaQueries.smDown]: {
      width: "100%",
    },
  };
});

const HeaderContainer = styled.div((props) => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
});

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

const ButtonContainer = styled.div(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "center",
  };
});

const Title = styled(Text)(({ theme }) => {
  const { spacing } = theme;
  return {
    marginBottom: spacing(2),
  };
});
const Label = styled.p(() => ({
  margin: 0,
  display: "flex",
  flexDirection: "row",
  ...FontStyles.roman14,
}));

const Close = styled(DefaultClose)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    fill: colors.white,
  };
});

const Styles = {
  Close,
  styledBackDrop,
  StyledRegisterModal,
  HeaderContainer,
  Container,
  Title,
  InputContainer,
  ButtonContainer,
  Label,
};
export default Styles;
