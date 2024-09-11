import { Styles } from "../styles";
import Title from "../../../components/strings/Title";
import { FormHolder } from "../../../FormConfig";
import { Texts } from "../../../config";
import {
  ButtonContained,
  InputEmail,
  InputPassword,
} from "../../../components";
import { Grid } from "@material-ui/core";
import { Creators } from "../reduxSagas";
import { connect } from "react-redux";

function LoginContent({ toggleForgotPassword, ...props }) {
  const texts = Texts["pt-BR"].login;

  const onSubmit = (data) => {
    props.loginRequest(data);
  };
  return (
    <>
      <Styles.LogoContainer>
        <Styles.Logo />
      </Styles.LogoContainer>
      <Title>{texts.title}</Title>
      <FormHolder onSubmit={onSubmit}>
        <InputEmail
          variant="standard"
          name="username"
          alternativeColors={2}
          nextInput="password"
          color="secondary"
          required={texts.userMessage}
          inputLabel={texts.user}
          autoComplete={"username"}
        />
        <InputPassword
          variant="standard"
          name="password"
          nextInput="username"
          alternativeColors={2}
          color="secondary"
          autoComplete={"current-password"}
          required={texts.passwordMessage}
          inputLabel={texts.password}
        />
        <Grid container spacing={1} direction="row-reverse" mb={3}>
          <Grid item padd={10}>
            <Styles.ForgotPasswordButton onClick={toggleForgotPassword}>
              {texts.forgotPass}
            </Styles.ForgotPasswordButton>
          </Grid>
        </Grid>
        <ButtonContained
          style={{ marginTop: 20, marginBottom: 10 }}
          loading={props.isFetching}
          type="submit"
          name="button"
        >
          {texts.enter}
        </ButtonContained>
      </FormHolder>
    </>
  );
}

function mapStateToProps(state) {
  const { isFetching } = state.login;
  return {
    isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  const { loginRequest } = Creators;
  return {
    loginRequest: function (data, captcha) {
      return dispatch(loginRequest(data, captcha));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContent);
