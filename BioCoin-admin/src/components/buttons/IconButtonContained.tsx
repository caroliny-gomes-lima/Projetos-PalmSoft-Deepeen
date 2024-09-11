import styled from "styled-components";
import { Colors, Spacing } from "../../config";
import { Icon, IconButton } from "@material-ui/core";
import { useFormFull } from "form-full";

const StyledIcon = styled(Icon)(({ $changeColor }) => {
  return {
    color: $changeColor,
  };
});

const IconImgBase64 = styled.img(() => {
  return {
    width: "24px",
    height: "24px",
    alignSelf: "center",
  };
});
const ContainerButton = styled.div(({ $changeColor }) => {
  return {
    width: "fit-content",
    padding: Spacing(0),
    borderRadius: 5,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: $changeColor,
    "&:hover": {
      opacity: 0.5,
      //backgroundColor: $changeColor  + 50,
    },
  };
});
interface Props {
  Icon?: any;
  IconBase64?: boolean;
  changeColor?: string;
  changeIconColor?: string;
  onClick?: (event: any) => void;
  [key: string]: any;
  disabled?: boolean;
  loading?: boolean;
}

function IconButtonContained({
  Icon,
  IconBase64,
  changeColor,
  changeIconColor,
  disabled,
  loading,
  onClick: onClickProps,
  ...props
}: Props): JSX.Element {
  const { onClick } = useFormFull.button({
    onClick: onClickProps,
  });

  return (
    <ContainerButton $changeColor={changeColor}>
      <IconButton
        disabled={disabled || loading}
        loading={loading}
        onClick={onClick}
        {...props}
      >
        {IconBase64 ? (
          <IconImgBase64 src={Icon} />
        ) : (
          <StyledIcon $changeColor={changeIconColor}>{Icon}</StyledIcon>
        )}
      </IconButton>
    </ContainerButton>
  );
}

export default IconButtonContained;
