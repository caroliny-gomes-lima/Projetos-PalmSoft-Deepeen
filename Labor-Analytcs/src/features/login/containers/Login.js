import React from "react";
import { connect } from "react-redux";
import Title from "../../../components/strings/Title";
import { Texts } from "../../../config";
import {
  ButtonContained,
  InputPassword,
  InputEmail,
  ButtonOutlined,
} from "../../../components";
import { FormHolder } from "../../../FormConfig";
import { Styles } from "../styles";
import { Creators } from "../reduxSagas";
import { navigateTo, replaceTo } from "../../../navigation/navigate";
import { useVersion } from "../../../lib";

function Login(props) {
  const version = useVersion();
  const texts = Texts["pt-BR"].login;

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.LogoContainer>
          <Styles.Logo />
        </Styles.LogoContainer>
        <Title>{texts.title}</Title>
        <Styles.Subtitle>{texts.enterIn(localStorage.getItem("cd") ? localStorage.getItem("cd") : "COJ - Joinville (SC)")}</Styles.Subtitle>
        <FormHolder onSubmit={props.loginRequest}>
          <InputEmail
            variant="standard"
            name="username"
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
            color="secondary"
            autoComplete={"current-password"}
            required={texts.passwordMessage}
            inputLabel={texts.password}
          />
          <Styles.Link onClick={() => navigateTo["ForgotPassword"]()}>
            {texts.forgotPass}
          </Styles.Link>

          <ButtonContained
            style={{ marginTop: "auto", marginBottom: 10 }}
            loading={props.isFetching}
            type="submit"
            name="button"
          >
            {texts.enter}
          </ButtonContained>
          <ButtonOutlined
            onClick={() => {
              replaceTo.HomePreLogin();
            }}
            disabled={props.isFetching}
          >
            {texts.selectCD}
          </ButtonOutlined>
        </FormHolder>
        <Styles.Version>
          {Texts["pt-BR"].version}
          {version}
        </Styles.Version>
      </Styles.Content>
    </Styles.Container>
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
    loginRequest: function (data) {
      return dispatch(loginRequest(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Login));
