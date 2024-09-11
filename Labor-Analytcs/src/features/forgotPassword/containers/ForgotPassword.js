import React from "react";
import { connect } from "react-redux";
import Title from "../../../components/strings/Title";
import { Texts } from "../../../config";
import {
  ButtonContained,
  ButtonOutlined,
  InputPassword,
  Input,
  InputEmail,
} from "../../../components";
import { FormHolder } from "../../../FormConfig";
import { Styles } from "../styles";
import { Creators } from "../reduxSagas";
import { replaceTo } from "../../../navigation/navigate";
import { useVersion } from "../../../lib";

function Login(props) {
  const version = useVersion();

  const submit = (data) => {
    if (data.password && data.code) {
      props.recoveryPasswordNewPasswordRequest(data.password, data.code);
    } else if (data.code) {
      props.recoveryPasswordCodeRequest(data.code);
    } else {
      props.recoveryPasswordRequest(data.email);
    }
  };

  const texts = Texts["pt-BR"].forgotPass;
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.LogoContainer>
          <Styles.Logo />
        </Styles.LogoContainer>
        <Title>{texts.title}</Title>
        <Styles.Subtitle>{texts.subTitle}</Styles.Subtitle>
        <FormHolder onSubmit={submit}>
          <InputEmail
            readOnly={Boolean(props.email)}
            required={texts.inputEmailRequiredMessage}
            inputLabel={texts.inputEmailLabel}
            name="email"
            nextInput="email"
            variant="standard"
            color="secondary"
          />
          <Input
            disabled={!props.email}
            readOnly={Boolean(props.token)}
            name="code"
            nextInput="code"
            inputLabel={texts.inputCodeLabel}
            variant="standard"
            color="secondary"
          />
          <InputPassword
            disabled={!props.token}
            variant="standard"
            name="password"
            autoComplete="new-password"
            color="secondary"
            nextInput="confirmPass"
            inputLabel={texts.inputPasswordLabel}
            required={!props.token ? null : texts.inputPasswordRequiredMessage}
          />
          <InputPassword
            disabled={!props.token}
            variant="standard"
            name="confirmPass"
            autoComplete="new-password"
            nextInput="newPass"
            color="secondary"
            required={
              !props.token ? null : texts.inputConfirmPasswordRequiredMessage
            }
            inputLabel={texts.inputConfirmPasswordLabel}
            validation={(value, getFieldValue) => {
              const isValid = value === getFieldValue("password");

              return {
                isValid,
                errorMessage: "Senhas não conferem.",
              };
            }}
          />
          <ButtonContained
            name="connect"
            type="submit"
            style={{ marginTop: "auto", marginBottom: 10 }}
            loading={props.isFetching}
          >
            {props.token
              ? texts.submitPassButon
              : props.email
              ? texts.submitCodeButton
              : texts.submitEmailButton}
          </ButtonContained>
          <ButtonOutlined
            onClick={() => {
              props.recoveryPasswordClearData();
              replaceTo.Landing();
            }}
            disabled={props.isFetching}
          >
            {texts.goBack}
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
  const { isFetching, success, email, token } = state.recoveryPassword;
  return {
    isFetching,
    email,
    success,
    token,
  };
}

function mapDispatchToProps(dispatch) {
  const {
    recoveryPasswordRequest,
    recoveryPasswordClearData,
    recoveryPasswordCodeRequest,
    recoveryPasswordNewPasswordRequest,
  } = Creators;
  return {
    recoveryPasswordRequest(email) {
      return dispatch(recoveryPasswordRequest(email));
    },
    recoveryPasswordCodeRequest(code) {
      return dispatch(recoveryPasswordCodeRequest(code));
    },
    recoveryPasswordNewPasswordRequest(password, code) {
      return dispatch(recoveryPasswordNewPasswordRequest(password, code));
    },
    recoveryPasswordClearData() {
      return dispatch(recoveryPasswordClearData());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
