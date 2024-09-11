import React from "react";
import Title from "../../../components/strings/Title";
import { Texts } from "../../../config";
import { ButtonContained, Select } from "../../../components";
import { FormHolder } from "../../../FormConfig";
import { Styles } from "../styles";
import { navigateTo } from "../../../navigation/navigate";
import { api } from "../../../services";

function HomePreLogin(props) {
  const cds = [
    { label: "COJ - Joinville (SC)", value: "COJ" },
    { label: "RCO - Rio Claro (SP)", value: "RCO" },
    { label: "EAA - Escada (PE)", value: "EAA" },
    { label: "FPP - Castro (PR)", value: "FPP" },
  ];

  async function submit(data) {
    localStorage.setItem("cd", cds.filter((filter) => filter.value === data.cd)[0].label)
    localStorage.setItem("cdValue", cds.filter((filter) => filter.value === data.cd)[0].value)

    api.changeApi(data.cd);
    navigateTo.Landing();

  }

  const texts = Texts["pt-BR"].login;

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.LogoContainer>
          <Styles.Logo />
        </Styles.LogoContainer>
        <Title>{texts.cdTitle}</Title>
        <FormHolder onSubmit={submit}>
          <Select
            name="cd"
            defaultValue={localStorage.getItem("cd") ? localStorage.getItem("cdValue") : "COJ"}
            inputLabel=""
            options={cds}
            customInput={true}
          />

          <ButtonContained
            style={{ marginTop: "auto" }}
            loading={props.isFetching}
            type="submit"
            name="button"
          >
            {texts.continue}
          </ButtonContained>
        </FormHolder>
      </Styles.Content>
    </Styles.Container>
  );
}

export default React.memo(HomePreLogin);
