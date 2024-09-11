import React from "react";
import Styles from "../styles/Styles";
import { Texts } from "../../../../config";
import { Grid } from "@material-ui/core";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";

function ApartmentDetailsInput() {
  const texts = Texts["pt-BR"].beHome.RegisterApartment;

  return (
    <>
      <Styles.HeaderContent>
        <Styles.Title>{texts.ApartmentDetails.title}</Styles.Title>
      </Styles.HeaderContent>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <ContainerInputs
            setBorder
            inputLabel={
              <Styles.InputTitle>
                {texts.ApartmentDetails.inputLabel[0]}
              </Styles.InputTitle>
            }
            children={
              <Styles.TextInput
                placeholder="Digite o nome do espaço"
                name="StudioDetailsName"
                disableError
              />
            }
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <ContainerInputs
            setBorder
            inputLabel={
              <Styles.InputTitle>
                {texts.ApartmentDetails.inputLabel[1]}
              </Styles.InputTitle>
            }
            children={
              <Styles.TextInput
                placeholder="R$ 0,00"
                name="StudioDetailsPrice"
                disableError
              />
            }
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <ContainerInputs
            setBorder
            inputLabel={
              <Styles.InputTitle>
                {texts.ApartmentDetails.slectLabel}
              </Styles.InputTitle>
            }
            children={
              <Styles.NumberInput
                textIcon={"M²"}
                name="StudioDetailsSize"
                disableError
              />
            }
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Styles.TextBox>
            <Styles.HeadertextBox>
              <Styles.InputTitle>
                {texts.ApartmentDetails.inputLabel[2]}
              </Styles.InputTitle>
            </Styles.HeadertextBox>
            <Styles.TextInput
              name="StudioDetailsDescription"
              $setFontSize
              disableError
            />
          </Styles.TextBox>
        </Grid>
      </Grid>
    </>
  );
}

export default ApartmentDetailsInput;
