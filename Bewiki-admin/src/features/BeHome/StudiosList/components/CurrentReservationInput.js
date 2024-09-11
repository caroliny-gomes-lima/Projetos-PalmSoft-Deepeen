import React from "react";
import Styles from "../styles/StyledDetails";
import { Texts } from "../../../../config";
import { Grid } from "@material-ui/core";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
import DropdownActionSelect from "../../../../components/buttons/DropdownActionSelect";
import { ArrowDropDown } from "@material-ui/icons";

function CurrentReservationInput({ studioData }) {
  const texts = Texts["pt-BR"].beHome.StudioDetailsList;

  return (
    <>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <ContainerInputs
            setBorder
            inputLabel={
              <Styles.InputTitle>{texts.form.reservation[0]}</Styles.InputTitle>
            }
            children={
              <Styles.TextInput
                name="username"
                defaultValue={"Afonso Mathias Santos Jr"}
                disableError
                readOnly
              />
            }
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <ContainerInputs
            setBorder
            inputLabel={
              <Styles.InputTitle>{texts.form.reservation[1]}</Styles.InputTitle>
            }
            children={
              <Styles.TextInput
                name="checkIn"
                defaultValue={"15/03/2022"}
                disableError
                readOnly
              />
            }
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <ContainerInputs
            setBorder
            inputLabel={
              <Styles.InputTitle>{texts.form.reservation[2]}</Styles.InputTitle>
            }
            children={
              <Styles.TextInput
                name="checkOut"
                defaultValue={"20/03/2022"}
                disableError
                readOnly
              />
            }
          />
        </Grid>
      </Grid>
      <Styles.SelectContainer>
          <Styles.SelectContent>
            <Styles.SelectText>AÇÕES</Styles.SelectText>
            <DropdownActionSelect
              customIcon={<ArrowDropDown style={{fill: "#FFF"}} />}
              options={[
                {
                  action: () => console.log("hallo"),
                  name: "Disponível",
                },
                {
                  action: () => console.log("hallo"),
                  name: "Em Limpeza",
                },
              ]}
            />
          </Styles.SelectContent>
      </Styles.SelectContainer>
      
    </>
  );
}

export default CurrentReservationInput;
