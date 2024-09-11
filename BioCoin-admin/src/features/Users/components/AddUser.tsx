import React from "react";
import Styles from "../styles/Styles";
import { Grid } from "@material-ui/core";
import {
  ButtonContained,
  ButtonOutlined,
  IconsBase64,
  Input,
  InputDate,
  InputEmail,
  InputPassword,
} from "../../../components";
import { FormFull } from "form-full";
import { Colors, Texts } from "../../../config";
import { hooks, masks, validations } from "../../../utils";
import { Add } from "@material-ui/icons";
import { api } from "../../../services";
import { customModal, errorModal } from "../../../components/modals/utils";

function AddUser({ setChange, loadTable }) {
  const texts = Texts["pt-BR"].Main.Users;
  const { loading, call } = hooks.useRequest();

  const Submit = async (data) => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(null, api.RegisterUser(data), (response) => {
      if (response.ok) {
        setChange(false);
        loadTable();
      } else {
        customModal.setInfos("", [""], null, null, DrawModalInfo(), null);
      }
    });
  };

  const DrawModalInfo = () => {
    const texts = Texts["pt-BR"].Main.Users.infoModal;
    return (
      <>
        <Styles.contentModalDelete>
          <Styles.ImageIcon alt="" src={IconsBase64.Alert} />
          <Styles.TextsModal>{texts.titleAdd}</Styles.TextsModal>
          <Styles.paddingModal>
            <ButtonOutlined fullWidth={false} onClick={customModal.close}>
              {texts.cancelButton}
            </ButtonOutlined>
          </Styles.paddingModal>
        </Styles.contentModalDelete>
      </>
    );
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={6} md={6} lg={8}>
        <Styles.Container $changeBackground>
          <FormFull onSubmit={Submit}>
            <Grid container spacing={3} direction="row">
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="name"
                  label={texts.nameInput}
                  mask={masks.capitalizeAll}
                  validation={validations.isValidFullname}
                  required={texts.requiredMessage}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <InputEmail
                  name="email"
                  label={texts.emailInput}
                  validation={validations.isEmailValid}
                  required={texts.requiredMessage}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <InputPassword
                  name="password"
                  label={texts.passwordInput}
                  validation={validations.isPassword}
                  required={texts.requiredMessage}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="phone"
                  label={texts.phoneIput}
                  mask={masks.inputMaskTELWithDDD}
                  maskToSubmit={masks.removeNumberMask}
                  required={texts.requiredMessage}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="cpf"
                  label={texts.cpfInput}
                  mask={masks.CPF}
                  maskToSubmit={masks.onlyNumbers}
                  required={texts.requiredMessage}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <InputDate name="birthDate" label={texts.dateInput} required={texts.requiredMessage} />
              </Grid>
            </Grid>

            <Grid container spacing={2} justifyContent="flex-start">
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <ButtonContained
                  name="submit"
                  action="submit"
                  loading={loading}
                  disabled={loading}
                  startIcon={<Add />}
                  customColor={Colors.lightBlue}
                  fullWidth={true}
                >
                  {texts.saveButton}
                </ButtonContained>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <ButtonOutlined
                  customColor={Colors.gray}
                  fullWidth={true}
                  onClick={() => setChange(false)}
                >
                  {texts.cancelButton}
                </ButtonOutlined>
              </Grid>
            </Grid>
          </FormFull>
        </Styles.Container>
      </Grid>
    </Grid>
  );
}

export default AddUser;
