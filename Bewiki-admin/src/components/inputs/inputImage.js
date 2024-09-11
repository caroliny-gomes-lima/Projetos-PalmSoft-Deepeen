import React from "react";
import { FormControl, Input } from "@material-ui/core";
import styled from "styled-components";
import FontStyle from "../styles/fontsStyles";
import { formConnector } from "../../FormConfig";
import { Publish } from "@material-ui/icons";
import { Fonts } from "../../config";
import { withTheme } from "@material-ui/styles";
import { IconEndAdornment } from "./inputsComponents";

export const Container = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    marginTop: spacing(1),
    display: "flex",
    height: "auto",
    borderBottom: "solid 1px",
    color: "#F3F3F3",
    "&:hover": {
      color: "#333438",
    },
  };
});

const InputLabel = styled.label(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    display: "flex",
    alignItems: "center",
    width: "150%",
    height: "1rem",
    marginBlock: spacing(1, 1),
    ...FontStyle.medium14,
    opacity: "0.5",
    color: colors.text.primary,
    overflow: "hidden",
  };
});
const StyledInput = styled(Input)(({ $inputStyle, ...rest }) => {
  return {
    display: "none",
    ...$inputStyle,
  };
});

const UploadIcon = styled(Publish)(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    fill: colors.text.primary,
    opacity: 1,
    width: "1.100rem",
    height: "1.100rem",
    alignSelf: "center",
    margin: spacing(0, 0),
    marginLeft: spacing(0.5),
  };
});

const TextIcon = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "1rem",
    marginBlock: spacing(1, 1),
    fontFamily: Fonts.medium,
    fontSize: 10,
    color: colors.text.primary,
    overflow: "hidden",
  };
});

function InputImageComponent(props) {
  const {
    value,
    error,
    handleKeyPress,
    handleKeyDown,
    onBlur,
    setConfigs,
    ref,
    formHandler,
    usedProps,
  } = formConnector.useStringValue(props);

  const {
    inputLabel,
    setStartIcon,

    textClick,
    disabled = true,
    icon,
    theme,
    required,
    disableError,
    inputStyle,
    type = "file",
    hideButtonLabel,
    maxLength = 25,
    accept,
    endButton,
    textIcon,
    ...rest
  } = usedProps;

  return (
    <Container>
      <InputLabel for={props.name}>
        {setStartIcon ? setStartIcon : null}
        {value ? value.substring(0, maxLength) + "..." : textClick}

        <FormControl
          fullWidth={false}
          hiddenLabel={true}
          error={Boolean(error)}
        >
          <StyledInput
            {...rest}
            name={props.name}
            inputProps={{ accept: "image/png,image/jpeg" }}
            $disabled={disabled}
            id={props.name}
            $withValue={Boolean(value) || value === 0}
            autoComplete={false}
            type={type}
            value={value ? value.name : ""}
            required={Boolean(required)}
            onKeyPress={handleKeyPress}
            onKeyDown={handleKeyDown}
            inputRef={ref}
            onChange={(event) => setConfigs(event.target.files[0])}
            onBlur={(event) => {
              setTimeout(() => {
                onBlur(event);
                formHandler.testInputError(props.name);
              }, 10);
            }}
          />
        </FormControl>
      </InputLabel>
      {icon && icon.Component ? (
        <IconEndAdornment formHandler={formHandler} icon={icon} />
      ) : endButton ? (
        <>{endButton}</>
      ) : textIcon ? (
        <>{textIcon}</>
      ) : (
        <TextIcon>
          {"UPLOAD"}
          <UploadIcon />
        </TextIcon>
      )}
    </Container>
  );
}

export default withTheme(InputImageComponent);
