import React from "react";
import Styles from "../styles/Styles";
import {
  FlowTable,
  ModalityFilter,
  CardView,
} from "../components";
import { Texts } from "../../../../config";
import { Creators } from "../reduxSagas";
import { connect } from "react-redux";
import { IntegratedComponentHolder } from "../../../../components";

function Container({
  PrevisionFlowRequest,
  StayCheckInfoFlowRequest,
  isFetching,
  PrevisionFlowData,
  CheckInfoData,
}) {
  const Title = Texts["pt-BR"].beHome;
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState("desc");
  const [status, setStatus] = React.useState(null);
  const [stayType, setStayType] = React.useState(null);
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [name, setName] = React.useState("");
  const pageSize = 10;
 
  const loadTableData = React.useCallback(() => {
    PrevisionFlowRequest(page - 1, pageSize, sort, name, stayType, status);
    StayCheckInfoFlowRequest(startDate, endDate);
  }, [
    StayCheckInfoFlowRequest,
    startDate,
    endDate,
    PrevisionFlowRequest,
    page,
    pageSize,
    sort,
    name,
    stayType,
    status
  ]);
 
  React.useEffect(loadTableData, [loadTableData]);

  function getStayTypeParameters(data) {
    setStayType(data);
  }

  function getStatusParameters(data) {
    setStatus(data);
  }

  return (
    <>
      <Styles.Container>
        <ModalityFilter name="stayType" sendParameters={getStayTypeParameters} />

        <Styles.Content>
          <CardView 
            dataCard={CheckInfoData} 
            setStartDate={setStartDate} 
            setEndDate={setEndDate} 
          />
        </Styles.Content>

        <Styles.Content $defaultheight>
          <Styles.ScrollContainer>
            {isFetching ? (
              <Styles.LoadingContainer>
                <Styles.CircleLoading
                  style={{
                    width: "10%",
                    height: "auto",
                    margin: "250px",
                  }}
                />
              </Styles.LoadingContainer>
            ) : (
              <IntegratedComponentHolder
                showReload={!PrevisionFlowData && !isFetching}
                reloadMessage={Title.notFound.message}
                reloadCallback={PrevisionFlowRequest}
                reloadLabel={Title.notFound.buttonLabel}
                showEmpty={!PrevisionFlowData?.content.length && !isFetching}
                emptyMessage={"Vazio"}
              >
                <FlowTable
                  dataTableFlow={PrevisionFlowData}
                  loading={isFetching}
                  page={page}
                  sort={sort}
                  setPage={setPage}
                  setSort={setSort}
                  sendParameters={getStatusParameters}
                  setName={setName}
                />
              </IntegratedComponentHolder>
            )}
          </Styles.ScrollContainer>
        </Styles.Content>
      </Styles.Container>
    </>
  );
}

function mapStateToProps(state) {
  const { PrevisionFlowData, CheckInfoData, isFetching } =
    state.behomePrevisionFlow;
  return {
    PrevisionFlowData,
    CheckInfoData,
    isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  const { PrevisionFlowRequest, StayCheckInfoFlowRequest } = Creators;
  return {
    PrevisionFlowRequest: function (page, pageSize, sort, name, stayType, status) {
      return dispatch(PrevisionFlowRequest(page, pageSize, sort, name, stayType, status));
    },
    StayCheckInfoFlowRequest: function (startDate, endDate) {
      return dispatch(StayCheckInfoFlowRequest(startDate, endDate));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
