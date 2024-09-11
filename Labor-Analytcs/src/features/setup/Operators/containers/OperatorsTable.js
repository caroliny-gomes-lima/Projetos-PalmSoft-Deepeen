import React from "react";
import { connect } from "react-redux";
import { Table, IconButtonComponent } from "../../../../components";
import { Texts } from "../../../../config";
import Style from "../../PlannedEquations/styles/EquationParametersStyle";
import { IconButton, Fade } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { FormHolder } from "FormConfig";
import RegisterFilterModal from "../components/RegisterFilterModal";
import { HoursRegisterStyles as EditRegisterModal } from "../Styles";

function OperatorsTable({ OperatorsData, isFetching }) {
  const texts = Texts["pt-BR"].setup.Operators;
  const [open, setOpen] = React.useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div>{texts.OperatorsList}</div>
      {OperatorsData ? (
        <Style.Content>
          <FormHolder>
            <Style.InputContainer>
              <Table
                id="OperatorsList"
                headers={texts.listOperators}
                data={OperatorsData}
                justify={2}
                alignText={2}
                placeholderSize={15}
                columnSize={6}
                loading={isFetching}
                renderItemColumns={(item) => [
                  item.registry,
                  item.name,
                  item.sector,
                  item.laborWorkShift,
                  item.operatorStatus,

                  <IconButton onClick={() => handleOpenModal()}>
                    <IconButtonComponent buttonColor={2} IconColor={2}>
                      <Edit />
                    </IconButtonComponent>
                  </IconButton>,
                ]}
              />
            </Style.InputContainer>
            <EditRegisterModal.StyledRegisterModal
              open={open}
              onClose={() => setOpen(false)}
              BackdropComponent={EditRegisterModal.styledBackDrop}
            >
              <Fade in={open}>
                <EditRegisterModal.Container>
                  <EditRegisterModal.HeaderContainer>
                    <EditRegisterModal.Title>
                      {texts.OperatorRegisterFilters.registerOperator}
                    </EditRegisterModal.Title>
                    <IconButton onClick={() => handleCloseModal()}>
                      <EditRegisterModal.Close />
                    </IconButton>
                  </EditRegisterModal.HeaderContainer>
                  <RegisterFilterModal />
                </EditRegisterModal.Container>
              </Fade>
            </EditRegisterModal.StyledRegisterModal>
          </FormHolder>
        </Style.Content>
      ) : null}
    </>
  );
}

function mapStateToProps(state) {
  const { isFetching, OperatorsData } = state.operators;
  return {
    isFetching,
    OperatorsData,
  };
}
function mapDispatchProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchProps)(OperatorsTable);
