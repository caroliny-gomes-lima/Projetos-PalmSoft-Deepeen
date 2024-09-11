import React from "react";
import { UserCardStyle as Styles } from "../../styles";
import { Grid } from "@material-ui/core";
import { Texts } from "../../../../../config";
import { FormHolder } from "../../../../../FormConfig";
import { connect } from "react-redux";
import { customModal } from "../../../../modals/utils";
import { SimpleTable } from "../../../../../components";
import { Creators } from "../../reduxSagas";

function TransactionsCashbackModal({ userData, isFetching, CashbackTransactionsRequest, CashbackTransactionsData }) {
  const text = Texts["pt-BR"].users.enabledUsers.TransactionsCashbackModal;

  const mount = React.useCallback(() => {
    CashbackTransactionsRequest(userData.id);
  }, [CashbackTransactionsRequest, userData]);
  React.useEffect(mount, [mount]);

  function sendParameters() {
    customModal.close();
  }

  return (
    <FormHolder onSubmit={sendParameters}>
        {CashbackTransactionsData !== null && CashbackTransactionsData !== "" ? (
          <Styles.ModalContent>
          <SimpleTable
            id="cashbackHistoricTable"
            headers={text}
            data={CashbackTransactionsData}
            justify
            renderItemColumns={(item) => [
              new Date(item.date).toLocaleDateString(),
              `R$ ${item.value}`,
              item.type,
            ]}
          />
          </Styles.ModalContent>
        ) : (
          <Styles.WithoutDataBox>
            <Styles.WithoutDataText>Sem transações de cashback</Styles.WithoutDataText>
          </Styles.WithoutDataBox>
        )}
      

      <Grid container spacing={0} justify="flex-end">
        <Styles.FooterModal>
          <Styles.TextFieldButtonCancel onClick={() => customModal.close()}>
            {text.back}
          </Styles.TextFieldButtonCancel>
        </Styles.FooterModal>
      </Grid>
    </FormHolder>
  );
}

function mapStateToProps(state) {
  const { CashbackTransactionsData } = state.users;
  return { CashbackTransactionsData };
}

function mapDispatchToProps(dispatch) {
  const { CashbackTransactionsRequest } = Creators;
  return {
    CashbackTransactionsRequest: function (userId) {
      return dispatch(CashbackTransactionsRequest(userId));
    },
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsCashbackModal);
