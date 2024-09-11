import React from "react";
import { connect } from "react-redux";
import { Texts } from "../../../config";
import {
  ButtonContained,
  Checkbox,
  Input,
  InputEmail,
  InputPassword,
  InputRowContainer,
} from "../../../components";
import { FormHolder } from "../../../FormConfig";
import { Creators } from "../reduxSagas";
import Styles from "../styles/changePasswordStyle";
import { Grid } from "@material-ui/core";

function Login(props) {
  const texts = Texts["pt-BR"].settings.userSettings.userRegister;
  const comparePasswords = (value, getFieldValue) => {
    const isValid = value === getFieldValue("password");

    return {
      isValid,
      errorMessage: "Senhas não conferem.",
    };
  };
  return (
    <Styles.Container>
      <FormHolder onSubmit={props.userRegisterRequest}>
        <InputRowContainer xs={12} md={6}>
          <Input
            variant="standard"
            name="name"
            nextInput="email"
            color="secondary"
            autoComplete="off"
            required={texts.fullNameMessage}
            inputLabel={texts.fullName}
          />
          <InputEmail
            variant="standard"
            name="email"
            nextInput="password"
            color="secondary"
            autoComplete="off"
            required={texts.emailMessage}
            inputLabel={texts.email}
          />
        </InputRowContainer>
        <InputRowContainer xs={12} md={6}>
          <InputPassword
            variant="standard"
            name="password"
            nextInput="confirmPassword"
            color="secondary"
            autoComplete="new-password"
            required={texts.passwordMessage}
            inputLabel={texts.password}
          />
          <InputPassword
            variant="standard"
            name="confirmPassword"
            nextInput="name"
            color="secondary"
            autoComplete="new-password"
            required={texts.passwordConfirmMessage}
            inputLabel={texts.passwordConfirm}
            validation={comparePasswords}
          />
        </InputRowContainer>

        <Grid container spacing={1}>
          <Grid item xs={10} sm={4} md={3} lg={2}>
            <Checkbox name="isAdmin" label={texts.userAdmin} />
          </Grid>

          <Grid item xs={12} sm={6} md={3} lg={2}>
            <ButtonContained
              style={{ marginTop: "auto" }}
              loading={props.isFetchingUserRegister}
              type="submit"
              name="button"
            >
              {texts.register}
            </ButtonContained>
          </Grid>
        </Grid>
      </FormHolder>
    </Styles.Container>
  );
}

function mapStateToProps(state) {
  const { isFetchingUserRegister } = state.settings;
  return {
    isFetchingUserRegister,
  };
}

function mapDispatchToProps(dispatch) {
  const { userRegisterRequest } = Creators;
  return {
    userRegisterRequest: function (data) {
      return dispatch(userRegisterRequest(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Login));
