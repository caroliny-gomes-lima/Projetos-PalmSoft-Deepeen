import React from "react";
import { createStyles } from "@material-ui/core";
import { Texts } from "../../../config";
import {
  FilterButtonContained,
  FilterButtonContainer,
  FilterButtonOutlined,
  FilterButtonsContainer,
  FilterContainer,
  FiltersContainer,
} from "../../../components";
import { Close, TransferRight } from "../../../config/icons";

import VisionFilter from "./VisionFilter";
import ProcessFilter from "./ProcessFilter";
import DimensionsFilter from "./DimensionsFilter";
import OperatorFilter from "./OperatorFilter";
import PeriodFilter from "./PeriodFilter";
import { FormHolder } from "../../../FormConfig";
import { connect } from "react-redux";
import { Creators } from "../reduxSagas";
import { FilterHandler } from "../../header/utils";

function formatDate(date) {
  return date ? new Date(date).toISOString() : null;
}

function ProductivityFiltersContainer({
  globalCapacityRequest,
  historicCapacityRequest,
  orderingRequest,
  processRequest,
  isFetching,
}) {
  const texts = Texts["pt-BR"].header.productivityFilters;

  const sendFilters = React.useCallback(
    (filterData) => {
      const filters = {
        shippingStartDate: formatDate(filterData.startPeriod),
        shippingEndDate: formatDate(filterData.endPeriod),
      };
      globalCapacityRequest(filters);
      historicCapacityRequest(filters);
      orderingRequest(filters);
      processRequest(filters);
    },
    [
      globalCapacityRequest,
      historicCapacityRequest,
      orderingRequest,
      processRequest,
    ]
  );

  const filterContext = React.useContext(FilterHandler.Context);

  return (
    <div>
      <FormHolder onSubmit={sendFilters}>
        <FiltersContainer>
          <FilterContainer
            styledStyles={styles.vision}
            title={texts.vision.title}
          >
            <VisionFilter />
          </FilterContainer>
          <FilterContainer
            styledStyles={styles.period}
            title={texts.period.title}
          >
            <PeriodFilter />
          </FilterContainer>
          <FilterContainer
            styledStyles={styles.process}
            title={texts.process.title}
          >
            <ProcessFilter />
          </FilterContainer>
          <FilterContainer
            styledStyles={styles.operator}
            title={texts.operator.title}
          >
            <OperatorFilter />
          </FilterContainer>
          <FilterContainer
            styledStyles={styles.dimensions}
            title={texts.dimensions.title}
          >
            <DimensionsFilter />
          </FilterContainer>
        </FiltersContainer>
        <FilterButtonsContainer>
          <FilterButtonContainer>
            <FilterButtonOutlined
              type="clearDefault"
              // disabled={isFetching}
              onClick={() => {
                filterContext.hideFilter();
              }}
              startIcon={<Close />}
            >
              {texts.cancelButton}
            </FilterButtonOutlined>
          </FilterButtonContainer>
          <FilterButtonContainer>
            <FilterButtonContained
              loading={isFetching}
              disabled
              type="submit"
              startIcon={<TransferRight />}
            >
              {texts.applyButton}
            </FilterButtonContained>
          </FilterButtonContainer>
        </FilterButtonsContainer>
      </FormHolder>
    </div>
  );
}

function mapStateToProps(state) {
  const {
    orderingIsFetching,
    globalCapacityIsFetching,
    historicCapacityIsFetching,
    processIsFetching,
  } = state.capacity;
  return {
    isFetching:
      orderingIsFetching ||
      globalCapacityIsFetching ||
      historicCapacityIsFetching ||
      processIsFetching,
  };
}

function mapDispatchToProps(dispatch) {
  const {
    globalCapacityRequest,
    historicCapacityRequest,
    orderingRequest,
    capacityProcessRequest,
  } = Creators;
  return {
    globalCapacityRequest(filters) {
      return dispatch(globalCapacityRequest(filters));
    },
    historicCapacityRequest(filters) {
      return dispatch(historicCapacityRequest(filters));
    },
    orderingRequest(filters) {
      return dispatch(orderingRequest(filters));
    },
    processRequest(filters) {
      return dispatch(capacityProcessRequest(filters));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductivityFiltersContainer);

const styles = createStyles({
  vision: {
    flexGrow: 1,
    flexShrink: 0,
  },
  period: {
    flexGrow: 1.5,
    flexShrink: 0,
  },
  process: {
    flexGrow: 1,
    flexShrink: 0,
  },
  operator: {
    flexGrow: 1.5,
    flexShrink: 0,
  },
  dimensions: {
    flexGrow: 1,
    flexShrink: 0,
  },
});
