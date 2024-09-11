import React from "react";
import Styles from "../styles/Styles";
import { Texts } from "../../../../config";
import { connect } from "react-redux";
import { RestaurantsListTable } from "../components";
import { IntegratedComponentHolder } from "../../../../components";
import { Creators } from "../reduxSagas";

function Container({ MerchantsListRequest, merchantsListData, isFetching }) {
  const texts = Texts["pt-BR"].beMarket.RestaurantLists;
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState("desc");
  const pageSize = 10;

  const loadTableData = React.useCallback(() => {
    MerchantsListRequest(page - 1, [sort], pageSize);
  }, [MerchantsListRequest, page, sort, pageSize]);
  React.useEffect(loadTableData, [loadTableData]);

  return (
    <Styles.Container>
      <Styles.HeaderContainer>
        <Styles.HeaderContent>
          <Styles.Title>{texts.title}</Styles.Title>
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
            showReload={!merchantsListData && !isFetching}
            reloadMessage={Texts["pt-BR"].beMarket.notFound.message}
            reloadCallback={merchantsListData}
            reloadLabel={Texts["pt-BR"].beMarket.notFound.buttonLabel}
            showEmpty={!merchantsListData?.content.length && isFetching}
            emptyMessage={null}
          >
            <RestaurantsListTable
              dataTable={merchantsListData}
              loading={isFetching}
              page={page}
              setPage={setPage}
              setSort={setSort}
              sort={sort}
            />
          </IntegratedComponentHolder>
        )}
      </Styles.ScrollContainer>
    </Styles.Container>
  );
}

function mapStateToProps(state) {
  const { merchantsListData, isFetching } = state.BeMarketRestaurantLists;
  return {
    isFetching,
    merchantsListData,
  };
}
function mapDispatchToProps(dispatch) {
  const { MerchantsListRequest } = Creators;
  return {
    MerchantsListRequest: function (page, sort, pagSize) {
      return dispatch(MerchantsListRequest(page, sort, pagSize));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
