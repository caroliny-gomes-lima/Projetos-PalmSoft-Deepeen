import styled from "styled-components";
import { Colors, Fonts } from "../../../../config";
import { Button } from "@material-ui/core";

const ButtomContainer = styled(Button)(
  ({ theme, $defaultColor, $colorHover, $borderColor, $colorFont }) => {
    const { spacing } = theme;
    return {
      width: "95%",
      backgroundColor: $defaultColor,
      border: "solid 1px",
      borderColor: $borderColor,
      borderRadius: "5px",
      margin: spacing(1),
      padding: spacing(2),
      color: $colorFont,
      boxShadow: "0px 2px 4px #bcbcbc",
      "&:hover": {
        backgroundColor: $colorHover,
        //color: "white",
      },
    };
  }
);

const ButtomContent = styled.div(() => {
  return {
    flex: 1,
    width: "auto",
    height: 58,
  };
});

const ButtomHeader = styled.div(({ theme, $defaultColor }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    //borderBottom: "solid 1px",
    color: $defaultColor,
    marginBottom: spacing(0),
  };
});

const ButtomElementGroup = styled.div(() => {
  return {
    display: "flex",
  };
});

const ButtomTitle = styled.div(({ $defaultColor, $defaultDataText }) => {
  return {
    fontFamily: Fonts.extraBold,
    fontSize: $defaultDataText ? "14px" : "18px",
    marginLeft: $defaultDataText ? "80px" : null,
    color: $defaultDataText ? Colors.black : $defaultColor,
    /*"&:hover": {
      color: "white",
    },*/
  };
});

const ButtomIcon = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    marginRight: spacing(1),
    padding: spacing(0),

    //marginTop: spacing(-1),
  };
});

const TextData = styled.div(() => {
  return {
    fontFamily: Fonts.semibold,
    fontSize: "14px",
    //alignSelf: "center",
  };
});

const ButtomHeaderDropdownContainer = styled.div(({ theme, $defaultColor }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    //borderBottom: "solid 1px",
    color: $defaultColor,
    marginBottom: spacing(0),
  };
});

const Styles = {
  ButtomContainer,
  ButtomContent,
  ButtomHeader,
  ButtomElementGroup,
  ButtomIcon,
  ButtomTitle,
  TextData,
  ButtomHeaderDropdownContainer,
};

export default Styles;
