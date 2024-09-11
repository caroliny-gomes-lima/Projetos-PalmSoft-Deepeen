import React, { useEffect } from "react";
import { createStyles } from "@material-ui/core";
import { Texts } from "../../../config";
import { CancelToken } from "apisauce";
import {
  FilterButtonContained,
  FilterButtonContainer,
  FilterButtonOutlined,
  FilterButtonsContainer,
  FilterContainer,
  FiltersContainer,
} from "../../../components";
import { Close, TransferRight } from "../../../config/icons";

import ProcessFilter from "./ProcessFilter";
import OperatorFilter from "./OperatorFilter";
import PeriodFilter from "./PeriodFilter";
import VisionFilter from "./VisionFilter";
import { FormHolder } from "../../../FormConfig";
import { connect } from "react-redux";
import { Creators } from "../reduxSagas";
import { Creators as GlobalCreators } from "../../globalReduxSagas";
import { SessionStorage } from "../../../lib";
import DedicatedTeam from "./DedicatedTeam";
import { FilterHandler } from "../../header/utils";
import ProdType from "./ProdType";

function formatDate(date, end, vision) {
  let newDateFixed;
  let month = new Date(date).getMonth();
  let year = new Date(date).getFullYear();
  const today = new Date();
  if (end) {
    if (Number(vision) === 3) {
      if (today.getFullYear() === year) {
        newDateFixed = new Date(year, today.getMonth(), today.getDate());
      } else {
        newDateFixed = new Date(year, 12, 0);
      }
    } else {
      if (today.getMonth() === month && today.getFullYear() === year) {
        newDateFixed = new Date(year, month, today.getDate());
      } else {
        newDateFixed = new Date(year, month + 1, 0);
      }
    }
  } else {
    if (Number(vision) === 3) {
      newDateFixed = new Date(year, 0, 1);
    } else {
      newDateFixed = new Date(year, month, 1);
    }
  }
  return newDateFixed ? new Date(newDateFixed).toISOString() : null;
}

function ProductivityFiltersContainer({
  globalProductivityRequest,
  getOperadoresRequest,
  operatorData,
  isFetching,
}) {
  const filterContext = React.useContext(FilterHandler.Context);
  const [formConfig, setFormConfig] = React.useState(null);
  const [cancelToken, setCancelToken] = React.useState(null);
  const [vision, setVision] = React.useState(0);
  const [processOptions, setProcessOptions] = React.useState([
    {
      value: "ALL",
      label: Texts["pt-BR"].header.productivityFilters.process.allLabel,
    },
    {
      value: "SEPARATION",
      label: Texts["pt-BR"].header.productivityFilters.process.separationLabel,
    },
    {
      value: "CHECKOUT",
      label: Texts["pt-BR"].header.productivityFilters.process.checkoutLabel,
    },
  ]);
  const texts = Texts["pt-BR"].header.productivityFilters;
  useEffect(() => {
    getOperadoresRequest();
  }, [getOperadoresRequest]);

  const sendFilters = React.useCallback(
    (filterData) => {
      filterData.vision = Number(filterData?.vision);
      const filters = {
        shippingStartDate: formatDate(
          filterData.startPeriod,
          false,
          filterData?.vision
        ),
        shippingEndDate:
          filterData?.vision !== 0 && filterData?.vision !== 3
            ? formatDate(filterData?.endPeriod, true)
            : formatDate(filterData?.startPeriod, true, filterData?.vision),
        id: filterData.operator,
        type: filterData.process,
        equalsProcess: filterData.dedicatedTeam,
        dataView:
          filterData.vision === 0 || filterData.vision === 1 ? "DAY" : "MONTH",
        prodType: Number(filterData.prodType),
      };
      SessionStorage.setItem("shippingStartDate", filters.shippingStartDate);
      SessionStorage.setItem("shippingEndDate", filters.shippingEndDate);
      SessionStorage.setItem("filters", filters);
      const source = CancelToken.source();
      setCancelToken(source);
      globalProductivityRequest(filters, source.token);
    },
    [globalProductivityRequest]
  );

  const cancelFilter = () => {
    if (cancelToken !== null) {
      cancelToken.cancel();
      setCancelToken(null);
    } else {
      filterContext.hideFilter();
    }
  };

  const onChangeProcess = (value) => {
    //dedicated team (value = sim ou não)
    if (value === true) {
      setProcessOptions([
        {
          value: "SEPARATION",
          label:
            Texts["pt-BR"].header.productivityFilters.process.separationLabel,
        },
        {
          value: "CHECKOUT",
          label:
            Texts["pt-BR"].header.productivityFilters.process.checkoutLabel,
        },
      ]);
    } else {
      setProcessOptions([
        {
          value: "ALL",
          label: Texts["pt-BR"].header.productivityFilters.process.allLabel,
        },
        {
          value: "SEPARATION",
          label:
            Texts["pt-BR"].header.productivityFilters.process.separationLabel,
        },
        {
          value: "CHECKOUT",
          label:
            Texts["pt-BR"].header.productivityFilters.process.checkoutLabel,
        },
      ]);
    }
    if (formConfig.getFieldValue("process") === "ALL")
      formConfig.setValue("process", "SEPARATION");
  };

  return (
    <div>
      <FormHolder formRef={setFormConfig} onSubmit={sendFilters}>
        <FiltersContainer>
          <FilterContainer
            styledStyles={styles.vision}
            title={texts.prodType.title}
          >
            <ProdType />
          </FilterContainer>
          <FilterContainer
            styledStyles={styles.vision}
            title={texts.vision.title}
          >
            <VisionFilter setVision={setVision} formConfig={formConfig} />
          </FilterContainer>
          <FilterContainer
            styledStyles={styles.period}
            title={texts.period.title}
          >
            <PeriodFilter vision={vision} formConfig={formConfig} />
          </FilterContainer>
          <FilterContainer
            styledStyles={styles.process}
            title={texts.process.title}
          >
            <ProcessFilter options={processOptions} />
          </FilterContainer>
          <FilterContainer
            styledStyles={styles.process}
            title={texts.dedicatedTeam.title}
          >
            <DedicatedTeam onChange={onChangeProcess} />
          </FilterContainer>
          <FilterContainer
            styledStyles={styles.operator}
            title={texts.operator.title}
          >
            <OperatorFilter options={operatorData} />
          </FilterContainer>
        </FiltersContainer>
        <FilterButtonsContainer>
          <FilterButtonContainer>
            <FilterButtonOutlined
              type="clearDefault"
              onClick={() => {
                cancelFilter();
              }}
              startIcon={<Close />}
            >
              {texts.cancelButton}
            </FilterButtonOutlined>
          </FilterButtonContainer>
          <FilterButtonContainer>
            <FilterButtonContained
              loading={isFetching}
              type="submit"
              disabled={isFetching}
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
  const { isFetching } = state.productivity;
  const { operatorData, isFetchingOperator } = state.global;
  return {
    operatorData,
    isFetching: isFetching || isFetchingOperator,
  };
}

function mapDispatchToProps(dispatch) {
  const { globalProductivityRequest } = Creators;

  const { getOperadoresRequest } = GlobalCreators;
  return {
    getOperadoresRequest() {
      return dispatch(getOperadoresRequest());
    },
    globalProductivityRequest(filters, cancelToken) {
      return dispatch(globalProductivityRequest(filters, cancelToken));
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
