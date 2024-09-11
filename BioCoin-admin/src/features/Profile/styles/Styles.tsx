import styled from "styled-components";
import { fonts } from "../../../config";
import { ExitToApp } from "@material-ui/icons";

const Container = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    padding: spacing(1),
    width: "100%",
    height: "auto",
  };
});

const Title = styled.p(({ theme }) => {
  const { spacing } = theme;
  return {
    margin: 0,
    color: "black",
    fontSize: spacing(4.375),
    fontFamily: fonts.bold,
  };
});

const AvatarContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "35%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: spacing(1.875),
  };
});

const Text = styled.p(({ theme }) => {
  const { spacing } = theme;
  return {
    margin: 0,
    fontSize: spacing(5.825),
    fontFamily: fonts.bold,
    textAlign: "center",
  };
});

const LogoutContainer = styled.div(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };
});

const StyledIcon = styled(ExitToApp)(({ theme }) => {
  const { spacing } = theme;
  return {
    height: spacing(4.375),
    width: "auto",
  };
});

const LogoutText = styled.p(({ theme }) => {
  const { spacing } = theme;
  return {
    margin: "0px 12px",
    fontSize: spacing(2.62),
    fontFamily: fonts.light,
  };
});

const InputContainer = styled(AvatarContainer)(() => {
  return {
    width: "65%",
  };
});

const InputCard = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "100%",
    background: "rgba(217, 217, 217, 0.30)",
    padding: spacing(3.75),
    borderRadius: "26.15px",
    border: "1.137px solid rgba(117, 113, 113, 0.14)",
    boxShadow:
      "4.16127px 4.16127px 11.29487px 0px rgba(0, 0, 0, 0.08), 0.59447px 0.59447px 3.5668px 0px rgba(0, 0, 0, 0.08), 1.18893px 0px 7.1336px 0px rgba(58, 58, 58, 0.07) inset, -1.18893px 0px 7.1336px 0px rgba(58, 58, 58, 0.07) inset",
    backdropFilter: "blur(17.051103591918945px)",
  };
});

const IconEditContainer = styled.div(() => {
  return {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  };
});

const UserImg = styled.div(({ theme, $img }) => {
  const { spacing } = theme;
  return {
    borderRadius: "243.848px",
    backgroundImage: `url(${$img})`,
    width: "200px",
    height: "200px",
    zIndex: 2,
    backgroundSize: "cover",
    marginBlock: spacing(4),
  };
})
const IconImgBase64 = styled.img(() => {
  return {
    width: "24px",
    height: "24px",
    alignSelf: "center",
  };
});

const Styles = {
  Container,
  Title,
  AvatarContainer,
  Text,
  LogoutContainer,
  StyledIcon,
  LogoutText,
  InputContainer,
  InputCard,
  IconEditContainer,
  IconImgBase64,
  UserImg,
};

export default Styles;
