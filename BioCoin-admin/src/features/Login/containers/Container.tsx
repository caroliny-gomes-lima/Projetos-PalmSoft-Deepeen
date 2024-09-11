import React, { useContext } from "react";
import { Styles } from "../styles";
import { Colors, SVG } from "../../../config";
import {
  ButtonContained,
  DefaultLogo,
  InputEmail,
  InputPassword,
} from "../../../components";
import { Grid } from "@material-ui/core";
import ptBr from "../../../config/texts/pt-br";
import { SessionStorage, hooks, validations } from "../../../utils";
import { FormFull } from "form-full";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services";
import { StorageContext } from "../../../contexts/StorageContext";
import { paths } from "../../../navigation/navigate";
import { errorModal } from "../../../components/modals/utils";

function Container() {
  const texts = ptBr.login;

  const navigate = useNavigate();
  const { loading, call } = hooks.useRequest();
  const { addData, setIsLogged } = useContext<any>(StorageContext);
  const [buttonDisabled, setButton] = React.useState(true);

  const Submit = async (data) => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(null, api.Login(data), (response) => {
      if (response.ok) {
        setIsLogged(true);
        call(null, api.GetUser(), (data) => {
          if (data.ok) {
            addData("userData", data?.data);
            //SessionStorage.setItem("data", data?.data)
          }
        });
        navigate(paths.home);
      } else {
        window.alert(response);
      }

    });
  };

  return (
    <>
      <FormFull onSubmit={Submit}>
        <Styles.Container>
          <Styles.HeaderContainer>
            <DefaultLogo maxWidth={40} BlackLogo />
          </Styles.HeaderContainer>
          <Styles.Line />
          <Styles.content>
            <InputEmail
              customColor={Colors.white}
              customLabel
              name="username"
              label={texts.user}
              validation={validations.isEmailValid}
              placeholder="Digite seu email..."
            />

            <InputPassword
              customColor={Colors.white}
              customLabel
              name="password"
              label={texts.password}
              validation={validations.isPassword}
              placeholder="Digite sua senha..."
              onChange={() => {
                setButton(false);
              }}
            />

            <Grid container spacing={3} direction="row" justifyContent="center">
              <Grid item xs={12} sm={6} md={6} lg={5}>
                <ButtonContained
                  customColor={Colors.green}
                  name="submit"
                  loading={loading}
                  disabled={buttonDisabled}
                  feedback={true}
                  action="submit"
                  type="submit"
                  label={texts.enter}
                >
                  {texts.enter}
                </ButtonContained>
              </Grid>
            </Grid>
          </Styles.content>
        </Styles.Container>
      </FormFull>
    </>
  );
}

export default Container;
