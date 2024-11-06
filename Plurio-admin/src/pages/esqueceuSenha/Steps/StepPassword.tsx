import React from "react";

import ptBr from "../../../config/texts/pt-br";

import {
  ButtonContained,
  ButtonOutlined,
  ButtonText,
  CustomText,
  DefaultLogo,
  InputPassword,
} from "../../../components";
import Styles from "../EsqueceuSenhaStyles";
import { FormFull } from "form-full";
import { Colors, SVG } from "../../../config";
import { Grid, makeStyles } from "@material-ui/core";

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

function StepPassword({ onSubmit, goBack, loading }) {
  const texts = ptBr.forgetPassword;

  const [buttonDisabled, setButton] = React.useState(true);
  const [error, setError] = React.useState(false);
  const classes = useStyles();

  const validatePassword = (data) => {
    if (data.newPassword === data.confirmNewPassword) {
      setError(false);
      onSubmit({ password: data.confirmNewPassword });
    } else {
      setError(true);
    }
  };

  return (
    <FormFull onSubmit={validatePassword}>
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
            <SVG.keyIcon /><Styles.Title>{texts.titleStepOne}</Styles.Title>
          </div>
          <Styles.Subtitle>{texts.subTitle[2]}</Styles.Subtitle>
          <Styles.text>{"O (*) indica campo obrigatório."}</Styles.text>
        </Styles.Header>
        <Styles.InputBox>
          <InputPassword
            name="newPassword"
            label={texts.password}
            required={texts.passwordMessage}
            onChange={() => {
              setButton(false);
              setError(false);
            }}
          />
          <InputPassword
            name="confirmNewPassword"
            label={"Confirmação de Senha"}
            required={texts.passwordMessage}
            onChange={() => {
              setButton(false);
              setError(false);
            }}
          />
          {error && (
            <Styles.ErrorMessage>
              As senhas não correspondem.
            </Styles.ErrorMessage>
          )}
        </Styles.InputBox>

        <Grid container spacing={0} direction="row" justifyContent="flex-end">
          <Grid item xs={12} md={8} lg={3}>
            <ButtonOutlined
              label={texts.onBack}
              onClick={goBack}
            />
          </Grid>
          <Grid item xs={12} md={8} lg={5}>
            <ButtonContained
              loading={loading}
              disabled={buttonDisabled || loading}
              feedback={true}
              action="submit"
              label={texts.continue[2]}
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
  );
}

export default StepPassword;
