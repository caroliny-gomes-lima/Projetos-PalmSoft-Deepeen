import React from "react";
import { connect } from "react-redux";
import { Creators } from "../reduxSagas";
import OrderingGrid from "../components/OrderingGrid";
import { IntegratedComponentHolder } from "../../../components";
import { Texts } from "../../../config";
import Styles from "../styles/OrderingGridStyle";
import { ExitToApp } from "@material-ui/icons";
import { BlockTitle } from "../../../pages/styles/defaultStyles";
import { ToCSV } from "../../../lib";
import { Switch, Grid } from "@material-ui/core";

function HistoricProductivity({
  orderingProductivityData,
  isFetching,
  globalProductivityRequest,
}) {
  const [orderingUp, setOrderingUp] = React.useState(false);

  const sortList = React.useCallback(
    (listToSort, ignoreStateOrder) => {
      return listToSort.sort((a, b) => {
        if (a.productivity > b.productivity) {
          return orderingUp && !ignoreStateOrder ? 1 : -1;
        } else if (a.productivity < b.productivity) {
          return orderingUp && !ignoreStateOrder ? -1 : 1;
        }
        return 0;
      });
    },
    [orderingUp]
  );

  const list = React.useMemo(() => {
    if (isFetching) {
      return null;
    } else if (orderingProductivityData?.length) {
      const result = sortList(
        orderingProductivityData.filter((item) => item.productivity > 0)
      );
      return result.length ? result : [];
    }
    return null;
  }, [sortList, orderingProductivityData, isFetching]);

  const texts = Texts["pt-BR"].charts.productivityOrdering;

  return (
    <>
      {!isFetching &&
      orderingProductivityData &&
      orderingProductivityData.length ? (
        <Styles.ButtonsContainer>
          <Grid container spacing={1} justify="space-between">
            <Grid item xs={5} sm={4} md={4} lg={7}>
              <Styles.RowTitle
                $onlyTitle={
                  isFetching ||
                  !orderingProductivityData ||
                  !orderingProductivityData.length
                }
              >
                <BlockTitle>{texts.name}</BlockTitle>
              </Styles.RowTitle>
            </Grid>
            <Styles.ExportButtonContainer>
              <Grid container spacing={2}>
                <Grid item xs={8} sm={8} md={8} lg={8}>
                  <Styles.OrderingButtonContainer>
                    <Styles.OrderingButton
                      onClick={() => setOrderingUp(!orderingUp)}
                    >
                      <Switch checked={orderingUp} />{" "}
                      {orderingUp
                        ? texts.orderingButtonUp
                        : texts.orderingButtonDown}
                    </Styles.OrderingButton>
                  </Styles.OrderingButtonContainer>
                </Grid>

                <Grid item xs={6} sm={4} md={4} lg={4}>
                  <Styles.ExportButton
                    startIcon={<ExitToApp />}
                    // onClick={() => ToCSV.table("productivityTable", texts.csvName)}
                    onClick={() =>
                      ToCSV.data(
                        sortList(orderingProductivityData, true),
                        texts.tableCSV,
                        [
                          "name",
                          "registrationId",
                          "process",
                          "productivityTax",
                          "currentRank",
                          "lastMonthRank",
                          "checkoutEquipments",
                          "checkoutLinesPerOt",
                          "checkoutWeightPerOt",
                          "separationdisplacement",
                          "separationLinesPerOt",
                          "separationWeightPerOt",
                        ],
                        texts.csvName
                      )
                    }
                  >
                    {texts.exportButton}
                  </Styles.ExportButton>
                </Grid>
              </Grid>
            </Styles.ExportButtonContainer>
          </Grid>
        </Styles.ButtonsContainer>
      ) : null}
      <IntegratedComponentHolder
        showReload={!list && !isFetching}
        reloadMessage={texts.notFound.message}
        reloadCallback={globalProductivityRequest}
        reloadLabel={texts.notFound.buttonLabel}
        showEmpty={!list?.length && !isFetching}
        emptyMessage={texts.emptyList}
      >
        <OrderingGrid data={list} loading={isFetching} />
      </IntegratedComponentHolder>
    </>
  );
}

function mapStateToProps(state) {
  const { orderingProductivityData, isFetching } = state.productivity;
  return {
    orderingProductivityData,
    isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  const { globalProductivityRequest } = Creators;
  return {
    globalProductivityRequest: function () {
      return dispatch(globalProductivityRequest());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoricProductivity);
