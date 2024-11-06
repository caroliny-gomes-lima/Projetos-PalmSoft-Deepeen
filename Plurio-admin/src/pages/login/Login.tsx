import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ptBr from "../../config/texts/pt-br";
import {
  ButtonContained,
  ButtonOutlined,
  CustomText,
  DefaultLogo,
  InputEmail,
  InputPassword,
} from "../../components/index";
import Styles from "./LoginStyles";
import { FormFull } from "form-full";
import { validations } from "../../utils";
import { hooks, SessionStorage } from "../../utils";
import { StorageContext } from "../../contexts/StorageContext";

import { api } from "../../services";
import { paths } from "../../navigation/navigate";
import { Colors, SVG } from "../../config";
import { Grid, makeStyles } from "@material-ui/core";
import InputRadios from "../../components/inputs/InputRadios";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    justifyContent: "space-around",
    display: "flex",
    marginTop: "40px",
  },
  iconStyle: {
    width: "15px",
    height: "15px",
    marginLeft: "5px",
    marginRight: "2px",
    fill: "#7A12F5",
  },
}));

function Login() {
  const texts = ptBr.login;

  const navigate = useNavigate();
  const { loading, call } = hooks.useRequest();
  const classes = useStyles();
  const { addData, setIsLogged } = useContext<any>(StorageContext);

  //Integração para login----------------------------------------
  const Submit = async (data) => {
    call(null, api.getToken(data), (response) => {
      if (response.ok) {
        setIsLogged(true);
        addData("userData", response?.data?.username);
        SessionStorage.setItem(
          "token",
          response?.data?.type + " " + response?.data?.token
        );
      }
    });
  };

  const [buttonDisabled, setButton] = React.useState(true);

  return (
    <Styles.ImageBG>
      <FormFull onSubmit={Submit}>
        <Styles.Content>
          <Styles.LogoContainer>
            <DefaultLogo />
          </Styles.LogoContainer>

          <Styles.Header>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 8,
              }}
            >
              <SVG.DoorEnterIcon /><Styles.Title>{texts.title}</Styles.Title>
            </div>
            <Styles.Subtitle>{texts.subTitle}</Styles.Subtitle>
            <Styles.text>{texts.textRequired}</Styles.text>
          </Styles.Header>
          <InputEmail
            name="username"
            label={texts.user}
            required={texts.userMessage}
            validation={validations.isEmailValid}
            placeholder="E-mail"
          />
          <InputPassword
            name="password"
            label={texts.password}
            required={texts.passwordMessage}
            validation={validations.isPassword}
            onChange={() => {
              setButton(false);
            }}
            placeholder="Digite sua senha"
          />

          <div
            style={{
              marginBottom: "20px"
            }}
          >
            <InputRadios
              disableError
              name="team"
              options={[
                { value: "Limpeza", label: "Lembrar dados de usuário" },
              ]}
              defaultValue={""}
              white
            />
          </div>
          <Grid container spacing={0} direction="row" justifyContent="flex-end">
            <Grid item xs={12} md={8} lg={5}>
              <ButtonOutlined
                name="submit"
                loading={loading}
                feedback={true}
                action="submit"
                type="submit"
                label={texts.forgotPass}
                onClick={() => navigate(paths.forgetPassword)}
              />
            </Grid>
            <Grid item xs={12} md={8} lg={3}>
              <ButtonContained
                name="submit"
                loading={loading}
                disabled={buttonDisabled}
                feedback={true}
                action="submit"
                type="submit"
                label={texts.enter}
              />
            </Grid>
          </Grid>
          <div className={classes.footer}>
            <CustomText textColor={Colors.purple}>
              {"Plurio Web Admin"}
              <SVG.copyrightIcon className={classes.iconStyle} />
              {"2024"}
            </CustomText>
          </div>
        </Styles.Content>
      </FormFull>
    </Styles.ImageBG>
  );
}

export default Login;
