import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Creators } from "../reduxSagas";
import OrderingGrid from "../components/OrderingGrid";
import { IntegratedComponentHolder } from "../../../components";
import { Texts } from "../../../config";

function UserList({
  GetUsersData,
  isFetchingGetUsers,
  getUsersRequest,
  updateUserRequest,
}) {
  const mount = React.useCallback(() => {
    getUsersRequest();
  }, [getUsersRequest]);

  useEffect(mount, [mount]);

  const texts = Texts["pt-BR"].charts.historicProductivity;

  return (
    <IntegratedComponentHolder
      showReload={!GetUsersData && isFetchingGetUsers}
      reloadMessage={texts.notFound.message}
      reloadCallback={getUsersRequest}
      reloadLabel={texts.notFound.buttonLabel}
    >
      <OrderingGrid updateUserRequest={updateUserRequest} data={GetUsersData} />
    </IntegratedComponentHolder>
  );
}

function mapStateToProps(state) {
  const { GetUsersData, isFetchingGetUsers } = state.settings;
  return {
    GetUsersData,
    isFetchingGetUsers,
  };
}

function mapDispatchToProps(dispatch) {
  const { getUsersRequest, updateUserRequest } = Creators;
  return {
    getUsersRequest() {
      return dispatch(getUsersRequest());
    },
    updateUserRequest(data) {
      return dispatch(updateUserRequest(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
