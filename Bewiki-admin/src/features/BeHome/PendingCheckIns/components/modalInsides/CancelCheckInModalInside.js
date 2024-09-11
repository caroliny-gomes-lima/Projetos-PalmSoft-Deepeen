import { Grid } from "@material-ui/core";
import { FormHolder } from "../../../../../FormConfig";
import { CancelCheckInModalStyles as Styles } from "../../styles";
import { ContainerInputs } from "../../../../../components/inputs/inputsComponents";
import { Input } from "../../../../../components";
import displayDatePeriodText from "../../../../../services/helpers/displayDatePeriodText";
import { Texts } from "../../../../../config";
import { customModal } from "../../../../modals/utils";
import { Creators } from "../../reduxSagas";
import { connect } from "react-redux";

function CancelCheckInModalInside({
  pendingCheckInData,
  isFetching,
  reloadTable,
  CancelCheckInRequest,
}) {
  const texts = Texts["pt-BR"].beHome.PendingCheckIns.modalCancelCheckIn;
  const { StayTypes } = Texts["pt-BR"].beHome;
  const userName = `${pendingCheckInData.guest.firstName} ${pendingCheckInData.guest.lastName}`;

  const handleCancelCheckIn = () => {
    CancelCheckInRequest(pendingCheckInData?.checkIn?.id, reloadTable);
  };

  return (
    <FormHolder>
      <Styles.HeaderContainer $defaultMargin>
        <Styles.Title>{texts.userDataTitle}</Styles.Title>
      </Styles.HeaderContainer>

      <Styles.ModalContent>
        <Grid container spacing={1} direction="row">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <ContainerInputs
              inputLabel={
                <Styles.InputTitle>{texts.userName}</Styles.InputTitle>
              }
              children={
                <Input
                  small
                  marginDefault
                  defaultBorder
                  name="user"
                  defaultValue={userName}
                  readOnly
                />
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ContainerInputs
              inputLabel={<Styles.InputTitle>{texts.stay}</Styles.InputTitle>}
              children={
                <Input
                  name="stay"
                  small
                  marginDefault
                  defaultBorder
                  defaultValue={displayDatePeriodText(
                    pendingCheckInData.stay.dateCheckIn,
                    pendingCheckInData.stay.dateCheckOut
                  )}
                  readOnly
                />
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ContainerInputs
              inputLabel={
                <Styles.InputTitle>{texts.stayType}</Styles.InputTitle>
              }
              children={
                <Input
                  name="type"
                  small
                  marginDefault
                  defaultBorder
                  defaultValue={StayTypes[pendingCheckInData.stay.type]}
                  readOnly
                />
              }
            />
          </Grid>
        </Grid>
      </Styles.ModalContent>

      <Styles.FooterModal>
        <Styles.TextFieldButton
          disabled={isFetching}
          loading={isFetching}
          fullWidth={false}
          onClick={customModal.close}
        >
          {texts.cancel}
        </Styles.TextFieldButton>

        <Styles.TextFieldButton
          $defaultColor
          disabled={isFetching}
          loading={isFetching}
          fullWidth={false}
          onClick={handleCancelCheckIn}
        >
          {texts.confirm}
        </Styles.TextFieldButton>
      </Styles.FooterModal>
    </FormHolder>
  );
}

function mapStateToProps(state) {
  const { isFetching } = state.beHomePendingCheckIns;
  return { isFetching };
}

function mapDispatchToProps(dispatch) {
  const { CancelCheckInRequest } = Creators;
  return {
    CancelCheckInRequest: function (
      checkInId,
      setCheckInCancelled,
      reloadTable
    ) {
      return dispatch(
        CancelCheckInRequest(checkInId, setCheckInCancelled, reloadTable)
      );
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CancelCheckInModalInside);
