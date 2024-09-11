import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Texts } from "../../../../config";
import { Creators } from "../reduxSagas";
import { ModalTurn, TurnsStyles } from "../styles";
import { ClickAwayListener, Fade, Grid, IconButton } from "@material-ui/core";
import { FilterButtonContained } from "../../../../components";
import { FormHolder } from "FormConfig";
import { AddSharp } from "@material-ui/icons";
import { RegisterFilterModal } from "../components";

function Turns({ TurnsData, isFetching, SendTurns, GetTurns }) {
  useEffect(() => {
    GetTurns();
  }, [GetTurns]);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  function sendParameters(data) {
    SendTurns(data);
  }

  const texts = Texts["pt-BR"].setup.Turns;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormHolder>
        <TurnsStyles.HeaderContainer>
          {texts.title}
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
              {texts.turnRegister}
            </FilterButtonContained>
          </Grid>
        </TurnsStyles.HeaderContainer>

        <ModalTurn.StyledRegisterModal
          open={open}
          onClose={() => setOpen(false)}
          BackdropComponent={ModalTurn.styledBackDrop}
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
              <ModalTurn.Container>
                <ModalTurn.HeaderContainer>
                  <ModalTurn.Title>{texts.modalRegister.title}</ModalTurn.Title>
                  <IconButton onClick={() => handleCloseModal()}>
                    <ModalTurn.Close />
                  </IconButton>
                </ModalTurn.HeaderContainer>
                <RegisterFilterModal
                  sendParameters={sendParameters}
                  isFetching={isFetching}
                />
              </ModalTurn.Container>
            </Fade>
          </ClickAwayListener>
        </ModalTurn.StyledRegisterModal>
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
  const { GetTurns, SendTurns } = Creators;
  return {
    GetTurns: function (data) {
      return dispatch(GetTurns(data));
    },
    SendTurns: function (data) {
      return dispatch(SendTurns(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Turns);
