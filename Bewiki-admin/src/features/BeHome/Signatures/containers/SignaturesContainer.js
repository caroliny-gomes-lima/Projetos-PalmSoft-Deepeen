import React from "react";
import Styles from "../styles/Styles";
import { SignaturesTable } from "../components";
import { Texts } from "../../../../config";
import { IntegratedComponentHolder } from "../../../../components";
import { Creators } from "../reduxSagas";
import { connect } from "react-redux";
import { format } from "date-fns";

function Container({ BehomeSubscriptionsGet, isFetching, subscriptionsData }) {
  const texts = Texts["pt-BR"].beHome;
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState("desc");
  const pageSize = 10;
  const staySubscriptionType = "L";
  //const [staySubscriptionType, setStaySubscriptionType] = React.useState("");
  const curentDate = new Date();

  const maxCheckInDate = format(
    new Date(curentDate.setFullYear(curentDate.getFullYear() - 2)),
    "yyy-MM-dd"
  );

  const minCheckOutDate = format(
    new Date(curentDate.setFullYear(curentDate.getFullYear() + 5)),
    "yyy-MM-dd"
  );

  const loadTableData = React.useCallback(() => {
    BehomeSubscriptionsGet(
      page - 1,
      [sort],
      pageSize,
      staySubscriptionType,
      minCheckOutDate,
      maxCheckInDate
    );
  }, [
    BehomeSubscriptionsGet,
    page,
    sort,
    pageSize,
    staySubscriptionType,
    minCheckOutDate,
    maxCheckInDate,
  ]);
  React.useEffect(loadTableData, [loadTableData]);

  return (
    <Styles.Container>
      <Styles.HeaderContainer>
        <Styles.HeaderContent>
          <Styles.Title>{texts.Signatures.title}</Styles.Title>
        </Styles.HeaderContent>
      </Styles.HeaderContainer>
      <Styles.ScrollContainer>
        {isFetching ? (
          <Styles.LoadingContainer>
            <Styles.CircleLoading
              style={{ width: "10%", height: "auto", margin: "250px" }}
            />
          </Styles.LoadingContainer>
        ) : (
          <IntegratedComponentHolder
            showReload={!subscriptionsData && !isFetching}
            reloadMessage={texts.notFound.message}
            reloadCallback={BehomeSubscriptionsGet}
            reloadLabel={texts.notFound.buttonLabel}
            showEmpty={!subscriptionsData?.content.length && isFetching}
            emptyMessage={null}
          >
            <SignaturesTable
              dataSubscriptions={subscriptionsData}
              loading={isFetching}
              page={page}
              setPage={setPage}
              setSort={setSort}
              sort={sort}
              reload={loadTableData}
            />
          </IntegratedComponentHolder>
        )}
      </Styles.ScrollContainer>
    </Styles.Container>
  );
}

function mapStateToProps(state) {
  const { subscriptionsData, isFetching } = state.BehomeSubscriptions;
  return {
    isFetching,
    subscriptionsData,
  };
}
function mapDispatchToProps(dispatch) {
  const { BehomeSubscriptionsGet } = Creators;
  return {
    BehomeSubscriptionsGet: function (
      page,
      sort,
      pagSize,
      staySubscriptionType,
      minCheckOutDate,
      maxCheckInDate
    ) {
      return dispatch(
        BehomeSubscriptionsGet(
          page,
          sort,
          pagSize,
          staySubscriptionType,
          minCheckOutDate,
          maxCheckInDate
        )
      );
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
