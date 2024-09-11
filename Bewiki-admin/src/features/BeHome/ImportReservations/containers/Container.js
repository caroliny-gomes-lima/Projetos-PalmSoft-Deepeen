import React, { useEffect } from "react";
import Styles from "../styles/Styles";
import { BlockTitle } from "../../../../pages/styles/defaultStyles";
import { Texts } from "../../../../config";
import { Grid } from "@material-ui/core";
import { FormHolder } from "../../../../FormConfig";
import { connect } from "react-redux";
import { BasicDataInputs, ReservationDataInputs } from "../components";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
import { ButtonContained, ButtonOutlined } from "../../../../components";
import InputImageComponent from "../../../../components/inputs/inputImage";
import { Creators } from "../reduxSagas";
import { Creators as GlobalCreators } from "../../../globalReduxSagas";
import colors from "../../../../config/colors";

function Container({
  StudioData,
  isFetching,
  BehomeStudioRequest,
  AddressData,
  StatesData,
  GetAddressRequest,
  getStatesRequest,
  PostReservation,
}) {
  const texts = Texts["pt-BR"].beHome.ReservationImport;
  const stayType = "SHORT_STAY";
  const [formRef, setRef] = React.useState();

  const loadData = React.useCallback(() => {
    BehomeStudioRequest(stayType);
    getStatesRequest();
  }, [BehomeStudioRequest, getStatesRequest]);
  React.useEffect(loadData, [loadData]);

  useEffect(() => [AddressData, formRef]);

  function getParameters(data) {
    GetAddressRequest(data);
  }

  function sendParameters(data) {
    PostReservation(data);
  }

  return (
    <>
      <FormHolder onSubmit={sendParameters} formRef={setRef}>
        <Styles.Container>
          <Styles.ScrollContainer>
            <Styles.HeaderContainer>
              <BlockTitle>{texts.Title}</BlockTitle>
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
                  <BasicDataInputs studioData={StudioData.content} />
                </Styles.Content>

                <Styles.Content>
                  <ReservationDataInputs
                    formRef={formRef}
                    AddressData={AddressData}
                    StatesData={StatesData}
                    sendParameters={getParameters}
                  />
                </Styles.Content>

                <Styles.Content>
                  <Styles.Title>{texts.Attachments.title}</Styles.Title>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <ContainerInputs
                      inputLabel={
                        <Styles.InputTitle>
                          {texts.Attachments.inputImage}
                        </Styles.InputTitle>
                      }
                      children={
                        <InputImageComponent
                          type="file"
                          name="signImage"
                          textClick="Selecionar Imagem"
                          fileInputRef="signImage"
                        />
                      }
                      showUploadInfo
                      textHelper={"FORMATO '.PNG'."}
                    />
                  </Grid>
                </Styles.Content>

                <Grid container spacing={1} direction="row" justify="flex-end">
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                    <ButtonOutlined>{texts.cancelButton}</ButtonOutlined>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                    <ButtonContained
                      type="submit"
                      name="button"
                      loading={isFetching}
                      disabled={isFetching}
                    >
                      {texts.confirmButton}
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
  const { StudioData, isFetching } = state.BehomeReservationImport;
  const { StatesData, AddressData } = state.global;

  return {
    AddressData,
    StatesData,
    StudioData,
    isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  const { BehomeStudioRequest, PostReservation } = Creators;
  const { GetAddressRequest, getStatesRequest } = GlobalCreators;
  return {
    BehomeStudioRequest: function (data) {
      return dispatch(BehomeStudioRequest(data));
    },
    GetAddressRequest: function (data) {
      return dispatch(GetAddressRequest(data));
    },
    getStatesRequest: function (data) {
      return dispatch(getStatesRequest(data));
    },
    PostReservation: function (data) {
      return dispatch(PostReservation(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
