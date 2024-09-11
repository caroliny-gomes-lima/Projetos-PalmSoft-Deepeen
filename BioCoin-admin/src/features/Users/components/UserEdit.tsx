import React from "react";
import Styles from "../styles/Styles";
import { Grid, makeStyles } from "@material-ui/core";
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
import { api } from "../../../services";
import { customModal, errorModal } from "../../../components/modals/utils";
import { FontStyles } from "../../../components";

const useStyles = makeStyles((theme: any) => {
  const { spacing } = theme;
  return {
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: spacing(2),
    },
    text: {
      ...FontStyles.regular18,
      fontSize: "20px",
      fontWeight: 400,
      marginTop: spacing(2),
    },
    ImageBox: {
      width: "75.93px",
      height: "68.323px",
      flexShrink: 0,
      marginTop: spacing(0),
    },
    paddingModal: {
      paddingInline: spacing(3.5),
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 15,
      marginTop: spacing(2),
    },
  };
});

function UserEdit({ UserDataTable, setChange, loadTable }) {
  const texts = Texts["pt-BR"].Main.Users;
  const classes = useStyles();
  const { call } = hooks.useRequest();

  const formatData = (item: Date): string => {
    const day = item.getDate();
    const month = item.getMonth() + 1;
    const year = item.getFullYear();

    const formattedDay = day.toString().padStart(2, "0");
    const formattedmonth = month.toString().padStart(2, "0");
    const formattedYear = year.toString().padStart(2, "0");

    return `${formattedDay}/${formattedmonth}/${formattedYear}`;
  };

  async function onSubmit(data) {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      null,
      api.EditUser(UserDataTable.id, {
        name: data.name,
        phone: data.phone,
      }),
      (response) => {
        if (response.ok) {
          setChange(false);
          loadTable();
        } else {
          customModal.setInfos("", [""], null, null, DrawModalInfo(), null);
        }
      }
    );
  }

  const DrawModalInfo = () => {
    const texts = Texts["pt-BR"].Main.Users.infoModal;
    return (
      <>
        <div className={classes.content}>
          <img className={classes.ImageBox} alt="" src={IconsBase64.Alert} />
          <div className={classes.text}>{texts.titleEdit}</div>
          <div className={classes.paddingModal}>
            <ButtonOutlined fullWidth={false} onClick={customModal.close}>
              {texts.cancelButton}
            </ButtonOutlined>
          </div>
        </div>
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
                  defaultValue={UserDataTable?.name}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <InputEmail
                  name="email"
                  label={texts.emailInput}
                  validation={validations.isEmailValid}
                  defaultValue={UserDataTable?.email}
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
                  defaultValue={UserDataTable?.phone}
                  placeholder="Digite um telefone..."
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="cpf"
                  label={texts.cpfInput}
                  defaultValue={masks.CPF(UserDataTable?.cpf)}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="birthDate"
                  label={texts.dateInput}
                  defaultValue={formatData(new Date(UserDataTable?.birthDate))}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} justifyContent="flex-start">
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <ButtonContained
                  name="submit"
                  action="submit"
                  //loading={loading}
                  customColor={Colors.lightBlue}
                  fullWidth={true}
                >
                  {texts.editButton}
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

export default UserEdit;
