import React from "react";
import Styles from "../styles/styles.js";
import { Grid } from "@material-ui/core";
import { Texts } from "../../../../config";
import FormHolder from "../../../../FormConfig/FormHolder.js";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
import {
  ButtonOutlined,
  ButtonContained,
  Input,
  InputDate,
  InputEmail,
} from "../../../../components";

function FiltersCard({ sendParameters }) {
  const texts = Texts["pt-BR"].users.usersFilters;
  return (
    <>
      <Styles.FiltersCard>
        <Styles.HeaderContainer $setBorderBottom $marginBottom>
          <Styles.HeaderContent>
            <Styles.Title>{texts.title}</Styles.Title>
          </Styles.HeaderContent>
        </Styles.HeaderContainer>
        <Styles.Content>
          <Styles.CardContent>
            <Styles.HeaderContainer>
              <Styles.IconGeralData />
              <Styles.SubTitle>{texts.geralData.title}</Styles.SubTitle>
            </Styles.HeaderContainer>

            <Grid container spacing={1} direction="row">
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Input
                  small
                  defaultBorder
                  disableError
                  name="userName"
                  inputLabel={"Nome de Usuário"}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <InputEmail
                  small
                  variant="standard"
                  name="userEmail"
                  alternativeColors={2}
                  inputLabel={"Email"}
                  autoComplete={"username"}
                  defaultBorder
                  disableError
                />
              </Grid>
            </Grid>
          </Styles.CardContent>

          <Styles.CardContent>
            <Styles.HeaderContainer $marginBottom>
              <Styles.IconRegistry />
              <Styles.SubTitle>{texts.registry.title}</Styles.SubTitle>
            </Styles.HeaderContainer>

            <Grid container spacing={2} direction="row">
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <ContainerInputs
                  inputLabel={texts.registry.dateStart}
                  setBorder
                  children={<InputDate small disableError />}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <ContainerInputs
                  inputLabel={texts.registry.dateEnd}
                  setBorder
                  children={<InputDate small disableError />}
                />
              </Grid>
            </Grid>
          </Styles.CardContent>

          <Grid container spacing={2} direction="row">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ButtonContained type="submit" name="button">
                {texts.applyFilters}
              </ButtonContained>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ButtonOutlined>{texts.clearFilters}</ButtonOutlined>
            </Grid>
          </Grid>
        </Styles.Content>
      </Styles.FiltersCard>

      <Styles.FiltersCard>
        <Styles.HeaderContainer>
          <Styles.HeaderContent>
            <Styles.Title>{texts.blackList.title}</Styles.Title>
          </Styles.HeaderContent>
        </Styles.HeaderContainer>

        <FormHolder onSubmit={sendParameters}>
          <Styles.Content>
            <Styles.CardContent>
              <Styles.HeaderContainer>
                <Styles.IconBlackList />
                <Styles.SubTitle>{texts.blackList.subTitle}</Styles.SubTitle>
              </Styles.HeaderContainer>

              <Grid container spacing={1} direction="row">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <InputEmail
                    small
                    variant="standard"
                    name="email"
                    alternativeColors={2}
                    inputLabel={"Email"}
                    autoComplete={"username"}
                    defaultBorder
                    disableError
                  />
                </Grid>
              </Grid>
            </Styles.CardContent>
            <Grid container spacing={1} direction="row" justify="flex-end">
              <Grid item xs={8} sm={5} md={5} lg={6}>
                <ButtonContained type="submit" name="button">
                  {texts.blackList.confirmButtom}
                </ButtonContained>
              </Grid>
            </Grid>
          </Styles.Content>
        </FormHolder>
      </Styles.FiltersCard>
    </>
  );
}

export default FiltersCard;
