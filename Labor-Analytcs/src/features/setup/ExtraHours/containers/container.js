import React from "react";
import { connect } from "react-redux";
import { Creators } from "../reduxSagas";
import { ExtraHoursStyle, HoursRegisterStyles } from "../Styles";
import { Grid, Fade, IconButton, ClickAwayListener } from "@material-ui/core";
import { Texts } from "../../../../config";
import { FilterButtonContained } from "../../../../components";
import { FormHolder } from "FormConfig";
import InputsHeader from "../components/InputsHeader";
import { AddSharp } from "@material-ui/icons";
import RegisterFilterModal from "../components/RegisterFilterModal";
import { Creators as GlobalCreators } from "../../../globalReduxSagas";
import { BlockTitle } from "../../../../pages/styles/defaultStyles";

function ExtraHours({
  ExtraHoursData,
  isFetching,
  getOperadoresRequest,
  operatorData,
  GetExtraHours,
  SendExtraHours,
}) {
  const mount = React.useCallback(() => {
    getOperadoresRequest();
  }, [getOperadoresRequest]);
  React.useEffect(mount, [mount]);

  function sendParameters(data) {
    SendExtraHours(data);
  }

  function getParameters(data, callback) {
    console.log(data);
    GetExtraHours(data, callback);
  }

  const texts = Texts["pt-BR"].setup.ExtraHours;
  const [open, setOpen] = React.useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <FormHolder>
        <ExtraHoursStyle.Content>
          <ExtraHoursStyle.HeaderContainer>
            <ExtraHoursStyle.FilterTitle>
              <BlockTitle>{texts.Title}</BlockTitle>
            </ExtraHoursStyle.FilterTitle>
            {ExtraHoursData ? (
              <Grid item xs={10} sm={4} md={3} lg={2}>
                <FilterButtonContained
                  style={{
                    marginBottom: 20,
                  }}
                  startIcon={<AddSharp />}
                  type="submit"
                  name="button"
                  onClick={() => handleOpenModal()}
                >
                  {texts.registerHours}
                </FilterButtonContained>
              </Grid>
            ) : null}
          </ExtraHoursStyle.HeaderContainer>
          <HoursRegisterStyles.StyledRegisterModal
            open={open}
            onClose={() => setOpen(false)}
            BackdropComponent={HoursRegisterStyles.styledBackDrop}
          >
            <ClickAwayListener
              mouseEvent="onMouseUp"
              onClickAway={() => {
                if (open) {
                  setOpen(false);
                }
              }}
            >
              <Fade in={open}>
                <HoursRegisterStyles.Container>
                  <HoursRegisterStyles.HeaderContainer>
                    <HoursRegisterStyles.Title>
                      {texts.Title}
                    </HoursRegisterStyles.Title>
                    <IconButton onClick={() => handleCloseModal()}>
                      <HoursRegisterStyles.Close />
                    </IconButton>
                  </HoursRegisterStyles.HeaderContainer>
                  <RegisterFilterModal
                    sendParameters={sendParameters}
                    operatorData={operatorData}
                    data={ExtraHoursData}
                    isFetching={isFetching}
                  />
                </HoursRegisterStyles.Container>
              </Fade>
            </ClickAwayListener>
          </HoursRegisterStyles.StyledRegisterModal>

          <ExtraHoursStyle.Container>
            <InputsHeader
              sendParameters={getParameters}
              operatorData={operatorData}
              isFetching={isFetching}
            />
          </ExtraHoursStyle.Container>
        </ExtraHoursStyle.Content>
      </FormHolder>
    </>
  );
}
function mapStateToProps(state) {
  const { isFetching, ExtraHoursData } = state.extraHours;
  const { operatorData, isFetchingOperator } = state.global;
  return {
    isFetching,
    isFetchingOperator,
    operatorData,
    ExtraHoursData,
  };
}

function mapDispatchToProps(dispatch) {
  const { GetExtraHours, SendExtraHours } = Creators;
  const { getOperadoresRequest } = GlobalCreators;
  return {
    getOperadoresRequest() {
      return dispatch(getOperadoresRequest());
    },
    GetExtraHours: function (data, callback) {
      return dispatch(GetExtraHours(data, callback));
    },
    SendExtraHours: function (data) {
      return dispatch(SendExtraHours(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExtraHours);
