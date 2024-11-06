import React from "react";
import Radio, { RadioProps } from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Colors } from "../../config";

const StyledRadioIcon = styled.span`
  width: 24px;
  height: 24px;
  background: #ECECEC 0% 0% no-repeat padding-box;
  border-radius: 5px;
  border: 3px solid ${Colors.purple};
`;

const StyledCheckedRadioIcon = styled.span`
  width: 24px;
  height: 24px;
  background: #7e7e7e00 0% 0% no-repeat padding-box;
  border: 3px solid ${Colors.purple};
  border-radius: 5px;
  position: relative;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    width: 12px;
    height: 12px;
    background: ${Colors.purple} 0% 0% no-repeat padding-box;
    border-radius: 2px;
    opacity: 1;
  }
`;

const SquareRadio = withStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  icon: {
    borderRadius: 0
  },
  checkedIcon: {
    borderRadius: 0
  }
})((props: RadioProps) => (
  <Radio
    disableRipple
    color="default"
    checkedIcon={<StyledCheckedRadioIcon />}
    icon={<StyledRadioIcon />}
    {...props}
  />
));

export default SquareRadio;
