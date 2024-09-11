import styled from "styled-components";
import { ButtonContained, FontStyles } from "../../../components";
import { Colors } from "../../../config";

const Container = styled.div(({ theme }) => {
  return {
    display: "flex",
    alignItems: "flex-start",

    flexDirection: "column",
    padding: theme.spacing(4),
    borderRadius: "23.004px",
    //flex: 1,
    width: "35%",
    marginTop: theme.spacing(10),
    //marginBottom: theme.spacing(20),
    boxshadow: "0px 4.88889px 24.44444px 0px rgba(0, 0, 0, 0.05)",
    backdropFilter: "blur(12.222222328186035px)",
    background:
      "linear-gradient(180deg, rgba(217, 217, 217, 0.30) 40%, #a7a7a7)",
  };
});

const HeaderContainer = styled.div(() => {
  return {
    width: "100%",
    height: "fit-content",
    display: "flex",
    justifyContent: "center",
    //alignItems: "center",
    flexDirection: "row",
    marginTop: "20px",
    //gap: 10,
  };
});

const Line = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    backgroundColor: colors.text.primary + 60,
    width: "100%",
    height: 1,
    marginTop: spacing(3),
    marginBottom: spacing(3),
  };
});

const content = styled.div(({ theme, $disabled }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: spacing(2),
    padding: spacing(1),
    width: "100%",
  };
});

const DataBox = styled.div(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    ...FontStyles.medium16,
    color: colors.text.secondary,
    //padding: theme.spacing(0.5),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  };
});

const Label = styled.p(({ theme }) => {
  const { palette: colors } = theme;
  return {
    ...FontStyles.bold12,
    textTransform: "uppercase",
    padding: 0,
    margin: 0,
    color: colors.action.active,
    transition: ".2s",
    pointerEvents: "none",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
  };
});

const AreaButtonsTable = styled.div(({ theme, $ModalContainer }) => {
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

const ButtonFilter = styled(ButtonContained)(({ $disabled }) => {
  return {
    "&&.MuiButton-root": {
      ...FontStyles.regular14,
      fontSize: "15px",
      background: Colors.gray,
      marginBottom: 6,
      "&:hover": {
        backgroundColor: Colors.darkGray,
      },
    },
  };
});

const Styles = {
  Container,
  HeaderContainer,
  Line,
  Label,
  DataBox,
  AreaButtonsTable,
  StatusContainer,
  ButtonFilter,
  content,
};

export default Styles;
