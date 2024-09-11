import React from "react";
import Styles from "../styles/Styles";
import ReservationsTable from "../components/ReservationsTable";
import { Texts } from "../../../../config";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { Creators } from "../reduxSagas";
import { IntegratedComponentHolder } from "../../../../components";
import { InformationModal, StayTypeFilters } from "../components";

function Container({
  ReservationsRequest,
  isFetching,
  requestedReservationsData,
}) {
  const Title = Texts["pt-BR"].beHome;
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState("desc");
  const pageSize = 10;
  const [staySubscriptionType, setStaySubscriptionType] = React.useState("");

  const typeStay = [
    {
      value: 0,
      label: "Todos",
    },
    {
      value: "S",
      label: "Hospedagem",
    },
    {
      value: "L",
      label: "Moradia",
    },
  ];
  const loadTableData = React.useCallback(() => {
    ReservationsRequest(page - 1, [sort], pageSize, staySubscriptionType);
  }, [ReservationsRequest, page, sort, pageSize, staySubscriptionType]);

  React.useEffect(loadTableData, [loadTableData]);

  function getParameters(data) {
    if (data === 0) {
      setStaySubscriptionType("");
    } else {
      setStaySubscriptionType(data);
    }
  }

  return (
    <Styles.Container>
      <Styles.HeaderContainer>
        <Styles.HeaderContent>
          <Grid item xs={8} sm={8} md={8} lg={8}>
            <Styles.Title>{Title.RequestedReservations.title}</Styles.Title>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2}>
            <InformationModal />
          </Grid>
        </Styles.HeaderContent>

        <Grid item xs={12} sm={4} md={4} lg={4}>
          <StayTypeFilters
            name="stayType"
            onChange={getParameters}
            options={typeStay}
            defaultValue={0}
          />
        </Grid>
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
            showReload={!requestedReservationsData && !isFetching}
            reloadMessage={Title.notFound.message}
            reloadCallback={ReservationsRequest}
            reloadLabel={Title.notFound.buttonLabel}
            showEmpty={
              !requestedReservationsData?.content.length && !isFetching
            }
            emptyMessage={null}
          >
            <ReservationsTable
              reservationsData={requestedReservationsData}
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
  const { requestedReservationsData, isFetching } =
    state.BeHomeRequestedReservations;
  return {
    isFetching,
    requestedReservationsData,
  };
}
function mapDispatchToProps(dispatch) {
  const { ReservationsRequest } = Creators;
  return {
    ReservationsRequest: function (page, sort, pageSize, staySubscriptionType) {
      return dispatch(
        ReservationsRequest(page, sort, pageSize, staySubscriptionType)
      );
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);
