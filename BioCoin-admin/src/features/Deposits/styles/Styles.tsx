import { IconButton } from "@material-ui/core";
import styled from "styled-components";
import { ButtonContained, FontStyles } from "../../../components";
import { Colors, Spacing, fonts } from "../../../config";

const Container = styled.div(({ theme }) => {
  return {
    display: "flex",
    alignItems: "flex-start",

    flexDirection: "column",
    padding: theme.spacing(2),
    borderRadius: "23.004px",
    flex: 1,
    width: "100%",

    backgroundColor: Colors.gray + 70,
    boxShadow:
      "3.6607px 3.6607px 9.93619px 0px rgba(0, 0, 0, 0.08), 0.52296px 0.52296px 3.13774px 0px rgba(0, 0, 0, 0.08), 1.04592px 0px 6.27549px 0px rgba(58, 58, 58, 0.07) inset, -1.04592px 0px 6.27549px 0px rgba(58, 58, 58, 0.07) inset",
  };
});

const HeaderTable = styled.div(() => {
  return {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "5px",
    gap: 10,
  };
});

const AreaButtonsTable = styled.div(() => {
  return {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    gap: 8,
  };
});

const StatusContainer = styled.div(({ theme, $disabled }) => {
  const { spacing } = theme;
  return {
    ...FontStyles.regular12,
    fontSize: "8.135px",
    color: theme.palette.text.secondary,
    display: "flex",
    justifyContent: "center",
    backgroundColor: $disabled ? Colors.gray : Colors.green,
    padding: spacing(1),
    borderRadius: "5px",
    width: "100%",
  };
});

const ValueContainer = styled.div(({ theme, $disabled }) => {
  const { spacing, breakpoints } = theme;
  return {
    width: "100%",
    maxWidth: "320px",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: spacing(1, 16),
    borderRadius: "20px",
    backgroundColor: Colors.gray + 70,
    boxShadow:
      "3.6607px 3.6607px 9.93619px 0px rgba(0, 0, 0, 0.08), 0.52296px 0.52296px 3.13774px 0px rgba(0, 0, 0, 0.08), 1.04592px 0px 6.27549px 0px rgba(58, 58, 58, 0.07) inset, -1.04592px 0px 6.27549px 0px rgba(58, 58, 58, 0.07) inset",
  };
});

const ButtonFilter = styled(ButtonContained)(({ $focus }) => {
  return {
    "&&.MuiButton-root": {
      ...FontStyles.regular14,
      fontSize: "15px",

      padding: Spacing(0),
      backgroundColor: $focus ? Colors.darkGray : Colors.gray,
      boxShadow: "none",
      "&:hover": {
        backgroundColor: Colors.darkGray,
      },
      "&:focus": {},
    },
  };
});

const ButtonModal = styled(ButtonContained)(() => {
  return {
    "&&.MuiButton-root": {
      ...FontStyles.regular14,
      fontSize: "15px",
      background: Colors.darkGray,
      marginBottom: 6,
      alignSelf: "flex-end",
      "&:hover": {
        backgroundColor: Colors.darkGray,
      },
    },
  };
});
const ButtonIconFilter = styled(IconButton)(() => {
  return {
    "&&.MuiIconButton-root": {
      ...FontStyles.bold12,
      padding: "8px",
      background: Colors.gray,
      color: "#818181",
      //marginBottom: 6,
      borderRadius: 8,
      "&:hover": {
        backgroundColor: Colors.darkGray,
        color: Colors.white,
      },
    },
  };
});

const ValueTitle = styled.p(({ theme }) => {
  const { breakpoints } = theme;
  return {
    ...FontStyles.bold22,
    color: "#0168FA",
    margin: 0,
    marginInline: "7px",

    [breakpoints.down("xl")]: {
      ...FontStyles.bold18,
    },
  };
});

const ValueSubtitle = styled.p(() => {
  return {
    ...FontStyles.bold16,
    color: "#262626",
    margin: 0,
  };
});
const ModalContainer = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "column",
    paddingInline: "22px",
    paddingBlock: "10px",
  };
});

const DeposityModalContainer = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -30,
  };
});

const DeposityModalTitle = styled.p(({ theme }) => {
  const { spacing } = theme;
  return {
    margin: 0,
    marginBottom: 8,
    fontFamily: fonts.bold,
    fontSize: spacing(3.75),
  };
});

const DeposityModalContent = styled.div(() => {
  return {
    background: " rgba(26, 26, 26, 0.60)",
    border: "1.212px solid #FFF",
    borderRadius: "14.903px",
    width: "90%",
  };
});

const DeposityModalButtons = styled.div(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});

const ApproveButton = styled(ButtonContained)(() => {
  return {
    "&&.MuiButton-root": {
      fontFamily: fonts.regular,
      fontSize: "15px",
      width: "95px",
      height: "25px",
      background: "#10B759",
      margin: 0,
      "&:hover": {
        backgroundColor: "#10B759",
      },
    },
  };
});

const DisapproveButton = styled(ApproveButton)(() => {
  return {
    "&&.MuiButton-root": {
      background: "#E00000",
      marginInline: 10,
      "&:hover": {
        backgroundColor: "#E00000",
      },
    },
  };
});

const CloseButton = styled.p(() => {
  return {
    margin: 0,
    cursor: "pointer",
    textDecoration: "underline",
    fontFamily: fonts.regular,
  };
});

const ListItem = styled.div(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    padding: 18,
    borderBottom: "0.604px solid #D1D1D1",
  };
});

const ListText = styled.p(({ theme, $label }) => {
  const { spacing } = theme;
  return {
    margin: 0,
    color: "white",
    fontFamily: $label ? fonts.bold : fonts.regular,
    fontSize: spacing(2.05),
  };
});

const LoadingContainer = styled.div(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: theme.spacing(2),
    width: "100%",
    height: "100%",
  };
});

const NoDataContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});

const NoDataText = styled.p(({ theme }) => {
  const { spacing } = theme;
  return {
    color: Colors.black,
    ...FontStyles.regular18,
    margin: 0,
  };
});

const Styles = {
  Container,
  HeaderTable,
  AreaButtonsTable,
  StatusContainer,
  ButtonFilter,
  ButtonIconFilter,
  ValueSubtitle,
  ValueTitle,
  ValueContainer,
  ButtonModal,
  ModalContainer,
  DeposityModalContainer,
  DeposityModalTitle,
  DeposityModalContent,
  DeposityModalButtons,
  ApproveButton,
  DisapproveButton,
  CloseButton,
  ListItem,
  ListText,
  LoadingContainer,
  NoDataContainer,
  NoDataText,
};

export default Styles;
