import React, { useEffect } from "react";
import Styles from "../styles/Styles";
import { Texts } from "../../../../config";
import { Grid } from "@material-ui/core";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
import { Filters } from "../../../../lib";
import { Select } from "../../../../components";

function ReservationDataInputs({
  sendParameters,
  StatesData,
  AddressData,
  formRef,
  GetAddressRequest,
}) {
  const texts = Texts["pt-BR"].beHome.ReservationImport.ReservationData;

  React.useCallback(() => {
    if (AddressData) {
      GetAddressRequest(AddressData);
    }
  }, [AddressData, GetAddressRequest]);

  useEffect(() => {
    if (AddressData && formRef) {
      const ufId = StatesData.find(
        (item) => item.initials.toUpperCase() === AddressData?.uf?.toUpperCase()
      );
      formRef.setValue("state", ufId?.initials);
      formRef.setValue("street", AddressData?.logradouro);
      formRef.setValue("district", AddressData?.bairro);
      formRef.setValue("city", AddressData?.localidade);
    }
  }, [AddressData, formRef, StatesData]);

  const handleChange = (event, postalCode) => {
    if (postalCode.length === 8) {
      sendParameters(postalCode, formRef);
    }
  };

  return (
    <>
      <Styles.HeaderContent>
        <Styles.Title>{texts.title}</Styles.Title>
      </Styles.HeaderContent>
      <Styles.HeaderContent>
        <Styles.SubTitle>{texts.contactDataTitle}</Styles.SubTitle>
      </Styles.HeaderContent>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <ContainerInputs
            setBorder
            inputLabel={
              <Styles.InputTitle>{texts.inputName}</Styles.InputTitle>
            }
            children={<Styles.TextInput name="name" disableError />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <ContainerInputs
            setBorder
            inputLabel={<Styles.InputTitle>{texts.inputCpf}</Styles.InputTitle>}
            children={
              <Styles.CpfInput small defaultBorder disableError name={"cpf"} />
            }
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <ContainerInputs
            setBorder
            inputLabel={
              <Styles.InputTitle>{texts.inputEmail}</Styles.InputTitle>
            }
            children={
              <Styles.EmailInput
                small
                name="email"
                alternativeColors={2}
                color="secondary"
                defaultBorder
                disableError
                variant="standard"
              />
            }
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <ContainerInputs
            setBorder
            inputLabel={
              <Styles.InputTitle>{texts.inputsPhoneNumber}</Styles.InputTitle>
            }
            children={
              <Styles.TextInput
                name="phone"
                mask={Filters.inputMaskPhone}
                maskToSubmit={Filters.clearStringOnlyNumbers}
                onlyNumber
                disableError
              />
            }
          />
        </Grid>
      </Grid>

      <Styles.HeaderContent>
        <Styles.SubTitle>{texts.addressTitle}</Styles.SubTitle>
      </Styles.HeaderContent>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <ContainerInputs
            setBorder
            inputLabel={
              <Styles.InputTitle>{texts.inputPostalCode}</Styles.InputTitle>
            }
            children={
              <Styles.TextInput
                name="postal_code"
                mask={Filters.inputMaskCEP}
                maskToSubmit={Filters.clearStringOnlyNumbers}
                onChange={handleChange}
                disableError
              />
            }
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <ContainerInputs
            setBorder
            inputLabel={
              <Styles.InputTitle>{texts.inputState}</Styles.InputTitle>
            }
            children={
              <Select
                name="state"
                options={
                  StatesData
                    ? StatesData?.map((item) => {
                        return {
                          label: item?.initials,
                          value: item?.initials,
                        };
                      })
                    : []
                }
                disableError
              />
            }
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <ContainerInputs
            setBorder
            inputLabel={
              <Styles.InputTitle>{texts.inputCity}</Styles.InputTitle>
            }
            children={<Styles.TextInput name="city" disableError />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <ContainerInputs
            setBorder
            inputLabel={
              <Styles.InputTitle>{texts.inputDistrict}</Styles.InputTitle>
            }
            children={<Styles.TextInput name="district" disableError />}
          />
        </Grid>

        <Grid item xs={12} sm={9} md={9} lg={9}>
          <ContainerInputs
            setBorder
            inputLabel={texts.inputStreet}
            children={<Styles.TextInput name="street" disableError />}
          />
        </Grid>

        <Grid item xs={12} sm={3} md={3} lg={3}>
          <ContainerInputs
            name="number"
            setBorder
            inputLabel={texts.inputNumber}
            children={
              <Styles.TextInput
                placeholder="0"
                name="number"
                mask={Filters.clearStringOnlyNumbers}
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

export default ReservationDataInputs;
