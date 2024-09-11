import React from "react";
import { connect } from "react-redux";
import { Swiper } from "../../../../components";
import { Texts } from "../../../../config";
import {
  FiltersStudiosList,
  StudioListDetails,
  StudioBoardInfo,
} from "../components";
import { Creators } from "../reduxSagas";
import Styles from "../styles/StyledCard";

function Container({
  occupancyData,
  studioListData,
  categoryData,
  isFetchingOccupancyData,
  isFetchingStudioListData,
  isFetchingCategoriesData,
  BehomeOccupancyDataGetRequest,
  BehomeStudioListDataGetRequest,
  BehomeCategoryDataGetRequest,
}) {
  const texts = Texts["pt-BR"].beHome.StudiosList;
  const [page, setPage] = React.useState(1);
  const [stayType, setStayType] = React.useState(null);
  const [category, setCategory] = React.useState(null);
  const [showFilters, setShowFilters] = React.useState(false);
  const [gridViewSelect, setGridViewSelected] = React.useState(true);
  const [listViewSelect, setListViewSelected] = React.useState(false);
  const pageSize = 9;

  const ValueModalityMap = {
    0: null,
    1: "SHORT_STAY",
    2: "LONG_STAY",
  };

  const onStayTypeFilterChange = (newValue) => {
    if (newValue === null) {
      return;
    }

    setStayType(ValueModalityMap[newValue]);
  };

  const onCategoryFilterChange = (newValue) => {
    if (newValue === null) {
      return;
    }

    if (newValue === 0) {
      setCategory(null);
      return;
    }

    setCategory(newValue);
  };

  const getStudioListData = React.useCallback(() => {
    BehomeStudioListDataGetRequest(
      page - 1,
      pageSize,
      category,
      null,
      stayType
    );
  }, [BehomeStudioListDataGetRequest, page, stayType, category]);

  const getOccupancyData = React.useCallback(() => {
    BehomeOccupancyDataGetRequest();
  }, [BehomeOccupancyDataGetRequest]);

  const getFilterCategories = React.useCallback(() => {
    BehomeCategoryDataGetRequest(stayType);
  }, [BehomeCategoryDataGetRequest, stayType]);

  React.useEffect(getStudioListData, [getStudioListData]);
  React.useEffect(getOccupancyData, [getOccupancyData]);
  React.useEffect(getFilterCategories, [getFilterCategories]);

  const studioBoardScreen = ({ goNext }) => {
    setShowFilters(true);
    return (
      <StudioBoardInfo
        changeScreen={goNext}
        occupancyData={occupancyData}
        isFetchingOccupancyData={isFetchingOccupancyData}
        isFetchingStudioListData={isFetchingStudioListData}
        studioListData={studioListData}
        page={page}
        setPage={setPage}
        textCard={texts.CardView}
        textStatusLabels={texts.statusLabels}
        gridViewSelect={gridViewSelect}
      />
    );
  };

  const studioDetailsScreen = ({ goPrevious }) => {
    setShowFilters(false);
    return (
      <>
        <StudioListDetails changeScreen={goPrevious} />
      </>
    );
  };

  return (
    <>
      <Styles.Container>
        {showFilters ? (
          <FiltersStudiosList
            onStayTypeChange={onStayTypeFilterChange}
            categoryData={categoryData}
            onCategoryChange={onCategoryFilterChange}
            isFetchingCategoriesData={isFetchingCategoriesData}
            gridViewSelect={gridViewSelect}
            setGridViewSelected={setGridViewSelected}
            listViewSelect={listViewSelect}
            setListViewSelected={setListViewSelected}
          />
        ) : (
          <></>
        )}
        <Styles.Content>
          <Swiper screens={[studioBoardScreen, studioDetailsScreen]} />
        </Styles.Content>
      </Styles.Container>
    </>
  );
}

function mapStateToProps(state) {
  const {
    occupancyData,
    studioListData,
    categoryData,
    isFetchingOccupancyData,
    isFetchingStudioListData,
  } = state.behomeStudiosList;
  return {
    occupancyData,
    studioListData,
    isFetching: isFetchingOccupancyData || isFetchingStudioListData,
    isFetchingOccupancyData,
    isFetchingStudioListData,
    categoryData,
  };
}

function mapDispatchToProps(dispatch) {
  const {
    BehomeOccupancyDataGetRequest,
    BehomeStudioListDataGetRequest,
    BehomeCategoryDataGetRequest,
  } = Creators;
  return {
    BehomeOccupancyDataGetRequest: function () {
      return dispatch(BehomeOccupancyDataGetRequest());
    },
    BehomeStudioListDataGetRequest: function (
      page,
      size,
      categoryId,
      status,
      stayType
    ) {
      return dispatch(
        BehomeStudioListDataGetRequest(page, size, categoryId, status, stayType)
      );
    },
    BehomeCategoryDataGetRequest: function (stayType) {
      return dispatch(BehomeCategoryDataGetRequest(stayType));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
