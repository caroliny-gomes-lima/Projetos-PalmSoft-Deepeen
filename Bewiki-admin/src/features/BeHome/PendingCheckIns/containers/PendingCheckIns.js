import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { IntegratedComponentHolder, Select } from "../../../../components";
import { Texts } from "../../../../config";
import { FormHolder } from "../../../../FormConfig";
import { BlockTitle } from "../../../../pages/styles/defaultStyles";
import { Styles } from "../styles";
import { Creators } from "../reduxSagas";
import { connect } from "react-redux";
import { PendingCheckInsTable } from "../components";
import texts from "../../../../config/texts";

function Container({
  PendingCheckInsRequest,
  isFetching,
  pendingCheckInsData,
}) {
  const CurrentTexts = Texts["pt-BR"].beHome.PendingCheckIns;
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState("desc");
  const [staySubscriptionType, setStaySubscriptionType] = React.useState("");
  const pageSize = 10;
  const modalityValues = [
    {
      value: 0,
      label: "TODOS",
    },
    {
      value: "S",
      label: "HOSPEDAGEM",
    },

    {
      value: "L",
      label: "MORADIA",
    },
  ];

  const loadTableData = React.useCallback(() => {
    PendingCheckInsRequest(page - 1, sort, pageSize, staySubscriptionType);
  }, [PendingCheckInsRequest, page, sort, pageSize, staySubscriptionType]);

  React.useEffect(loadTableData, [loadTableData]);

  const handleSelectStaySubscriptionType = (value) => {
    if (value === 0) {
      setStaySubscriptionType("");
    } else {
      setStaySubscriptionType(value);
    }
  };

  return (
    <Styles.Container>
      <Styles.HeaderContainer>
        <BlockTitle>{CurrentTexts.title}</BlockTitle>
        {texts.modality}

        <FormHolder>
          <Styles.FilterContainer>
            <Styles.FilterTitle>
              {CurrentTexts.filters.modality}
            </Styles.FilterTitle>
            <Grid item xs={12} sm={12} md={8} lg={7}>
              <Select
                name="subscriptionType"
                options={modalityValues}
                onChange={handleSelectStaySubscriptionType}
                defaultValue={0}
                disableError
                disableBorder
              />
            </Grid>
          </Styles.FilterContainer>
        </FormHolder>
      </Styles.HeaderContainer>
      {isFetching ? (
        <Styles.LoadingContainer>
          <Styles.CircleLoading
            style={{ width: "10%", height: "auto", margin: "250px" }}
          />
        </Styles.LoadingContainer>
      ) : (
        <IntegratedComponentHolder
          showReload={!pendingCheckInsData && !isFetching}
          reloadMessage={CurrentTexts.unableToLoadTableInfo}
          reloadCallback={loadTableData}
          reloadLabel={CurrentTexts.reloadTable}
          showEmpty={!pendingCheckInsData?.content.length && !isFetching}
          emptyMessage={CurrentTexts.empty}
        >
          <PendingCheckInsTable
            pendingCheckInsData={pendingCheckInsData}
            loading={isFetching}
            page={page}
            sort={sort}
            setPage={setPage}
            setSort={setSort}
            reload={loadTableData}
          />
        </IntegratedComponentHolder>
      )}
    </Styles.Container>
  );
}

function mapStateToProps(state) {
  const { isFetching, pendingCheckInsData } = state.beHomePendingCheckIns;
  return {
    isFetching,
    pendingCheckInsData,
  };
}

function mapDispatchToProps(dispatch) {
  const { PendingCheckInsRequest } = Creators;
  return {
    PendingCheckInsRequest: function (
      page,
      sort,
      pageSize,
      staySubscriptionType
    ) {
      return dispatch(
        PendingCheckInsRequest(page, sort, pageSize, staySubscriptionType)
      );
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
