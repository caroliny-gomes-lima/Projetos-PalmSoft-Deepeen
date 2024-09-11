import React from "react";
import Styles from "../styles/StyledDetails";
import { Texts } from "../../../../config";
import { Grid } from "@material-ui/core";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
import { Filters } from "../../../../lib";

function StudioDataInput({ studioData }) {
  const texts = Texts["pt-BR"].beHome.StudioDetailsList;

  return (
    <>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <ContainerInputs
            setBorder
            inputLabel={
              <Styles.InputTitle>{texts.form.studioData[0]}</Styles.InputTitle>
            }
            children={
              <Styles.TextInput
                name="studioName"
                defaultValue={"Studio Basic"}
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
              <Styles.InputTitle>{texts.form.studioData[1]}</Styles.InputTitle>
            }
            children={
              <Styles.TextInput
                name="studioId"
                defaultValue={"2-B201"}
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
              <Styles.InputTitle>{texts.form.studioData[2]}</Styles.InputTitle>
            }
            children={
              <Styles.TextInput
                name="externId"
                defaultValue={"BWKBHM03A"}
                disableError
                readOnly
              />
            }
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <ContainerInputs
            setBorder
            inputLabel={
              <Styles.InputTitle>{texts.form.studioData[3]}</Styles.InputTitle>
            }
            children={
              <Styles.TextInput
                name="stayType"
                defaultValue={"Hospedagem"}
                disableError
                readOnly
              />
            }
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <ContainerInputs
            setBorder
            inputLabel={
              <Styles.InputTitle>{texts.form.studioData[4]}</Styles.InputTitle>
            }
            children={
              <Styles.TextInput
                name="price"
                textStartIcon={"R$35"}
                mask={Filters.convertNumberInputMask}
                maskToSubmit={Filters.clearStringOnlyNumbers}
                disableError
                readOnly
              />
            }
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Styles.GrayContent>
            <Styles.InputTitle>{texts.form.studioData[5]}</Styles.InputTitle>
            <Styles.DescriptionText>
                Unidade com 12m²
            </Styles.DescriptionText>
          </Styles.GrayContent>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Styles.GrayContent>
            <Styles.InputTitle>{texts.form.studioData[6]}</Styles.InputTitle>
            <Styles.DescriptionText>
            Unidade com 15m², decoração aconchegante,
            cama queen ou duas camas de solteiro. 
            <br/>Bancada de trabalho, Smart TV/IP, TV a cabo, 
            Internet rápida, cofre, ar-condicionado, secador de cabelos, 
            micro-ondas, frigobar e utensílios de cozinha.
            </Styles.DescriptionText>
          </Styles.GrayContent>
        </Grid>

        {/* <Grid item xs={12} sm={6} md={3} lg={3}>
          <ContainerInputs
            setBorder
            inputLabel={
              <Styles.InputTitle>{texts.inputChekInDate}</Styles.InputTitle>
            }
            children={
              <Styles.DateInput
                label={
                  <Styles.InputTitle>{texts.inputChekInDate}</Styles.InputTitle>
                }
                name="checkIn"
                disableError
                DefaultMarginBottom
              />
            }
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <ContainerInputs
            setBorder
            inputLabel={
              <Styles.InputTitle>{texts.inputChekOutDate}</Styles.InputTitle>
            }
            children={<Styles.DateInput name="checkOut" disableError />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <ContainerInputs
            setBorder
            inputLabel={
              <Styles.InputTitle>{texts.inputNumberPeople}</Styles.InputTitle>
            }
            children={
              <Styles.NumberInput
                name="numPeople"
                placeholder="0"
                disableError
              />
            }
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <ContainerInputs
            setBorder
            inputLabel={
              <Styles.InputTitle>{texts.inputValue}</Styles.InputTitle>
            }
            children={
              <Styles.TextInput
                name="price"
                textStartIcon={"R$"}
                mask={Filters.convertNumberInputMask}
                maskToSubmit={Filters.clearStringOnlyNumbers}
                disableError
              />
            }
          />
        </Grid> */}

      </Grid>
    </>
  );
}

export default StudioDataInput;
