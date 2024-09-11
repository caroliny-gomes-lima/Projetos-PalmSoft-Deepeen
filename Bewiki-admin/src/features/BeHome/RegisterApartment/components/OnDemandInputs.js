import React from "react";
import Styles from "../styles/Styles";
import { Grid } from "@material-ui/core";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
import InputImageComponent from "../../../../components/inputs/inputImage";
import { Texts } from "../../../../config";
import { Creators } from "../../../globalReduxSagas";
import { connect } from "react-redux";
import { Filters } from "../../../../lib";
import { Switch } from "../../../../components";

function OnDemandInputs({ data, BeHomeOnDemandRequest, OnDemandData }) {
  const texts = Texts["pt-BR"].beHome.RegisterApartment.OnDemand;

  React.useCallback(() => {
    if (data?.content) {
      BeHomeOnDemandRequest(data?.content);
    }
  }, [data, BeHomeOnDemandRequest]);

  /*const subtitleMap = texts.subTitles.map((item) => {
    return (
      <Styles.HeaderContainer>
        <Styles.subTitle>{item}</Styles.subTitle>
      </Styles.HeaderContainer>
    );
  });*/

  const drawInputList = (data) => {
    return data.map((item) => {
      return (
        <>
          <Styles.HeaderContent>
            <Styles.SubTitle>{texts.subTitles[0]}</Styles.SubTitle>
          </Styles.HeaderContent>
          <Grid
            container
            spacing={1}
            direction="row"
            justify="spacing-"
            key={`idOnDemand_${item.id}`}
          >
            <Grid item xs={2} sm={1} md={1} lg={1}>
              <ContainerInputs
                $defaultMargin
                $setMarginRight
                inputLabel={"STATUS"}
              >
                <Switch
                  defaulValue={false}
                  name={`idOnDemand_${item.id}`}
                  color="primary"
                />
              </ContainerInputs>
            </Grid>
            <Grid item xs={10} sm={7} md={7} lg={6}>
              <ContainerInputs
                setBorder
                inputLabel={
                  <Styles.InputTitle>{texts.inputLabel[0]}</Styles.InputTitle>
                }
                children={
                  <Styles.TextInput
                    name={`nameOnDemand_${item.id}`}
                    defaultValue={item?.name}
                    disableError
                    readOnly
                  />
                }
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={5}>
              <ContainerInputs
                setBorder
                inputLabel={
                  <Styles.InputTitle>{texts.inputLabel[1]}</Styles.InputTitle>
                }
                children={
                  <Styles.TextInput
                    name={`PriceOnDemand_${item.id}`}
                    defaultValue={Filters.convertMoneyTextMask(item?.price)}
                    disableError
                    readOnly
                  />
                }
                showPriceInfo
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ContainerInputs
                inputLabel={
                  <Styles.InputTitle>{texts.inputImage}</Styles.InputTitle>
                }
                children={
                  <InputImageComponent
                    name={`OnDemandImage_${item.id}`}
                    type="file"
                    nextInput={`OnDemandDescription_${item.id}`}
                    fileInputRef={`OnDemandImage_${item.id}`}
                    defaultValue={item?.imageId}
                    textClick={"Selecionar Imagem"}
                  />
                }
                showUploadInfo
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={5}>
              <Styles.TextBox>
                <Styles.HeadertextBox>
                  <Styles.InputTitle>{texts.inputLabel[2]}</Styles.InputTitle>
                </Styles.HeadertextBox>
                <Styles.TextInput
                  name={`OnDemandDescription_${item.id}`}
                  defaultValue={item?.description}
                  $setFontSize
                  readOnly
                  disableError
                />
              </Styles.TextBox>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={7}>
              <Styles.TextBox>
                <Styles.HeadertextBox>
                  <Styles.InputTitle>{texts.inputLabel[3]}</Styles.InputTitle>
                </Styles.HeadertextBox>
                <Styles.TextInput
                  name={`OnDemandDetails_${item.id}`}
                  $setFontSize
                  disableError
                />
              </Styles.TextBox>
            </Grid>
          </Grid>
        </>
      );
    });
  };
  return (
    <>
      <Styles.HeaderContent>
        <Styles.Title>{texts.title}</Styles.Title>
      </Styles.HeaderContent>

      {data && OnDemandData?.length > 0.5 && drawInputList(data)}
    </>
  );
}
function mapStateToProps(state) {
  const { OnDemandData, isFetching: isFetchingOnDemand } = state.beHomeRegister;
  return {
    OnDemandData,
    isFetchingOnDemand,
  };
}

function mapDispatchToProps(dispatch) {
  const { BeHomeOnDemandRequest } = Creators;
  return {
    BeHomeOnDemandRequest: function (data) {
      return dispatch(BeHomeOnDemandRequest(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OnDemandInputs);
