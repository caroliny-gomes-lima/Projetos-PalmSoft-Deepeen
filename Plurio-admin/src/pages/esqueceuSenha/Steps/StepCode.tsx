import React from "react";

import ptBr from "../../../config/texts/pt-br";

import { ButtonContained, ButtonOutlined, ButtonText, CustomText, DefaultLogo } from "../../../components";
import Styles from "../EsqueceuSenhaStyles";
import { FormFull } from "form-full";
import { hooks } from "../../../utils";

import fonts from "../../../config/fonts";
import ReactCodeInput from "react-code-input";
import { Colors, Spacing, SVG, Theme } from "../../../config";
import { FontStyles } from "../../../components";
import { Grid, makeStyles } from "@material-ui/core";

interface PageProps {
  goBack: () => void;
  onSubmit: (data: any) => void;
  loadingOut: () => void;
  sendCode?: () => void;
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

function StepCode({ onSubmit, goBack, loadingOut, sendCode }) {
  const texts = ptBr.forgetPassword;
  const classes = useStyles();

  const [ref, setRef] = React.useState<any>(null);

  const inputRef = React.useRef<any>();
  const [value, setValue] = React.useState("");

  const { loading, call } = hooks.useRequest();

  const sendTokenData = () => {
    if (inputRef?.current) {
      const code = inputRef.current.state.value;
      onSubmit({ code: code });
    }
  };

  return (
    <FormFull formRef={setRef} onSubmit={() => { }}>
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
          <Styles.Subtitle> {texts.subTitle[1]}</Styles.Subtitle>
          <Styles.text>{"O (*) indica campo obrigatório."}</Styles.text>
        </Styles.Header>
        <div>
          <Styles.LabelContainer>
            <Styles.Subtitle>CÓDIGO:</Styles.Subtitle>
          </Styles.LabelContainer>
          <Styles.MarginBottom center>
            <ReactCodeInput
              inputStyle={{
                fontFamily: FontStyles.semibold16.fontSize,
                margin: "4px",
                MozAppearance: "textfield",
                width: "56px",

                height: "50px",
                textAlign: "center",
                fontSize: "22px",
                color: "#10265A",
                border: "1px solid #626366",
                borderRadius: Spacing(0.8),
              }}
              onChange={(a) => {
                setValue(a);
              }}
              value={value}
              ref={inputRef}
              forceUppercase
              type="text"
              fields={5}
              name={"code"}
              inputMode={"numeric"}
            />

            <CustomText
              fontSize={1.5}
              fontFamily={fonts.medium}
              textColor={Colors.black}
              style={{
                padding: Spacing(2),
              }}
            >
              {"Reenviar (0:00)"}
            </CustomText>

          </Styles.MarginBottom>
        </div>

        <Grid container spacing={0} direction="row" justifyContent="flex-end">
          <Grid item xs={12} md={8} lg={3}>
            <ButtonOutlined
              label={texts.onBack}
              onClick={() => goBack()}
            />
          </Grid>
          <Grid item xs={12} md={8} lg={4}>
            <ButtonContained
              name="continue"
              loading={loading || loadingOut}
              disabled={loading || value.length < 5 ? true : false}
              feedback={true}
              onClick={() => sendTokenData()}
              label={texts.continue[1]}
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

export default StepCode;
