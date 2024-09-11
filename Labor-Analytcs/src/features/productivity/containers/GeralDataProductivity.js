import React from "react";
import { connect } from "react-redux";
import { Texts } from "../../../config";
import { Creators } from "../reduxSagas";
import Style from "../styles/GlobalProductivityStyle";
import { IntegratedComponentHolder, SkeletonLoader } from "../../../components";
import GeneralDataView from "../components/GeneralDataView";

function GeralDataProductivity({
  GeralDataData,
  isFetching,
  globalProductivityRequest,
}) {
  const texts = Texts["pt-BR"].charts.globalProductivity;

  const renderChart = React.useCallback(() => {
    return (
      <>
        {isFetching ? (
          <div style={{ minWidth: 300 }}>
            <SkeletonLoader
              height="50%"
              width="100%"
              style={{ margin: "auto" }}
            >
              <Style.GraphContainer></Style.GraphContainer>
            </SkeletonLoader>
            <SkeletonLoader
              height="50%"
              width="100%"
              style={{ margin: "auto" }}
            >
              <Style.GraphContainer></Style.GraphContainer>
            </SkeletonLoader>
            <SkeletonLoader
              height="50%"
              width="100%"
              style={{ margin: "auto" }}
            >
              <Style.GraphContainer></Style.GraphContainer>
            </SkeletonLoader>
            <SkeletonLoader
              height="50%"
              width="100%"
              style={{ margin: "auto" }}
            >
              <Style.GraphContainer></Style.GraphContainer>
            </SkeletonLoader>
          </div>
        ) : (
          <GeneralDataView isFetching={isFetching} data={GeralDataData} />
        )}
      </>
    );
  }, [isFetching, GeralDataData]);

  return (
    <IntegratedComponentHolder
      showReload={!GeralDataData && !isFetching}
      reloadMessage={texts.notFound.message}
      reloadCallback={globalProductivityRequest}
      reloadLabel={texts.notFound.buttonLabel}
    >
      {renderChart()}
    </IntegratedComponentHolder>
  );
}

function mapStateToProps(state) {
  const { GeralDataData, isFetching } = state.productivity;
  return {
    GeralDataData,
    isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  const { globalProductivityRequest } = Creators;
  return {
    globalProductivityRequest: function (filters) {
      return dispatch(globalProductivityRequest(filters));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeralDataProductivity);
