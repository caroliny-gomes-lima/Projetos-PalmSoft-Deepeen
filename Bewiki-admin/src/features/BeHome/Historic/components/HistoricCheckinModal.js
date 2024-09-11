import React from "react";
import { ModalStyles as Styles } from "../styles";
import { Grid } from "@material-ui/core";
import { Texts } from "../../../../config";
import { FormHolder } from "../../../../FormConfig";
import { Input } from "../../../../components";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
//import { Creators } from "../reduxSagas";
//import { connect } from "react-redux";
import { customModal } from "../../../modals/utils";

function HistoricCheckinModal({
  tableData,
  isFetching,
  RequestedReservationsCancell,
  reloadTable,
}) {
  const text = Texts["pt-BR"].beHome.HistoricList.HistoricCheckinModal;
  function sendParameters(data) {
    /*  RequestedReservationsCancell(
      tableData.stayType,
      tableData.id,
      reloadTable,
      data
    );*/
    customModal.close();
  }

  return (
    <FormHolder onSubmit={sendParameters}>
      <Styles.HeaderContainer $defaultMargin>
        <Styles.Title $defaultColor>{text.subTitle1}</Styles.Title>
      </Styles.HeaderContainer>
      <Styles.SubTitle $defaultFonts $defaultMargin>
        {text.text1}
      </Styles.SubTitle>
      <Styles.ModalContent>
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ContainerInputs
              inputLabel={
                <Styles.InputTitle>{text.inputDate}</Styles.InputTitle>
              }
              children={
                <Input
                  name="stay"
                  small
                  marginDefault
                  defaultBorder
                  defaultValue={"01/04/2022"}
                  readOnly
                />
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ContainerInputs
              inputLabel={
                <Styles.InputTitle>{text.inputHours}</Styles.InputTitle>
              }
              children={
                <Input
                  name="stay"
                  small
                  marginDefault
                  defaultBorder
                  defaultValue={"15:45"}
                  readOnly
                />
              }
            />
          </Grid>
        </Grid>
      </Styles.ModalContent>

      <Styles.HeaderContainer $defaultMargin>
        <Styles.Title $defaultColor>{text.subTitle2}</Styles.Title>
      </Styles.HeaderContainer>
      <Styles.SubTitle $defaultFonts $defaultMargin>
        {text.text2}
      </Styles.SubTitle>

      <Styles.ModalContent>
        <Grid container spacing={1} direction="row">
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ContainerInputs
              inputLabel={
                <Styles.InputTitle>{text.inputCheckInDate}</Styles.InputTitle>
              }
              children={
                <Input
                  name="type"
                  small
                  marginDefault
                  defaultBorder
                  defaultValue={"16/04/2022"}
                  readOnly
                />
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ContainerInputs
              inputLabel={
                <Styles.InputTitle>{text.inputStudioDate}</Styles.InputTitle>
              }
              children={
                <Input
                  name="stay"
                  small
                  marginDefault
                  defaultBorder
                  defaultValue={"16/04/2022 - 10:00"}
                  readOnly
                />
              }
            />
          </Grid>
        </Grid>
      </Styles.ModalContent>

      <Styles.FooterModal>
        <Grid container justify="flex-end">
          <Styles.TextButton $defaultColor onClick={() => customModal.close()}>
            {text.back}
          </Styles.TextButton>
        </Grid>
      </Styles.FooterModal>
    </FormHolder>
  );
}

/*function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  //const { RequestedReservationsCancell } = Creators;
  return {};
}*/
export default HistoricCheckinModal;
