import { ArrowBackIos } from "@material-ui/icons";
import Title from "../../../components/strings/Title";
import { ButtonContained, InputEmail } from "../../../components";
import { Texts } from "../../../config";
import { FormHolder } from "../../../FormConfig";
import { Styles } from "../styles";

export default function ForgotPasswordFirstStep({
  toggleForgotPassword,
  goNext,
  PasswordResetRequest,
  isFetching,
}) {
  const texts = Texts["pt-BR"].forgotPass.firstStep;
  const onEmailSubmit = ({ email }) => {
    PasswordResetRequest(email, goNext);
  };
  return (
    <>
      <Styles.HeaderContainer>
        <Styles.BackButton onClick={toggleForgotPassword}>
          <ArrowBackIos />
        </Styles.BackButton>
        <Styles.LogoContainer>
          <Styles.Logo />
        </Styles.LogoContainer>
      </Styles.HeaderContainer>
      <Title>{texts.title}</Title>
      {texts.text}
      <FormHolder onSubmit={onEmailSubmit}>
        <InputEmail
          variant="standard"
          name="email"
          alternativeColors={2}
          color="secondary"
          required={texts.userMessage}
          inputLabel={texts.emailField}
          autoComplete={"username"}
        />
        <ButtonContained
          style={{ marginTop: 20, marginBottom: 10 }}
          disabled={isFetching}
          type="submit"
          name="button"
        >
          {texts.continueButton}
        </ButtonContained>
      </FormHolder>
    </>
  );
}
