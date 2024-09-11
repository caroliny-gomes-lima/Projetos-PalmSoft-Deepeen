import React from "react";
import Styles from "../styles/Styles";
import { Texts } from "../../../../config";
import { Grid } from "@material-ui/core";
import { Creators } from "../reduxSagas";
import { connect } from "react-redux";
import { CashBackTable, VerticalFilters } from "../components";
import { IntegratedComponentHolder } from "../../../../components";
import { FormHolder } from "../../../../FormConfig";

function Container({ CashBackListRequest, cashBackListData, isFetching }) {
  const Title = Texts["pt-BR"].cashBack;
  const texts = Texts["pt-BR"].notFound;
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState("desc");
  const [sectorId, setVerticalSectorId] = React.useState("");
  const pageSize = 10;

  const verticalSector = [
    {
      value: 0,
      label: "Todos",
    },
    {
      value: "kUsI09iNU8RUfd9V6p78lA==",
      label: "Behome",
    },
    {
      value: "L2U7gBxLEx1PIHzZClipRw==",
      label: "Bework",
    },
    {
      value: "VNCpUHlrm7qXcUL6xoFLcA==",
      label: "Becare",
    },
    {
      value: "Fz5hhO6DG2bUyYaQzXdGJg==",
      label: "Bemarket",
    },
    {
      value: "wSWG-W1Fs39mcRC8mfF3Lg==",
      label: "Bemobi",
    },
  ];

  const mount = React.useCallback(() => {
    CashBackListRequest(page - 1, [sort], pageSize, sectorId);
  }, [CashBackListRequest, page, sort, pageSize, sectorId]);
  React.useEffect(mount, [mount]);

  function getParameters(data) {
    if (data === 0) {
      setVerticalSectorId("");
    } else {
      setVerticalSectorId(data);
    }
  }

  return (
    <Styles.Container>
      <Styles.HeaderContainer>
        <Styles.HeaderContent>
          <Grid item xs={8} sm={8} md={6} lg={6}>
            <Styles.Title>{Title.title}</Styles.Title>
          </Grid>
        </Styles.HeaderContent>
        <FormHolder>
          <Grid item xs={12} sm={4} md={3} lg={3}>
            <VerticalFilters
              name="sectorId"
              options={verticalSector}
              onChange={getParameters}
              defaultValue={0}
            />
          </Grid>
        </FormHolder>
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
            showReload={!cashBackListData && !isFetching}
            reloadMessage={texts.message}
            reloadCallback={mount}
            reloadLabel={texts.buttonLabel}
            showEmpty={!cashBackListData?.content.length && !isFetching}
            emptyMessage={null}
          >
            <CashBackTable
              data={cashBackListData}
              loading={isFetching}
              page={page}
              setPage={setPage}
              setSort={setSort}
              sort={sort}
              reload={mount}
            />
          </IntegratedComponentHolder>
        )}
      </Styles.ScrollContainer>
    </Styles.Container>
  );
}

function mapStateToProps(state) {
  const { cashBackListData, isFetching } = state.CashBack;

  return {
    cashBackListData,
    isFetching,
  };
}
function mapDispatchToProps(dispatch) {
  const { CashBackListRequest } = Creators;
  return {
    CashBackListRequest: function (page, sort, pageSize, sectorId) {
      return dispatch(CashBackListRequest(page, sort, pageSize, sectorId));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);
