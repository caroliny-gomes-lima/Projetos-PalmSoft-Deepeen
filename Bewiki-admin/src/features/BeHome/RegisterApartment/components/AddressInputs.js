import React, { useEffect } from "react";
import Styles from "../styles/Styles";
import { Texts } from "../../../../config";
import { Select } from "../../../../components";
import { Grid } from "@material-ui/core";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";

import { Filters } from "../../../../lib";
function AddressInputs({
  sendParameters,
  StatesData,
  getStatesRequest,
  isFetchingAddress,
  GetAddressRequest,
  AddressData,
  formRef,
}) {
  const texts = Texts["pt-BR"].beHome.RegisterApartment;

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
        <Styles.SubTitle>
          {texts.BasicDataStudio.addressInputs.Title}
        </Styles.SubTitle>
      </Styles.HeaderContent>

      <>
        <Grid container spacing={2} direction="row">
          <Grid item xs={6} sm={3} md={3} lg={3}>
            <ContainerInputs
              setBorder
              inputLabel={texts.BasicDataStudio.addressInputs.postalCode}
              children={
                <>
                  <Styles.TextInput
                    name="postal_code"
                    mask={Filters.inputMaskCEP}
                    maskToSubmit={Filters.clearStringOnlyNumbers}
                    onChange={handleChange}
                    disableError
                  />
                </>
              }
            />
          </Grid>

          <Grid item xs={6} sm={3} md={3} lg={3}>
            <ContainerInputs
              inputLabel={texts.BasicDataStudio.addressInputs.state}
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

          <Grid item xs={12} sm={3} md={3} lg={3}>
            <ContainerInputs
              setBorder
              inputLabel={texts.BasicDataStudio.addressInputs.city}
              children={<Styles.TextInput name="city" disableError />}
            />
          </Grid>

          <Grid item xs={12} sm={3} md={3} lg={3}>
            <ContainerInputs
              setBorder
              inputLabel={texts.BasicDataStudio.addressInputs.district}
              children={<Styles.TextInput name="district" disableError />}
            />
          </Grid>

          <Grid item xs={12} sm={9} md={9} lg={9}>
            <ContainerInputs
              setBorder
              inputLabel={texts.BasicDataStudio.addressInputs.street}
              children={<Styles.TextInput name="street" disableError />}
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <ContainerInputs
              setBorder
              inputLabel={texts.BasicDataStudio.addressInputs.number}
              children={
                <Styles.TextInput placeholder="0" name="number" disableError />
              }
            />
          </Grid>
        </Grid>
      </>
    </>
  );
}

export default AddressInputs;
