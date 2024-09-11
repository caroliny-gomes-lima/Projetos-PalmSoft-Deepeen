import React, { useEffect, useRef } from "react";
import Styles from "../styles/Styles";
import { BlockTitle } from "../../../../pages/styles/defaultStyles";
import { Texts } from "../../../../config";
import { Grid } from "@material-ui/core";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
import AddButtonModal from "../components/AddButtonModal";
import { FormHolder } from "../../../../FormConfig";
import { Creators } from "../reduxSagas";
import { Creators as GlobalCreators } from "../../../globalReduxSagas";
import { connect } from "react-redux";
import { ButtonOutlined, ButtonContained } from "../../../../components";
import colors from "../../../../config/colors";
import {
  ApartmentDetailsInput,
  ImageGalleryInputs,
  AmenitiesInputs,
  OnDemandInputs,
  AddressInputs,
} from "../components";

function Container({
  isFetching,
  RegisterApartmentRequestPost,
  BeHomeAmenityRequest,
  BeHomeOnDemandRequest,
  OnDemandData,
  AmenityApartmentData,
  getImage,
  data,
  BeHomeLocationRequest,
  LocalizationData,
  GetAddressRequest,
  getStatesRequest,
  AddressData,
  StatesData,
}) {
  const Title = Texts["pt-BR"].beHome;
  const unitiesRef = useRef(null);
  const onDemandRef = useRef(null);
  //const newOnDemandRef = useRef(null);
  const imageRef = useRef(null);
  const [unities, setUnities] = React.useState();
  const [formRef, setRef] = React.useState();
  //const [newOnDemand, setNewOndemand] = React.useState();

  const mount = React.useCallback(() => {
    BeHomeLocationRequest();
    BeHomeAmenityRequest();
    BeHomeOnDemandRequest();
    getImage();
    getStatesRequest();
  }, [
    BeHomeLocationRequest,
    BeHomeAmenityRequest,
    BeHomeOnDemandRequest,
    getImage,
    getStatesRequest,
  ]);
  React.useEffect(mount, [mount]);

  React.useCallback(() => {
    if (data?.content) {
      BeHomeLocationRequest();
    }
  }, [data, BeHomeLocationRequest]);

  useEffect(() => {
    if (OnDemandData?.length > 0) {
      onDemandRef.current = OnDemandData;
    }
    if (AmenityApartmentData?.content?.length > 0) {
      imageRef.current = AmenityApartmentData?.content;
    }
    if (unities && formRef) {
      unitiesRef.current = unities;
      formRef.setValue("totalUnities", Object.keys(unities)?.length, unities);
    }
    /*if (newOnDemand && formRef) {
      newOnDemandRef.current = newOnDemand;
    }*/
  }, [OnDemandData, AmenityApartmentData, unities, AddressData, formRef]);

  function getParameters(data) {
    GetAddressRequest(data);
  }

  function sendParameters(data) {
    data["stays"] = unitiesRef.current;
    RegisterApartmentRequestPost(
      data,
      onDemandRef.current,
      imageRef.current,
      AddressData
    );
  }

  const stayLocalization = [
    {
      value: 0,
      label: "Escolha uma localidade",
    },
    {
      value: LocalizationData[0]?.id,
      label: LocalizationData[0]?.name,
    },
    {
      value: LocalizationData[1]?.id,
      label: LocalizationData[1]?.name,
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
      <FormHolder onSubmit={sendParameters} formRef={setRef}>
        <Styles.Container>
          <Styles.ScrollContainer>
            <Styles.HeaderContainer>
              <BlockTitle>{Title.RegisterApartment.Title}</BlockTitle>
            </Styles.HeaderContainer>
            {isFetching ? (
              <Styles.LoadingContainer>
                <Styles.CircleLoading
                  color={colors.green}
                  style={{
                    width: "12%",
                    height: "12%",
                    margin: "200px",
                  }}
                />
              </Styles.LoadingContainer>
            ) : (
              <>
                <Styles.Content>
                  <Styles.HeaderContent>
                    <Styles.Title>
                      {Title.RegisterApartment.BasicDataStudio.title}
                    </Styles.Title>
                  </Styles.HeaderContent>

                  <Grid container spacing={2} direction="row">
                    <Grid item xs={12} sm={6} md={4} lg={6}>
                      <ContainerInputs
                        setBorder
                        inputLabel={
                          Title.RegisterApartment.BasicDataStudio.selectLabel[0]
                        }
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
                            {
                              Title.RegisterApartment.BasicDataStudio
                                .inputLabel[0]
                            }
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
                            {
                              Title.RegisterApartment.BasicDataStudio
                                .inputLabel[1]
                            }
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
                        inputLabel={
                          Title.RegisterApartment.BasicDataStudio.selectLabel[1]
                        }
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
                            {
                              Title.RegisterApartment.BasicDataStudio
                                .inputLabel[2]
                            }
                          </Styles.InputTitle>
                        }
                        children={
                          <Styles.NumberInput
                            name="totalUnities"
                            defaultValue={
                              unitiesRef.current ? unitiesRef.current.length : 0
                            }
                            readOnly
                            disableError
                            endButton={
                              <AddButtonModal
                                sendData={(data) => {
                                  const organizedUnities = [];

                                  Object.keys(data).forEach((element) => {
                                    const [elementType, elementIndexStr] =
                                      element.split("_");
                                    const elementIndexNumber =
                                      Number(elementIndexStr);

                                    if (
                                      organizedUnities[elementIndexNumber] !==
                                      undefined
                                    ) {
                                      organizedUnities[elementIndexNumber][
                                        elementType
                                      ] = data[element];
                                    } else {
                                      organizedUnities[elementIndexNumber] = {
                                        codeStudio: data[element],
                                      };
                                    }
                                  });
                                  setUnities(organizedUnities);
                                }}
                              />
                            }
                          />
                        }
                        showInfo
                      />
                    </Grid>
                  </Grid>
                  <AddressInputs
                    formRef={formRef}
                    AddressData={AddressData}
                    StatesData={StatesData}
                    sendParameters={getParameters}
                  />
                  <Styles.Line />
                </Styles.Content>

                <Styles.Content>
                  <ApartmentDetailsInput />
                </Styles.Content>

                <Styles.Content>
                  <ImageGalleryInputs />
                </Styles.Content>

                <Styles.Content>
                  <AmenitiesInputs data={AmenityApartmentData} />
                </Styles.Content>

                <Styles.Content>
                  <OnDemandInputs data={OnDemandData} />
                  {/* <Grid
                    container
                    spacing={1}
                    direction="row"
                    justify="flex-end"
                  >
                    <Grid item xs={8} sm={4} md={5} lg={3}>
                        <AddOnDemandModal
                          sendData={(data) => {
                            setNewOndemand(data);
                          }}
                        />
                        </Grid>
                  </Grid> */}
                  <Styles.Line $defaultMarginTop />
                </Styles.Content>
                <Grid container spacing={1} direction="row" justify="flex-end">
                  <Grid item xs={12} sm={6} md={5} lg={5}>
                    <ButtonOutlined>
                      {Title.RegisterApartment.cancelButton}
                    </ButtonOutlined>
                  </Grid>
                  <Grid item xs={12} sm={6} md={5} lg={5}>
                    <ButtonContained
                      type="submit"
                      name="button"
                      loading={isFetching}
                      disabled={isFetching}
                    >
                      {Title.RegisterApartment.confirmButton}
                    </ButtonContained>
                  </Grid>
                </Grid>
              </>
            )}
          </Styles.ScrollContainer>
        </Styles.Container>
      </FormHolder>
    </>
  );
}

