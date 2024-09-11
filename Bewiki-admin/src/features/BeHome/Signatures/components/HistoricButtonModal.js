import React from "react";
import { HistoricModalSyles as Styles } from "../styles";
import { Grid } from "@material-ui/core";
import { Texts } from "../../../../config";
import { SimpleTable } from "../../../../components";
import { Filters } from "../../../../lib";
import { Creators } from "../reduxSagas";
import { connect } from "react-redux";
import { customModal } from "../../../modals/utils";
import TableHistoryButton from "../../components/buttons/TableHistoryButton";

function HistoricButtonModal({
  tableData,
  historicData,
  BeHomeTransactionGet,
  transactionData,
}) {
  const text = Texts["pt-BR"].beHome.Signatures.ModalHistoricSignatures;

  const handleOpenModal = () => {
    BeHomeTransactionGet(tableData.id);
    customModal.setInfos(
      null,
      text.title1,
      [text.text1],
      null,
      null,
      <>
        <Styles.HeaderContainer $defaultMargin>
          <Styles.Title>{text.title2}</Styles.Title>
        </Styles.HeaderContainer>

        <Styles.ModalContent>
          <SimpleTable
            id="paymentsTable"
            headers={text}
            data={historicData.content}
            justify
            renderItemColumns={(item) => [
              <Grid item xs={12} sm={12} md={12} lg={9}>
                {item.studio}
              </Grid>,
              <Grid item xs={12} sm={12} md={12} lg={9}>
                {displayDate(item.checkIn, item.checkOut)}
              </Grid>,
              <Grid item xs={12} sm={12} md={12} lg={9}>
                {item.name}
              </Grid>,
            ]}
          />
        </Styles.ModalContent>
        <Styles.FooterModal>
          <Styles.TextFieldButton
            fullWidth={false}
            onClick={() => handleCloseModal()}
          >
            {text.back}
          </Styles.TextFieldButton>
        </Styles.FooterModal>
      </>
    );
  };
  const handleCloseModal = () => {
    customModal.close();
  };

  function displayDate(checkIn, checkOut) {
    const texts = Texts["pt-BR"].beHome.Signatures;
    return `${Filters.fixDateToLabel(checkIn)} ${
      texts.until
    } ${Filters.fixDateToLabel(checkOut)}`;
  }

  historicData = {
    content: [
      {
        studio: "Pagamento Confirmado",
        checkIn: "2022-01-01",
        checkOut: "2022-01-02",
        name: "Afonso Mathias",
      },
      {
        studio: "Pagamento Confirmado",
        checkIn: "2022-01-01",
        checkOut: "2022-01-02",
        name: "Afonso Mathias",
      },
      {
        studio: "Cancelado",
        checkIn: "2022-01-01",
        checkOut: "2022-01-02",
        name: "Afonso Mathias",
      },
    ],
  };

  return <TableHistoryButton onClick={handleOpenModal} />;
}

function mapStateToProps(state) {
  const { transactionData } = state.BehomeSubscriptions;
  return {
    transactionData,
  };
}

function mapDispatchToProps(dispatch) {
  const { BeHomeTransactionGet } = Creators;
  return {
    BeHomeTransactionGet: function (StaySubscriptionId) {
      return dispatch(BeHomeTransactionGet(StaySubscriptionId));
    },
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoricButtonModal);
