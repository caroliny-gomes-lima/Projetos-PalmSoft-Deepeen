import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Creators } from "../reduxSagas";
import OrderingGrid from "../components/OrderingGrid";
import { IntegratedComponentHolder } from "../../../components";
import { Texts } from "../../../config";

function OrderingIdle({ orderingData, orderingIsFetching, orderingRequest }) {
  const mount = React.useCallback(() => {
    orderingRequest();
  }, [orderingRequest]);

  useEffect(mount, [mount]);

  const texts = Texts["pt-BR"].charts.idleOrdering;

  return (
    <IntegratedComponentHolder
      showReload={!orderingData && !orderingIsFetching}
      reloadMessage={texts.notFound.message}
      reloadCallback={orderingRequest}
      reloadLabel={texts.notFound.buttonLabel}
    >
      <OrderingGrid data={orderingData} />
    </IntegratedComponentHolder>
  );
}

function mapStateToProps(state) {
  const { orderingData, orderingIsFetching } = state.capacity;
  return {
    orderingData,
    orderingIsFetching,
  };
}

function mapDispatchToProps(dispatch) {
  const { orderingRequest } = Creators;
  return {
    orderingRequest() {
      return dispatch(orderingRequest());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderingIdle);
