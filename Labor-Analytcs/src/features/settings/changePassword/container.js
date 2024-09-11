import React from "react";
import { connect } from "react-redux";
import { Texts } from "../../../config";
import {
  ButtonContained,
  InputPassword,
  Input,
  ButtonOutlined,
} from "../../../components";
import { FormHolder } from "../../../FormConfig";
import { Creators } from "../reduxSagas";
import Styles from "../styles/changePasswordStyle";
import { Grid } from "@material-ui/core";
import { Close } from "@material-ui/icons";

function Login(props) {
  const texts = Texts["pt-BR"].settings.changePassword;
  const comparePasswords = (value, getFieldValue) => {
    const isValid = value === getFieldValue("password");

    return {
      isValid,
      errorMessage: "Senhas não conferem.",
    };
  };
  return (
    <Styles.Container>
      <Grid container spacing={1} justifyContent="flex-end">
        <FormHolder onSubmit={props.changePasswordRequest}>
          <Grid item xs={6} sm={6} md={2} lg={6}>
            <Input
              name="name"
              readOnly
              defaultValue={props.userInfos?.name}
              alternativeColors={2}
            />
          </Grid>

          <Grid item xs={6} sm={6} md={2} lg={6}>
            <InputPassword
              variant="standard"
              name="oldPassword"
              nextInput="password"
              color="secondary"
              required={texts.passwordMessage}
              inputLabel={texts.actualPassword}
            />
          </Grid>

          <Grid item xs={6} sm={6} md={2} lg={6}>
            <InputPassword
              variant="standard"
              name="password"
              nextInput="confirmPassword"
              color="secondary"
              autoComplete="new-password"
              required={texts.passwordMessage}
              inputLabel={texts.newPassword}
            />
          </Grid>

          <Grid item xs={6} sm={6} md={2} lg={6}>
            <InputPassword
              variant="standard"
              name="confirmPassword"
              nextInput="oldPassword"
              color="secondary"
              autoComplete="new-password"
              required={texts.passwordMessage}
              inputLabel={texts.passwordConfirmation}
              validation={comparePasswords}
            />
          </Grid>

          <Grid item xs={5} sm={6} md={2} lg={3}>
            <ButtonOutlined
              type="clearDefault"
              style={{ marginTop: "29px" }}
              startIcon={<Close />}
            >
              {texts.cancel}
            </ButtonOutlined>
          </Grid>
          <Grid item xs={5} sm={6} md={2} lg={3}>
            <ButtonContained
              style={{ marginTop: "29px" }}
              loading={props.isFetchingChangePassword}
              type="submit"
              name="button"
            >
              {texts.confirm}
            </ButtonContained>
          </Grid>
        </FormHolder>
      </Grid>
    </Styles.Container>
  );
}

function mapStateToProps(state) {
  const { isFetchingChangePassword } = state.settings;
  const { userInfos, isFetchingUserInfos: isFetching } = state.global;
  return {
    isFetchingChangePassword,
    userInfos,
    isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  const { changePasswordRequest } = Creators;
  return {
    changePasswordRequest: function (data) {
      return dispatch(changePasswordRequest(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Login));
