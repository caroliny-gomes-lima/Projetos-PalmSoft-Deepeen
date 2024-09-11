import React from "react";
import Styles from "../styles/Styles";
//import { Creators } from "../reduxSagas";
//import { Creators as GlobalCreators } from "../../../globalReduxSagas";
import { connect } from "react-redux";
import { Texts } from "../../../../config";
import { Grid } from "@material-ui/core";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
import AddButtonModal from "./AddButtonModal";
import { FormHolder } from "../../../../FormConfig";
import ApartmentDetailsInput from "./ApartmentDetailsInput";
import ImageGalleryInputs from "./ImageGalleryInputs";
import AmenitiesInputs from "./AmenitiesInputs";
import OnDemandInputs from "./OnDemandInputs";

function EditStudioContainer({ changeScreen }) {
  const texts = Texts["pt-BR"].beHome.RegisterApartment;

  const studioDataTeste = [
    {
      id: "u1uYXz7972aMncrRowaWlA==",
      name: "Quarto 2012",
      externalId: "TESTE",
    },
    {
      id: "Zkj71YBh|MRFfIj|-wBv6w==",
      name: "Quarto 104",
      externalId: "TESTE",
    },
    {
      id: "5C06Mv8tVzauR-SOcs-JKA==",
      name: "Quarto 109",
      externalId: "TESTE",
    },
    {
      id: "DgIS7ikJlf1ZuFyYFf3UCg==",
      name: "Quarto 2014",
      externalId: "TESTE",
    },
  ];

  const stayLocalization = [
    {
      value: 0,
      label: "Escolha uma localidade",
    },
    {
      value: 1,
      label: "Bewiki Floripa, Centro",
    },
    {
      value: 2,
      label: "Bewiki Floripa, Norte",
    },
  ];

  const stayType = [
    {
      value: 0,
      label: "Escolha uma modalidade",
    },
    {
      value: "S",
      label: "Hospedagem",
    },
    {
      value: "L",
      label: "Moradia",
    },
  ];

  return (
    <>
      <FormHolder>
        <Styles.Content>
          <Styles.HeaderContent>
            <Styles.Title>{texts.BasicDataStudio.title}</Styles.Title>
          </Styles.HeaderContent>

          <Grid container spacing={2} direction="row">
            <Grid item xs={12} sm={6} md={4} lg={6}>
              <ContainerInputs
                setBorder
                inputLabel={texts.BasicDataStudio.selectLabel[0]}
                children={
                  <Styles.SelectInput
                    name="behomeStayLocalizationId"
                    defaultValue={stayLocalization[0].value}
                    options={stayLocalization}
                    disableError
                    disableBorder
                  />
                }
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ContainerInputs
                setBorder
                inputLabel={
                  <Styles.InputTitle>
                    {texts.BasicDataStudio.inputLabel[0]}
                  </Styles.InputTitle>
                }
                children={
                  <Styles.NumberInput
                    placeholder="0"
                    name="minPeople"
                    disableError
                  />
                }
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ContainerInputs
                setBorder
                inputLabel={
                  <Styles.InputTitle>
                    {texts.BasicDataStudio.inputLabel[1]}
                  </Styles.InputTitle>
                }
                children={
                  <Styles.NumberInput
                    placeholder="0"
                    name="maxPeople"
                    disableError
                  />
                }
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6}>
              <ContainerInputs
                setBorder
                inputLabel={texts.BasicDataStudio.selectLabel[1]}
                children={
                  <Styles.SelectInput
                    disableBorder
                    name="stayType"
                    defaultValue={stayType[0].value}
                    options={stayType}
                    disableError
                  />
                }
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <ContainerInputs
                setBorder
                inputLabel={
                  <Styles.InputTitle>
                    {texts.BasicDataStudio.inputLabel[2]}
                  </Styles.InputTitle>
                }
                children={
                  <Styles.NumberInput
                    name="totalUnities"
                    readOnly
                    disableError
                    defaultValue={studioDataTeste ? studioDataTeste.length : 0}
                    endButton={
                      <AddButtonModal StudioDataTeste={studioDataTeste} />
                    }
                  />
                }
                textHelper={texts.BasicDataStudio.textHelper}
              />
            </Grid>
          </Grid>
          <Styles.Line $defaultmarginBottom />
        </Styles.Content>

        <Styles.Content>
          <ApartmentDetailsInput />
          <Styles.Line $defaultMarginTop $defaultmarginBottom />
        </Styles.Content>

        <Styles.Content>
          <ImageGalleryInputs />
          <Styles.Line $defaultMarginTop $defaultmarginBottom />
        </Styles.Content>

        <Styles.Content>
          <AmenitiesInputs />
          <Styles.Line $defaultmarginBottom />
        </Styles.Content>

        <Styles.Content>
          <OnDemandInputs />
          <Styles.Line $defaultmarginBottom />
        </Styles.Content>

        <Grid container spacing={1} direction="row" justify="flex-end">
          <Grid item xs={12} sm={6} md={5} lg={3}>
            <Styles.BackTextButton onClick={changeScreen}>
              {Texts["pt-BR"].beHome.StudiosEditing.cancelEditButtom}
            </Styles.BackTextButton>
          </Grid>

          <Grid item xs={12} sm={6} md={5} lg={5}>
            <Styles.EditStudioButton $defaltColor type="submit" name="button">
              {Texts["pt-BR"].beHome.StudiosEditing.confirmButtom}
            </Styles.EditStudioButton>
          </Grid>
        </Grid>
      </FormHolder>
    </>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditStudioContainer);
