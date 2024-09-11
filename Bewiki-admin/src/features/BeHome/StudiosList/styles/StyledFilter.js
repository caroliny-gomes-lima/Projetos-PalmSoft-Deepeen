import styled from "styled-components";
import { Text } from "../../../../components";
import { Colors, Fonts } from "../../../../config";
import { ViewList, ViewModule } from "@material-ui/icons";

const CardContainer = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    flex: 1,
    width: "100%",
    height: "auto",
  };
});

const CardContent = styled.div(({ theme, $last }) => {
  const { spacing } = theme;
  return {
    padding: $last ? spacing(2) : spacing(0, 2),
    background: "#FFFFFF",
    margin: $last ? spacing(0, 0, 1, 0) : spacing(0, 1, 1, 0),
    display: "flex",
    justifyContent: $last ? "flex-start" : "space-between",
    alignItems: "center",
    borderRadius: spacing(0.75),
    marginTop: spacing(0.5),
  };
});

const CardTitle = styled(Text)(({ $dateFontSize }) => {
  return {
    fontFamily: $dateFontSize ? Fonts.medium : Fonts.bold,
    fontSize: $dateFontSize ? "12px" : "14px",
    color: "black",
  };
});

const GridViewIcon = styled(ViewModule)(({ theme, $selected }) => {
  const { spacing } = theme;
  return {
    fill: $selected ? Colors.green : Colors.black,
    margin: spacing(0, 1),
    cursor: "pointer"
  };
});

const ListViewIcon = styled(ViewList)(({ theme, $selected }) => {
  const { spacing } = theme;
  return {
    fill: $selected ? Colors.green : Colors.black,
    margin: spacing(0, 0, 0.25, 0),
    cursor: "pointer"
  };
});

const Styles = {
  CardContainer,
  CardContent,
  CardTitle,
  GridViewIcon,
  ListViewIcon
};

export default Styles;
