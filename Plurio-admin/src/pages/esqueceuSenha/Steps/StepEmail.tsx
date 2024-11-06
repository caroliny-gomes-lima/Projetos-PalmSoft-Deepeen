import React from "react";

import ptBr from "../../../config/texts/pt-br";

import { FormFull } from "form-full";
import { validations } from "../../../utils";
import Styles from "../EsqueceuSenhaStyles";
import { ButtonContained, ButtonOutlined, ButtonText, CustomText, DefaultLogo, InputEmail } from "../../../components";
import { Colors, SVG } from "../../../config";
import { Grid, makeStyles } from "@material-ui/core";
interface PageProps {
  goBack: () => void;
  onSubmit: (data: any) => void;
  loading: boolean;
}

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

function StepEmail({ goBack, onSubmit, loading }: PageProps): JSX.Element {
  const texts = ptBr.forgetPassword;
  const [buttonDisabled, setButton] = React.useState(true);
  const classes = useStyles();

  return (
    <FormFull onSubmit={onSubmit}>
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
          <Styles.Subtitle> {texts.subTitle[0]}</Styles.Subtitle>
          <Styles.text>{"O (*) indica campo obrigatório."}</Styles.text>
        </Styles.Header>
        <Styles.InputBox>
          <InputEmail
            name="email"
            label={texts.user}
            required={texts.userMessage}
            validation={validations.isEmailValid}
            onChange={() => {
              setButton(false);
            }}
          />
        </Styles.InputBox>
        <Grid container spacing={0} direction="row" justifyContent="flex-end">
          <Grid item xs={12} md={8} lg={3}>
            <ButtonOutlined
              label={texts.onBack}
              onClick={goBack}
            />
          </Grid>
          <Grid item xs={12} md={8} lg={4}>
            <ButtonContained
              name="continue"
              loading={loading}
              disabled={buttonDisabled || loading}
              feedback={true}
              action="submit"
              label={texts.emailConfirm}
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

export default StepEmail;
