import React from "react";
import { connect } from "react-redux";
import { Table, IconButtonComponent } from "../../../../components";
import { Texts } from "../../../../config";
import { ModalTurn, TurnsStyles } from "../styles";
import { FormHolder } from "FormConfig";
import { ClickAwayListener, Fade, IconButton } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { InputData, RegisterFilterModal, WeekHours } from "../components";

function TurnsTable({ TurnsData, isFetching }) {
  const [open, setOpen] = React.useState(false);
  const [info, setInfo] = React.useState(null);
  const texts = Texts["pt-BR"].setup.Turns;
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  function getInfo() {
    return info;
  }

  return (
    <>
      {TurnsData ? (
        <FormHolder>
          <TurnsStyles.ListContainer>
            <TurnsStyles.ListContent>
              <Table
                id="turnsList"
                headers={texts.turnList}
                data={TurnsData}
                placeholderSize={4}
                columnSize={4}
                height={"10%"}
                loading={isFetching}
                renderItemColumns={(item) => [
                  <InputData data={item.shift} type={2} />,
                  <>
                    <WeekHours
                      title={texts.turnsInputs.week}
                      value1={item.timeWeekStart}
                      value2={item.timeWeekEnd}
                    />

                    <WeekHours
                      title={texts.turnsInputs.Saturday}
                      value1={item.timeSaturdayStart}
                      value2={item.timeSaturdayEnd}
                    />

                    <WeekHours
                      title={texts.turnsInputs.Sunday}
                      value1={item.timeSundayStart}
                      value2={item.timeSundayEnd}
                    />
                  </>,
                  <InputData data={item.workShiftStatus} type={2} />,
                  <IconButton
                    onClick={() => {
                      setInfo(item);
                      handleOpenModal();
                    }}
                  >
                    <IconButtonComponent buttonColor={2} IconColor={2}>
                      <Edit />
                    </IconButtonComponent>
                  </IconButton>,
                ]}
              />
            </TurnsStyles.ListContent>
          </TurnsStyles.ListContainer>
        </FormHolder>
      ) : null}
      <ClickAwayListener
        mouseEvent="onMouseUp"
        onClickAway={() => {
          if (open) {
            setOpen(false);
          }
        }}
      >
        <Fade in={open}>
          <ModalTurn.Container>
            <ModalTurn.HeaderContainer>
              <ModalTurn.Title>
                {texts.modalRegister.titleUpdate}
              </ModalTurn.Title>
              <IconButton onClick={() => handleCloseModal()}>
                <ModalTurn.Close />
              </IconButton>
            </ModalTurn.HeaderContainer>
            <RegisterFilterModal
              isFetching={isFetching}
              update={() => getInfo()}
            />
          </ModalTurn.Container>
        </Fade>
      </ClickAwayListener>
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
function mapDispatchProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchProps)(TurnsTable);
