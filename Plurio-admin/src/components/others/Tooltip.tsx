import React from "react";
import styled from "styled-components";
import { IconButton, Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import FontStyle from "../styles/fontStyles";
import HelpIcon from "@material-ui/icons/Help";

type TooltipProps = {
  tip: string;
  title: string;
};

const TollTipView = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",

    backgroundColor: "white",
    borderRadius: spacing(0.5),
    boxShadow: "0px 3px 6px #00000029",
    padding: spacing(2.5),
  };
});

const Title = styled.p(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    ...FontStyle.bold14,
    marginBottom: spacing(1.2),
    color: colors.text.secondary,
    marginTop: 0,
  };
});

const Content = styled.p(({ theme }) => {
  const { palette: colors, spacing, breakpoints } = theme;
  return {
    ...FontStyle.medium16,
    color: colors.text.secondary,
    margin: 0,
    maxWidth: spacing(59),
    textAlign: "start",
    marginBottom: spacing(1),
    [breakpoints.down("lg")]: {
      maxWidth: spacing(38),
    },
  };
});

const InfosButton = styled(IconButton)(({ theme }) => {
  const { spacing } = theme;
  return {
    width: spacing(2),
    height: "auto",
    margin: 0,
    padding: 0,
    marginInline: spacing(1),
  };
});

const InfoIcon = styled(HelpIcon)(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    width: spacing(2),
    height: "auto",
    color: colors.text.tertiary,
  };
});

const TextOnlyTooltip = withStyles({
  tooltip: {
    color: "black",
    backgroundColor: "transparent",
    maxWidth: "34.375rem",
  },
})(Tooltip);

function Tolltip({ tip, title }: TooltipProps) {
  return (
    <TextOnlyTooltip
      title={
        <TollTipView>
          <Title>{title}</Title>
          <Content>{tip}</Content>
        </TollTipView>
      }
    >
      <InfosButton>
        <InfoIcon />
      </InfosButton>
    </TextOnlyTooltip>
  );
}

export default React.memo(Tolltip);
