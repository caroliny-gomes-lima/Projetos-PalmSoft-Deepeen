import React from "react";
import { connect } from "react-redux";
import { Table } from "../../../../components";
import { Texts } from "../../../../config";
import { Creators } from "../reduxSagas";
import Style from "../../PlannedEquations/styles/EquationParametersStyle";
import { DeleteForever } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { customModal } from "../../../modals/utils";
import { Alerts } from "../../../../lib";

function ExtraHoursTable({
  ExtraHoursData,
  ExtraHoursRequestDelete,
  isFetching,
}) {
  const texts = Texts["pt-BR"].setup.ExtraHours;
  function deleteDataTable(data) {
    ExtraHoursRequestDelete(data, ExtraHoursData?.idOperator);
  }

  function deleteDataTableModal(item) {
    const textModal = Texts["pt-BR"].setup.ExtraHours.deleteModal;

    Alerts.setSetupDeleteModal(textModal.title, [textModal.deleteAlert], () =>
      deleteDataTable(item, customModal.close())
    );
  }

  return (
    <>
      {ExtraHoursData ? (
        <Style.Content>
          <Style.InputContainer>
            <Table
              id="extraHoursTable"
              headers={texts.listExtraHours}
              data={ExtraHoursData.extraHours}
              justify={2}
              alignText={2}
              placeholderSize={15}
              columnSize={6}
              loading={isFetching}
              renderItemColumns={(item) => [
                item?.date,
                item?.amountHours,

                <Button
                  type="clearDefault"
                  onClick={() => deleteDataTableModal(item)}
                >
                  <DeleteForever />
                </Button>,
              ]}
            />
          </Style.InputContainer>
        </Style.Content>
      ) : null}
    </>
  );
}
function mapStateToProps(state) {
  const { isFetching, ExtraHoursData } = state.extraHours;
  return {
    isFetching,
    ExtraHoursData,
  };
}
function mapDispatchProps(dispatch) {
  const { GetExtraHours, ExtraHoursRequestDelete } = Creators;
  return {
    GetExtraHours: function () {
      return dispatch(GetExtraHours());
    },
    ExtraHoursRequestDelete: function (data, idOp) {
      return dispatch(ExtraHoursRequestDelete(data, idOp));
    },
  };
}
export default connect(mapStateToProps, mapDispatchProps)(ExtraHoursTable);
