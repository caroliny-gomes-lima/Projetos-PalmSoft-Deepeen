import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import Styles from "../styles/Styles";
import { useNavigate } from "react-router-dom";
import { FormFull } from "form-full";
import { Input, InputPassword } from "../../../components";
import { Spacing, Texts, fonts } from "../../../config";
import { hooks, masks, validations } from "../../../utils";
import { paths } from "../../../navigation/navigate";
import { api } from "../../../services";
import { customModal, errorModal } from "../../../components/modals/utils";
import useUser from "../../../utils/useUser";
import alerts from "../../../utils/Alerts";

function Container() {
  const texts = Texts["pt-BR"].settings.profile;
  const navigate = useNavigate();
  const { call, loading } = hooks.useRequest();
  const { userData, updateUser } = useUser();
  const [nameInput, setNameInput] = React.useState<boolean>(false);
  const [phoneInput, setPhoneInput] = React.useState<boolean>(false);

  const Submit = async (userInfo) => {
    const data = {
      name: userInfo.name,
      password: userInfo.password,
      phone: userInfo.phone !== "" ? userInfo.phone : null,
    };
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(null, api.EditMyUser(data), (response) => {
      if (response.ok) {
        updateUser(response.data);
        alerts.alertSuccess("Dados de perfil editados com sucesso!");
        //confirmEditModal();
      }
    });
  };

  const confirmEditModal = () => {
    customModal.setInfos(
      "Edição de perfil",
      ["Dados de perfil editados com sucesso!"],
      {
        label: "ok",
        onClick: () => {
          customModal.close();
          navigate(paths.profile);
        },
      },
      null,
      null
    );
  };

  const formatDate = (date: string) => {
    const str = date?.split("-");
    let finalDate = `${str[2]}/${str[1]}/${str[0]}`;
    return finalDate;
  };

  return (
    <>
      <Styles.Container>
        {loading ? (
          <CircularProgress />
        ) : userData ? (
          <FormFull onSubmit={Submit}>
            <Grid container spacing={3} direction="row">
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="name"
                  label={texts.fullname}
                  mask={masks.capitalizeAll}
                  validation={validations.isValidFullname}
                  defaultValue={userData?.name}
                  required={texts.required}
                  onChange={() => setNameInput(true)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="email"
                  label={texts.email}
                  validation={validations.isEmailValid}
                  placeholder={userData?.email}
                  readOnly
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <InputPassword
                  name="password"
                  label={texts.password}
                  validation={validations.isPassword}
                  placeholder="******"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="phone"
                  label={texts.phone}
                  validation={validations.checkPhone}
                  mask={masks.inputMaskTELWithDDD}
                  required={texts.required}
                  defaultValue={userData?.phone}
                  maskToSubmit={masks.removeNumberMask}
                  onChange={() => setPhoneInput(true)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="cpf"
                  label={texts.cpf}
                  placeholder={masks.CPF(userData?.cpf)}
                  readOnly
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="birthDate"
                  label={texts.birthDate}
                  placeholder={formatDate(userData?.birthDate)}
                  readOnly
                />
              </Grid>
            </Grid>

            <Styles.SaveButton
              action="submit"
              name="submit"
              type="submit"
              //disabled={nameInput && phoneInput ? false : true}
              loading={loading}
              feedback={true}
            >
              {texts.saveButton}
            </Styles.SaveButton>
          </FormFull>
        ) : (
          <p
            style={{
              margin: 0,
              fontFamily: fonts.semibold,
              fontSize: Spacing(3),
              textAlign: "center",
            }}
          >
            Dados não encontrados
          </p>
        )}
      </Styles.Container>
    </>
  );
}

export default Container;
