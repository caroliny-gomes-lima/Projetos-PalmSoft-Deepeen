import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Creators } from "../reduxSagas";
import { CircularProgress } from "@material-ui/core";
import Style from "../styles/OrderingGridStyle";
import OrderingGrid from "../components/OrderingGrid";

function OrderingIdle({
  theme,
  servingListData,
  servingListIsFetching,
  costsServingListRequest,
}) {
  const mount = React.useCallback(() => {
    costsServingListRequest();
  }, [costsServingListRequest]);

  useEffect(mount, [mount]);

  return (
    <>
      {servingListIsFetching ? (
        <CircularProgress />
      ) : (
        <Style.Container>
          <Style.Content>
            <OrderingGrid data={servingListData} />
          </Style.Content>
        </Style.Container>
      )}
    </>
  );
}

function mapStateToProps(state) {
  const { servingListData, servingListIsFetching } = state.costs;
  return {
    servingListData,
    servingListIsFetching,
  };
}

function mapDispatchToProps(dispatch) {
  const { costsServingListRequest } = Creators;
  return {
    costsServingListRequest() {
      return dispatch(costsServingListRequest());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderingIdle);
