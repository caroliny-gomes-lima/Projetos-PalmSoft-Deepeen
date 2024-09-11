import React from "react";
import Styles from "../styles/Styles";
import { Grid } from "@material-ui/core";
import { FormFull } from "form-full";
import { Colors, Texts } from "../../../config";
import { hooks, masks, validations } from "../../../utils";
import { api } from "../../../services";
import { customModal, errorModal } from "../../../components/modals/utils";
import {
  ButtonContained,
  ButtonOutlined,
  IconsBase64,
  Input,
  InputEmail,
} from "../../../components";
import ResponseError from "../../../services/helpers/ResponseError";
import alerts from "../../../utils/Alerts";
import { Add } from "@material-ui/icons";

function CustomerEdit({ CustomerDataTable, setChange, loadTable }) {
  const texts = Texts["pt-BR"].Main.Customers;
  const { loading, call } = hooks.useRequest();

  async function onSubmit(data) {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      null,
      api.EditUser(CustomerDataTable.id, {
        name: data.name,
        phone: data.phone,
        newPassword: data.password,
      }),
      (response) => {
        const errorResponse = new ResponseError(response);
        if (response.ok) {
          alerts.alertSuccess(texts.infoModal.ResponseTextSuccess);
          setChange(false);
          loadTable();
        } else {
          customModal.setInfos("", [""], null, null, DrawModalInfo(null), null);
        }
      }
    );
  }

  const DrawModalInfo = (ResponseMessageError: any) => {
    const texts = Texts["pt-BR"].Main.Customers.infoModal;
    return (
      <>
        <Styles.contentModalDelete>
          <Styles.ImageIcon alt="" src={IconsBase64.Alert} />
          <Styles.TextsModal>{texts.titleEdit}</Styles.TextsModal>
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
          <FormFull onSubmit={onSubmit}>
            <Grid container spacing={3} direction="row">
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="name"
                  label={texts.nameInput}
                  defaultValue={CustomerDataTable?.name}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <InputEmail
                  name="email"
                  label={texts.emailInput}
                  validation={validations.isEmailValid}
                  defaultValue={CustomerDataTable?.email}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="password"
                  label={texts.passwordInput}
                  validation={validations.isPassword}
                  placeholder="******"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="phone"
                  label={texts.phoneIput}
                  validation={validations.checkPhone}
                  mask={masks.inputMaskTELWithDDD}
                  maskToSubmit={masks.removeNumberMask}
                  defaultValue={CustomerDataTable?.phone}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="cpf"
                  label={texts.cpfInput}
                  defaultValue={masks.CPF(CustomerDataTable?.cpf)}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="birthDate"
                  label={texts.dateInput}
                  defaultValue={masks.formatDate(CustomerDataTable.birthDate)}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} justifyContent="flex-start">
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <ButtonContained
                  startIcon={<Add />}
                  customColor={Colors.lightBlue}
                  action="submit"
                  loading={loading}
                  disabled={loading}
                  fullWidth={true}
                >
                  {texts.saveButton}
                </ButtonContained>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={2}>
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

export default CustomerEdit;
