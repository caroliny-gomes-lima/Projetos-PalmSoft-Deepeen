import React from "react";
import { connect } from "react-redux";
import { Texts } from "../../../../config";
import { Creators } from "../reduxSagas";
import { Grid, Fade, IconButton } from "@material-ui/core";
import { AddSharp } from "@material-ui/icons";
import { OperatorStyle, HoursRegisterStyles } from "../Styles";
import OperatorsInputs from "../components/OperatorsInputs";
import { FormHolder } from "FormConfig";
import { FilterButtonContained } from "../../../../components";
import { Creators as GlobalCreators } from "../../../globalReduxSagas";
import RegisterFilterModal from "../components/RegisterFilterModal";

function Operators({
  GetOperators,
  SendOperators,
  isFetching,
  OperatorsData,
  operatorData,
  isFetchingOperator,
  operatorSector,
  isFetchingSectors,
  workShifts,
  isFetchingWorkShift,
  getOperadoresRequest,
  getWorkShiftRequest,
  getSectorsRequest,
  operatorStatus,
  isFetchingOpStatus,
  getStatusRequest,
  operatorType,
  isFetchingOpType,
  operatorStatusFilter,
  operatorSectorFilter,
  workShiftsFilter,
  getOpTypeRequest,
}) {
  const texts = Texts["pt-BR"].setup.Operators;

  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState(null);

  React.useEffect(() => {
    getOperadoresRequest();
    getWorkShiftRequest();
    getSectorsRequest();
    getStatusRequest();
    getOpTypeRequest();
    GetOperators(-1, "", 0, 0);
  }, [
    getOperadoresRequest,
    getWorkShiftRequest,
    getSectorsRequest,
    GetOperators,
    getStatusRequest,
    getOpTypeRequest,
  ]);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      {!isFetchingSectors &&
      !isFetchingWorkShift &&
      !isFetchingOperator &&
      !isFetchingOpStatus &&
      !isFetchingOpType ? (
        <FormHolder formRef={setForm}>
          <OperatorStyle.HeaderContainer>
            {texts.filters}
            <Grid item xs={10} sm={4} md={3} lg={2}>
              <FilterButtonContained
                style={{
                  marginBottom: 20,
                  marginLeft: 30,
                  width: "200px",
                }}
                startIcon={<AddSharp />}
                loading={isFetching}
                type="submit"
                name="button"
                disabled={isFetching}
                onClick={() => handleOpenModal()}
              >
                {texts.OperatorRegisterFilters.registerOperator}
              </FilterButtonContained>
            </Grid>
          </OperatorStyle.HeaderContainer>
          <OperatorStyle.Content>
            <OperatorStyle.Container>
              <OperatorsInputs
                sectors={operatorSectorFilter}
                shifts={workShiftsFilter}
                ops={operatorData}
                isFetching={isFetching}
                operatorStatus={operatorStatusFilter}
                form={form}
                getOperators={GetOperators}
              />
            </OperatorStyle.Container>
          </OperatorStyle.Content>
          <HoursRegisterStyles.StyledRegisterModal
            open={open}
            onClose={() => setOpen(false)}
            BackdropComponent={HoursRegisterStyles.styledBackDrop}
          >
            <Fade in={open}>
              <HoursRegisterStyles.Container>
                <HoursRegisterStyles.HeaderContainer>
                  <HoursRegisterStyles.Title>
                    {texts.OperatorRegisterFilters.registerOperator}
                  </HoursRegisterStyles.Title>
                  <IconButton onClick={() => handleCloseModal()}>
                    <HoursRegisterStyles.Close />
                  </IconButton>
                </HoursRegisterStyles.HeaderContainer>
                <RegisterFilterModal
                  sectors={operatorSector}
                  shifts={workShifts}
                  isFetching={isFetching}
                  operatorType={operatorType}
                  form={form}
                  operatorStatus={operatorStatus}
                  sendOperators={SendOperators}
                />
              </HoursRegisterStyles.Container>
            </Fade>
          </HoursRegisterStyles.StyledRegisterModal>
        </FormHolder>
      ) : null}
    </>
  );
}

function mapStateToProps(state) {
  const { isFetching, OperatorsData } = state.operators;
  const {
    operatorSector,
    operatorSectorFilter,
    isFetchingSectors,
    workShifts,
    workShiftsFilter,
    isFetchingWorkShift,
    operatorData,
    isFetchingOperator,
    operatorStatus,
    operatorStatusFilter,
    isFetchingOpStatus,
    operatorType,
    isFetchingOpType,
  } = state.global;
  return {
    isFetching,
    OperatorsData,
    operatorData,
    isFetchingOperator,
    operatorSector,
    isFetchingSectors,
    workShifts,
    isFetchingWorkShift,
    operatorStatus,
    operatorStatusFilter,
    isFetchingOpStatus,
    operatorType,
    isFetchingOpType,
    operatorSectorFilter,
    workShiftsFilter,
  };
}

function mapDispatchToProps(dispatch) {
  const { GetOperators, SendOperators } = Creators;
  const {
    getOperadoresRequest,
    getWorkShiftRequest,
    getSectorsRequest,
    getStatusRequest,
    getOpTypeRequest,
  } = GlobalCreators;
  return {
    getOperadoresRequest() {
      return dispatch(getOperadoresRequest());
    },
    getOpTypeRequest() {
      return dispatch(getOpTypeRequest());
    },
    getWorkShiftRequest() {
      return dispatch(getWorkShiftRequest());
    },
    getSectorsRequest() {
      return dispatch(getSectorsRequest());
    },
    getStatusRequest() {
      return dispatch(getStatusRequest());
    },
    GetOperators: function (idOp, sector, shift, status) {
      return dispatch(GetOperators(idOp, sector, shift, status));
    },
    SendOperators: function (data) {
      return dispatch(SendOperators(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Operators);
