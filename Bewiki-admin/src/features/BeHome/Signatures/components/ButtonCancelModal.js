import React from "react";
import { CancelModalStyles as Styles } from "../styles";
import { Grid } from "@material-ui/core";
import { Texts } from "../../../../config";
import { FormHolder } from "../../../../FormConfig";
import { Input, InputMultiline } from "../../../../components";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
import { Creators } from "../reduxSagas";
import { connect } from "react-redux";
import { Filters } from "../../../../lib";
import { customModal } from "../../../modals/utils";
import TableCancelButton from "../../components/buttons/TableCancelButton";

function ButtonCancelModal({
  BeHomeSubscriptionsCancel,
  tableData,
  isFetching,
  reloadTable,
}) {
  const text = Texts["pt-BR"].beHome.Signatures.ModalcancelSignatures;

  const handleOpenModal = () => {
    customModal.setInfos(
      null,
      text.titleCancel,
      [text.text1],
      null,
      null,
      <FormHolder onSubmit={sendParameters}>
        <Styles.HeaderContainer $defaultMargin>
          <Styles.Title>{text.residentData}</Styles.Title>
          <Styles.SubTitle $defaultFonts $defaultMargin>
            {text.text2}
          </Styles.SubTitle>
        </Styles.HeaderContainer>

        <Styles.ModalContent>
          <Grid container spacing={1} direction="row">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ContainerInputs
                inputLabel={
                  <Styles.InputTitle>{text.inputUser}</Styles.InputTitle>
                }
                children={
                  <Input
                    small
                    marginDefault
                    defaultBorder
                    name="user"
                    defaultValue={tableData.name}
                    readOnly
                  />
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <ContainerInputs
                inputLabel={
                  <Styles.InputTitle>{text.inputStay}</Styles.InputTitle>
                }
                children={
                  <Input
                    name="stay"
                    small
                    marginDefault
                    defaultBorder
                    defaultValue={displayDate(
                      tableData.checkIn,
                      tableData.checkOut
                    )}
                    readOnly
                  />
                }
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6}>
              <ContainerInputs
                inputLabel={
                  <Styles.InputTitle>{text.inputModality}</Styles.InputTitle>
                }
                children={
                  <Input
                    name="type"
                    small
                    marginDefault
                    defaultBorder
                    defaultValue={tableData.stayType === "L" ? "Moradia" : null}
                    readOnly
                  />
                }
              />
            </Grid>

            <Grid item xs={12}>
              <ContainerInputs
                inputLabel={
                  <Styles.InputTitle>{text.cancelReason}</Styles.InputTitle>
                }
                children={
                  <InputMultiline name="cancelReason" maxlenght={200} />
                }
              />
            </Grid>
          </Grid>
        </Styles.ModalContent>

        <Styles.FooterModal>
          <Styles.TextFieldButtonCancel
            fullWidth={false}
            onClick={() => handleCloseModal()}
          >
            {text.back}
          </Styles.TextFieldButtonCancel>

          <Styles.TextFieldButtonAccept
            fullWidth={false}
            loading={isFetching}
            type="submit"
            name="button"
            disabled={isFetching}
          >
            {text.confirm}
          </Styles.TextFieldButtonAccept>
        </Styles.FooterModal>
      </FormHolder>
    );
  };
  const handleCloseModal = () => {
    customModal.close();
  };

  const showCancelSuccessModal = () => {
    customModal.close();
    customModal.setInfos(
      text.cancelSuccess.title,
      [text.cancelSuccess.description],
      { label: text.cancelSuccess.continue, onClick: customModal.close },
      null,
      null
    );
  };

  function displayDate(checkIn, checkOut) {
    const texts = Texts["pt-BR"].beHome.Signatures;
    return `${Filters.fixDateToLabel(checkIn)} ${
      texts.until
    } ${Filters.fixDateToLabel(checkOut)}`;
  }
  function sendParameters({ cancelReason }) {
    BeHomeSubscriptionsCancel(
      tableData.id,
      cancelReason,
      reloadTable,
      showCancelSuccessModal
    );
  }
  return (
    <Styles.Container>
      <TableCancelButton onClick={handleOpenModal} />
    </Styles.Container>
  );
}
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  const { BeHomeSubscriptionsCancel } = Creators;
  return {
    BeHomeSubscriptionsCancel: function (
      StaySubscriptionId,
      cancelReason,
      reloadTable,
      showCancelSuccessModal
    ) {
      return dispatch(
        BeHomeSubscriptionsCancel(
          StaySubscriptionId,
          cancelReason,
          reloadTable,
          showCancelSuccessModal
        )
      );
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ButtonCancelModal);
