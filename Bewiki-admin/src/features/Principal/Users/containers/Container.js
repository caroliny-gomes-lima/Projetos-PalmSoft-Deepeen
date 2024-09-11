import React from "react";
import Styles from "../styles/styles.js";
import { Grid } from "@material-ui/core";
import { FiltersCard, NavButtons } from "../components";
import { Creators } from "../reduxSagas";
import { connect } from "react-redux";
import { UserEnabledCard } from "../EnabledUsers/components";
import { UserBlockedCard } from "../BlockedUsers/components";
import { UserBlackListCard } from "../BlackList/components";
import FormHolder from "../../../../FormConfig/FormHolder.js";
import { Swiper } from "../../../../components/index.js";

function Container({
  UsersData,
  UsersBlockedData,
  BlackListData,
  EnabledUsersRequest,
  BlockedUsersRequest,
  BlackListUsersRequest,
  BlackListUsersPost,
  isFetching,
  InfoCancellationData,
  InfoCancellationRequest,
  CashbackTransactionsData,
  CashbackTransactionsRequest,
}) {
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState("desc");
  const pageSize = 10;

  const loadEnabledCardData = React.useCallback(() => {
    EnabledUsersRequest(page - 1, [sort], pageSize);
    BlockedUsersRequest(page - 1, [sort], pageSize);
    BlackListUsersRequest(page - 1, [sort], pageSize);
  }, [
    EnabledUsersRequest,
    BlockedUsersRequest,
    BlackListUsersRequest,
    page,
    sort,
    pageSize,
  ]);
  React.useEffect(loadEnabledCardData, [loadEnabledCardData]);

  function sendParameters(data) {
    BlackListUsersPost(data);
  }

  const EnabledCardsPage = ({ goTo }) => {
    return (
      <>
        <NavButtons
          goTo={goTo}
          data={UsersData?.content}
          totalPages={UsersData?.totalPages}
          loading={isFetching}
          content={
            <UserEnabledCard
              data={UsersData?.content}
              totalPage={UsersData?.totalPages}
              page={page}
              setPage={setPage}
              setSort={setSort}
              sort={sort}
              InfoCancellationRequest={InfoCancellationRequest}
              InfoCancellationData={InfoCancellationData}
              CashbackTransactionsRequest={CashbackTransactionsRequest}
              CashbackTransactionsData={CashbackTransactionsData}
            />
          }
        />
      </>
    );
  };

  const BlockedCardsPaged = ({ goTo }) => {
    return (
      <>
        <NavButtons
          goTo={goTo}
          data={UsersBlockedData?.content}
          totalPages={UsersBlockedData?.totalPages}
          loading={isFetching}
          content={
            <UserBlockedCard
              data={UsersBlockedData?.content}
              totalPage={UsersBlockedData?.totalPages}
              page={page}
              setPage={setPage}
              setSort={setSort}
              sort={sort}
            />
          }
        />
      </>
    );
  };

  const BlackListCardsPaged = ({ goTo }) => {
    return (
      <>
        <NavButtons
          goTo={goTo}
          data={BlackListData?.content}
          totalPages={BlackListData?.totalPages}
          loading={isFetching}
          content={
            <UserBlackListCard
              loading={isFetching}
              data={BlackListData?.content}
              totalPage={BlackListData?.totalPages}
              page={page}
              setPage={setPage}
              setSort={setSort}
              sort={sort}
            />
          }
        />
      </>
    );
  };

  return (
    <Styles.Container>
      <FormHolder>
        <Grid container spacing={3} direction="row">
          <Grid item xs={10} sm={10} md={3} lg={4}>
            <FiltersCard sendParameters={sendParameters} />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Swiper
              screens={[
                EnabledCardsPage,
                BlockedCardsPaged,
                BlackListCardsPaged,
              ]}
            />
          </Grid>
        </Grid>
      </FormHolder>
    </Styles.Container>
  );
}

function mapStateToProps(state) {
  const {
    InfoCancellationData,
    UsersData,
    UsersBlockedData,
    BlackListData,
    CashbackTransactionsData,
    isFetchingBlocked,
    isFetching,
    isFetchingBlackList,
  } = state.users;
  return {
    isFetching: isFetching || isFetchingBlocked || isFetchingBlackList,
    UsersData,
    UsersBlockedData,
    BlackListData,
    InfoCancellationData,
    CashbackTransactionsData,
  };
}

function mapDispatchToProps(dispatch) {
  const {
    EnabledUsersRequest,
    BlockedUsersRequest,
    BlackListUsersRequest,
    BlackListUsersPost,
    InfoCancellationRequest,
    CashbackTransactionsRequest,
  } = Creators;
  return {
    EnabledUsersRequest: function (page, sort, pageSize, blocked) {
      return dispatch(EnabledUsersRequest(page, sort, pageSize, blocked));
    },
    BlockedUsersRequest: function (page, sort, pageSize, blocked) {
      return dispatch(BlockedUsersRequest(page, sort, pageSize, blocked));
    },
    BlackListUsersRequest: function (page, sort, pageSize) {
      return dispatch(BlackListUsersRequest(page, sort, pageSize));
    },
    BlackListUsersPost: function (data) {
      return dispatch(BlackListUsersPost(data));
    },
    InfoCancellationRequest: function (userId) {
      return dispatch(InfoCancellationRequest(userId));
    },
    CashbackTransactionsRequest: function (userId) {
      return dispatch(CashbackTransactionsRequest(userId));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);
