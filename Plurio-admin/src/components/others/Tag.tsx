import styled from "styled-components";
import { Chip, withTheme } from "@material-ui/core";
import FontStyle from "../styles/fontStyles";

type TagProps = {
  outlined?: boolean;
  props?: any;
};

const StyledChip = styled(Chip)(({ theme, variant }) => ({
  backgroundColor:
    variant === "outlined"
      ? theme.palette.primary.main + 20
      : theme.palette.secondary.main,
  ...FontStyle.medium12,
}));

function Tag({ outlined, ...props }: TagProps) {
  return (
    <StyledChip
      variant={outlined ? "outlined" : undefined}
      color="primary"
      {...props}
    />
  );
}

export default withTheme(Tag);
