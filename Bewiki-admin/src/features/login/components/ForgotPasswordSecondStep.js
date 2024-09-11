import { ArrowBackIos } from "@material-ui/icons";
import Title from "../../../components/strings/Title";
import ReactCodeInput from "react-code-input";
import { Texts } from "../../../config";
import { Styles } from "../styles";
import React from "react";

export default function ForgotPasswordSecondStep({
  goNext,
  goPrevious,
  showCancelConfirmationModal,
  isFetching,
  email,
  ValidateTokenRequest,
  PasswordResetRequest,
}) {
  const texts = Texts["pt-BR"].forgotPass.secondStep;
  const [tokenFieldData, setTokenFieldData] = React.useState();

  return (
    <>
      <Styles.HeaderContainer>
        <Styles.BackButton onClick={goPrevious}>
          <ArrowBackIos />
        </Styles.BackButton>
        <Styles.LogoContainer>
          <Styles.Logo />
        </Styles.LogoContainer>
      </Styles.HeaderContainer>
      <Title>{texts.title}</Title>
      {texts.text}
      <Styles.HeaderContainer
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Title>{texts.tokenField}</Title>
      </Styles.HeaderContainer>
      <Styles.TokenFieldContainer>
        <ReactCodeInput
          type="text"
          fields={5}
          onChange={(text) => setTokenFieldData(text)}
          value={tokenFieldData}
          forceUppercase={true}
        />
      </Styles.TokenFieldContainer>
      <Styles.StyledButton
        style={{ marginTop: 5, marginBottom: 5 }}
        name="button"
        onClick={() => {
          ValidateTokenRequest(email, tokenFieldData, goNext);
        }}
        fullWidth
        disabled={isFetching}
      >
        {texts.continueButton}
      </Styles.StyledButton>
      <Styles.StyledButton
        style={{
          marginTop: 5,
          marginBottom: 5,
          backgroundColor: "#F6F6F6",
          color: "black",
          borderColor: "black",
          borderWidth: 1,
          borderStyle: "outset",
        }}
        name="button"
        onClick={() => PasswordResetRequest(email)}
        fullWidth
        disabled={isFetching}
      >
        {texts.resendTokenButton}
      </Styles.StyledButton>
      <Styles.StyledButton
        onClick={showCancelConfirmationModal}
        style={{
          marginTop: 5,
          marginBottom: 5,
          backgroundColor: "#F6F6F6",
          color: "black",
        }}
        loading={false}
        name="button"
        fullWidth
        disabled={isFetching}
      >
        {texts.cancelButton}
      </Styles.StyledButton>
    </>
  );
}
