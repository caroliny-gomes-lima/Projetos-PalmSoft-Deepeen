import { Button } from "@material-ui/core";
import styled from "styled-components";
import { FontStyles } from "../../../../components";
import { Colors, Fonts } from "../../../../config";

const Card = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "95%",
    height: "auto",
    backgroundColor: Colors.gray0,
    margin: spacing(1),
    borderRadius: "5px",
  };
});

const Content = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    height: "auto",
    margin: spacing(2),
    fontFamily: Fonts.bold,
  };
});

const Header = styled.div(({ theme, $defaultColor }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    alignItems: "center",
    color: $defaultColor,
    marginLeft: spacing(1),
    cursor: "pointer",
    "&:hover": {
      opacity: 0.7,
    },
  };
});

const RedeemButton = styled(Button)(({ theme }) => {
  const { spacing } = theme;
  return {
    backgroundColor: Colors.orange,
    paddingTop: spacing(1),
    ...FontStyles.bold10,
    color: Colors.white0,
    lineHeight: "normal",
    borderRadius: 25,
    width: "90%",
    height: "auto",
    ".MuiButton-endIcon": {
      width: 30,
    },
    "&:hover": {
      backgroundColor: Colors.orangeAlert,
    },
  };
});

const RedeemModalCouponName = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    height: "auto",
    margin: spacing(2),
    paddingLeft: spacing(1),
    fontFamily: Fonts.bold,
    color: Colors.orange,
  };
});

const RedeemModalContent = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    height: "auto",
    marginLeft: spacing(3),
    marginRight: spacing(3),
  };
});

const CouponCardStyles = {
  Card,
  Content,
  Header,
  RedeemButton,
  RedeemModalCouponName,
  RedeemModalContent,
};

export default CouponCardStyles;