function mapStateToProps(state) {
  const {
    AmenityApartmentData,
    LocalizationData,
    isFetchingLocalization,
    isFetchingAmenity,
    OnDemandData,
    isFetchingOnDemand,
    RegisterApartmentData,
    isFetching,
  } = state.beHomeRegister;
  const { images, StatesData, AddressData, isFetchingImages } = state.global;
  return {
    AmenityApartmentData,
    LocalizationData,
    OnDemandData,
    isFetchingLocalization,
    isFetchingAmenity,
    isFetchingOnDemand,
    images,
    isFetchingImages,
    RegisterApartmentData,
    isFetching,
    AddressData,
    StatesData,
  };
}

function mapDispatchToProps(dispatch) {
  const { getImage, GetAddressRequest, getStatesRequest } = GlobalCreators;
  const {
    RegisterApartmentRequestPost,
    BeHomeLocationRequest,
    BeHomeAmenityRequest,
    BeHomeOnDemandRequest,
  } = Creators;
  return {
    getImage: function (data, idList) {
      return dispatch(getImage(data, idList));
    },
    RegisterApartmentRequestPost: function (data, listOnDemand, listAmenities) {
      return dispatch(
        RegisterApartmentRequestPost(data, listOnDemand, listAmenities)
      );
    },
    BeHomeLocationRequest: function (data) {
      return dispatch(BeHomeLocationRequest(data));
    },
    BeHomeAmenityRequest: function (data) {
      return dispatch(BeHomeAmenityRequest(data));
    },
    BeHomeOnDemandRequest: function (data) {
      return dispatch(BeHomeOnDemandRequest(data));
    },
    GetAddressRequest: function (data) {
      return dispatch(GetAddressRequest(data));
    },
    getStatesRequest: function (data) {
      return dispatch(getStatesRequest(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
