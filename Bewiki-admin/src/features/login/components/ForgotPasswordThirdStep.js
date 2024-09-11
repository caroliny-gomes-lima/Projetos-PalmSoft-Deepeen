import Title from "../../../components/strings/Title";
import { ButtonContained, InputPassword } from "../../../components";
import { Texts } from "../../../config";
import { FormHolder } from "../../../FormConfig";
import { Styles } from "../styles";
import { customModal } from "../../modals/utils";

export default function ForgotPasswordThirdStep({
  showCancelConfirmationModal,
  isFetching,
  email,
  token,
  ConfirmPasswordResetRequest,
  toggleForgotPassword,
}) {
  const texts = Texts["pt-BR"].forgotPass.thirdStep;

  const passwordResetFinish = () => {
    customModal.setInfos(texts.successModal.title, [texts.successModal.text], {
      label: texts.successModal.goToLoginButton,
      onClick: () => {
        toggleForgotPassword();
        customModal.close();
      },
    });
  };

  return (
    <>
      <Styles.LogoContainer>
        <Styles.Logo />
      </Styles.LogoContainer>
      <Title>{texts.title}</Title>
      {texts.text}
      <FormHolder
        onSubmit={({ newPassword }) => {
          ConfirmPasswordResetRequest(
            email,
            newPassword,
            token,
            passwordResetFinish
          );
        }}
      >
        {texts.tokenField}
        <InputPassword
          inputLabel={texts.newPasswordField}
          name={"newPassword"}
        />
        <InputPassword inputLabel={texts.confirmNewPasswordField} />
        <ButtonContained
          style={{ marginTop: 20, marginBottom: 10 }}
          disabled={isFetching}
          type="submit"
          name="button"
        >
          {texts.continueButton}
        </ButtonContained>
        <ButtonContained
          onClick={showCancelConfirmationModal}
          style={{
            marginTop: 5,
            marginBottom: 5,
            backgroundColor: "#F6F6F6",
            color: "black",
          }}
          disabled={isFetching}
          name="button"
        >
          {texts.cancelButton}
        </ButtonContained>
      </FormHolder>
    </>
  );
}
