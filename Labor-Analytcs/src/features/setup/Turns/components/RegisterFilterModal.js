import React from "react";
import { connect } from "react-redux";
import { Texts } from "../../../../config";
import { FormHolder } from "FormConfig";
import {
  FilterButtonContained,
  FilterButtonOutlined,
  Input,
  Select,
} from "../../../../components";
import { Creators } from "../reduxSagas";
import { Box, createStyles, Grid } from "@material-ui/core";
import { HoursRegisterStyles as Styles } from "../../Operators/Styles";

import FilterContainerComponent from "./FilterContainer";
import { Alerts } from "../../../../lib";
import { customModal } from "../../../modals/utils";
import WeekHoursInput from "./WeekHoursInput";
import InvalidHoursInput from "./InvalidHoursInput";

function toDateWithOutTimeZone(date) {
  if (date != null) {
    let tempTime = date.split(":");
    let dt = new Date();
    dt.setHours(tempTime[0]);
    dt.setMinutes(tempTime[1]);
    dt.setSeconds(tempTime[2]);
    return dt;
  }
  return null;
}

function RegisterFilterModal({
  isFetching,
  SendTurns,
  DeleteTurn,
  UpdateTurn,
  update = () => {
    return null;
  },
}) {
  const [form, setForm] = React.useState(null);
  const texts = Texts["pt-BR"].setup.Turns.modalRegister;

  function updateForm() {
    if (update() !== null) {
      const data = update();
      if (data.shift) form?.setValue("name", data.shift);
      form?.setValue(
        "timeWeekStart",
        toDateWithOutTimeZone(data.timeWeekStart)
      );
      form?.setValue("timeWeekEnd", toDateWithOutTimeZone(data.timeWeekEnd));

      form?.setValue(
        "timeSaturdayStart",
        toDateWithOutTimeZone(data.timeSaturdayStart)
      );

      form?.setValue(
        "timeSaturdayEnd",
        toDateWithOutTimeZone(data.timeSaturdayEnd)
      );

      form?.setValue(
        "timeSundayStart",
        toDateWithOutTimeZone(data.timeSundayStart)
      );

      form?.setValue(
        "timeSundayEnd",
        toDateWithOutTimeZone(data.timeSundayEnd)
      );

      form?.setValue("invalidHoursWeek", data.invalidHoursWeek);
      form?.setValue("invalidHoursSaturday", data.invalidHoursSaturday);
      form?.setValue("invalidHoursSunday", data.invalidHoursSunday);
      form?.setValue(
        "workShiftStatus",
        data.workShiftStatus === "Ativo" ? 1 : 0
      );
    }
  }

  function sendParameters(data) {
    if (update() !== null) {
      UpdateTurn(data, update().id);
    } else {
      // SendTurns(data);
    }
  }

  function setDeleteModal() {
    const textModal = Texts["pt-BR"].setup.Turns.modalDeleteConfirm;
    Alerts.setSetUpModal(textModal.Title, [textModal.RegisterAlert], () =>
      deleteTurn(update().id, customModal.close())
    );
  }

  function deleteTurn(data) {
    DeleteTurn(data);
  }

  const setConfirmModal = (props) => {
    const textModal =
      update() !== null
        ? Texts["pt-BR"].setup.Turns.modalUpdateConfirm
        : Texts["pt-BR"].setup.Turns.modalRegisterConfirm;
    Alerts.setSetUpModal(textModal.Title, [textModal.RegisterAlert], () =>
      sendParameters(props, customModal.close())
    );
  };

  updateForm();
  return (
    <>
      <FormHolder formRef={setForm} onSubmit={setConfirmModal}>
        <Styles.InputContainer>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Input
                name="name"
                required
                inputLabel={<Styles.Label>{texts.name}</Styles.Label>}
                alternativeColors={2}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Styles.Label>{texts.workTime}</Styles.Label>
              <Box display={"flex"} flexDirection={"row"}>
                <WeekHoursInput
                  required
                  name1="timeWeekStart"
                  name2="timeWeekEnd"
                  title={texts.week}
                />
                <WeekHoursInput
                  name1="timeSaturdayStart"
                  name2="timeSaturdayEnd"
                  title={texts.Saturday}
                />
                <WeekHoursInput
                  name1="timeSundayStart"
                  name2="timeSundayEnd"
                  title={texts.Sunday}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Styles.Label>{texts.invalidWorkTime}</Styles.Label>
              <Box display={"flex"} flexDirection={"row"}>
                <InvalidHoursInput
                  required
                  name="invalidHoursWeek"
                  title={texts.week}
                />
                <InvalidHoursInput
                  name="invalidHoursSaturday"
                  title={texts.Saturday}
                />
                <InvalidHoursInput
                  name="invalidHoursSunday"
                  title={texts.Sunday}
                />
              </Box>
            </Grid>

            {/* Input Validade Turno
            <Grid item xs={12} sm={2} md={2} lg={2}>
              <Styles.Label>{texts.initialDate}</Styles.Label>
              <Box display={"flex"} flexDirection={"row"}>
                <WeekHoursInput
                  name="workShiftStartDate"
                  title={texts.startEnd}
                />
              </Box>
            </Grid>} */}

            <Grid item xs={5} sm={6} md={4} lg={2}>
              <Styles.Label>{texts.status}</Styles.Label>
              <FilterContainerComponent
                styledStyles={styles.inputStyle}
                bgColor={1}
              >
                <Box
                  mt={4.1}
                  gridColumnGap={5}
                  display="flex"
                  flexDirection="row"
                >
                  <Select
                    name="workShiftStatus"
                    options={texts.statusValue}
                    defaultValue={1}
                    customInput
                    disableError
                    small
                    alternativeColors={2}
                  />
                </Box>
              </FilterContainerComponent>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <FilterButtonContained
                style={{
                  marginTop: 28,
                }}
                loading={isFetching}
                type="submit"
                name="button"
                disabled={isFetching}
              >
                {update() !== null ? texts.update : texts.register}
              </FilterButtonContained>
            </Grid>
            {update() !== null ? (
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <FilterButtonOutlined
                  loading={isFetching}
                  onClick={() => {
                    setDeleteModal();
                  }}
                  name="button"
                  disabled={isFetching}
                >
                  {texts.delete}
                </FilterButtonOutlined>
              </Grid>
            ) : null}
          </Grid>
        </Styles.InputContainer>
      </FormHolder>
    </>
  );
}
function mapStateToProps(state) {
  const { isFetching, TurnsData } = state.turns;
  return {
    isFetching,
    TurnsData,
  };
}

function mapDispatchToProps(dispatch) {
  const { GetTurns, SendTurns, DeleteTurn, UpdateTurn } = Creators;
  return {
    GetTurns: function (data) {
      return dispatch(GetTurns(data));
    },
    SendTurns: function (data) {
      return dispatch(SendTurns(data));
    },
    DeleteTurn: function (data) {
      return dispatch(DeleteTurn(data));
    },
    UpdateTurn: function (data, id) {
      return dispatch(UpdateTurn(data, id));
    },
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterFilterModal);

const styles = createStyles({
  inputStyle: {
    width: "240px",
    height: "95px",
  },
});
