import React from "react";
import Styles from "../styles/Styles";
import { Texts } from "../../../../config";
import { Grid } from "@material-ui/core";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
import { Filters } from "../../../../lib";
import { Select } from "../../../../components";

function BasicDataInputs({ studioData }) {
  const texts = Texts["pt-BR"].beHome.ReservationImport.BasicData;

  return (
    <>
      <Styles.HeaderContent>
        <Styles.Title>{texts.title}</Styles.Title>
      </Styles.HeaderContent>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <ContainerInputs
            setBorder
            inputLabel={
              <Styles.InputTitle>{texts.inputModality}</Styles.InputTitle>
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
            inputLabel={
              <Styles.InputTitle>{texts.inputStudioType}</Styles.InputTitle>
            }
            children={
              <Select
                name="categoryId"
                options={
                  studioData
                    ? studioData?.map((item) => {
                        return {
                          value: item.id,
                          label: item.name,
                        };
                      })
                    : []
                }
                //name="StudioDetailsName"
                disableError
              />
            }
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
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
        </Grid>
      </Grid>
      <Styles.Line />
    </>
  );
}

export default BasicDataInputs;
