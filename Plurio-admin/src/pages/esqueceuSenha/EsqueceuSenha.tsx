import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ptBr from "../../config/texts/pt-br";
import { Swiper } from "../../components/index";
import Styles from "./EsqueceuSenhaStyles";

import { hooks } from "../../utils";
import StepEmail from "./Steps/StepEmail";
import StepCode from "./Steps/StepCode";
import { customModal } from "../../components/modals/utils";
import StepPassword from "./Steps/StepPassword";

function EsqueceuSenha() {
  const texts = ptBr.login;
  //const version = packageJson.version;
  const navigate = useNavigate();
  const { loading, call } = hooks.useRequest();
  const [formData, setFormData] = useState<any>({});

  //Integração para opção esqueceu a senha-----------------
  const Submit = async (data) => { };

  const FinishStepOne = async (data, Callback) => {
    setFormData({ ...formData, ...data });
    Callback();
  };

  const FinishStepTwo = async (data, Callback) => {
    setFormData({ ...formData, ...data });
    Callback();
  };

  const FinishStepThree = async (data) => {

    setFormData({ ...formData, ...data });
    customModal.setInfos(
      "NOVA SENHA CADASTRADA",
      [
        "Você criou sua nova senha com sucesso! Acesse sua conta agora mesmo a partir da tela de Login.",
      ],
      {
        onClick: () => {
          navigate("/");
          customModal.close();
        },
        label: "IR PARA LOGIN",
      },
      null,
      null,
      true
    );
  };
  //---------------------------------------

  return (
    <Styles.ImageBG>
      <Swiper
        screens={[
          ({ goNext }) => (
            <StepEmail
              loading={loading}
              onSubmit={(data) => {
                FinishStepOne(data, goNext);
              }}
              goBack={() => navigate("/")}
            />
          ),
          ({ goNext, goPrevious }) => (
            <StepCode
              loadingOut={loading}
              onSubmit={(data) => {
                FinishStepTwo(data, goNext);
              }}
              goBack={() => goPrevious()}
              sendCode={() => { }}
            />
          ),
          ({ goNext, goPrevious }) => (
            <StepPassword
              onSubmit={(data) => {
                FinishStepThree(data);
              }}
              goBack={() => goPrevious()}
              loading={loading}
            />
          ),
        ]}
      />
    </Styles.ImageBG>
  );
}

export default EsqueceuSenha;
