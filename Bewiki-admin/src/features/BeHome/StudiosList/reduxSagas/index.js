import createReducers from "../../../../store/helpers/createPageReducer";
import BehomeCategoryDataGet from "./BehomeCategoryDataGet";
import BehomeOccupancyDataGet from "./BehomeOccupancyDataGet";
import BehomeStudioListDataGet from "./BehomeStudioListDataGet";

const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "BehomeOccupancyDataGetRequest",
      params: ["startDate", "endDate"],
      function: (state) => ({
        ...state,
        isFetchingOccupancyData: true,
        occupancyData: null,
      }),
      sagaFunction: BehomeOccupancyDataGet,
    },

    {
      name: "BehomeOccupancyDataGetSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetchingOccupancyData: false,
        occupancyData: data,
      }),
    },

    {
      name: "BehomeOccupancyDataGetFailure",
      function: (state) => ({
        ...state,
        isFetchingOccupancyData: false,
        occupancyData: null,
      }),
    },

    {
      name: "BehomeStudioListDataGetRequest",
      function: (state) => ({
        ...state,
        isFechtingStudioListData: true,
        studioListData: null,
      }),
      params: ["page", "size", "categoryId", "status", "stayType"],
      sagaFunction: BehomeStudioListDataGet,
    },

    {
      name: "BehomeStudioListDataGetSuccess",
      params: ["data"],
      function: (state, { data }) => {
        return {
          ...state,
          isFechtingStudioListData: false,
          studioListData: data,
        };
      },
    },

    {
      name: "BehomeStudioListDataGetFailure",
      function: (state) => ({
        ...state,
        isFechtingStudioListData: false,
        studioListData: null,
      }),
    },

    {
      name: "BehomeCategoryDataGetRequest",
      function: (state) => ({
        ...state,
        isFetchingCategoryData: true,
        categoryData: null,
      }),
      params: ["stayType"],
      sagaFunction: BehomeCategoryDataGet,
    },

    {
      name: "BehomeCategoryDataGetSuccess",
      params: ["data"],
      function: (state, { data }) => {
        return {
          ...state,
          isFetchingCategoryData: false,
          categoryData: data,
        };
      },
    },

    {
      name: "BehomeCategoryDataGetFailure",
      function: (state) => ({
        ...state,
        isFetchingCategoryData: false,
        categoryData: null,
      }),
    },
  ],
  {
    isFetchingOccupancyData: false,
    isFechtingStudioListData: false,
    isFetchingCategoryData: false,
    occupancyData: null,
    studioListData: null,
    categoryData: null,
  }
);

export { Creators, reducers, sagas };
