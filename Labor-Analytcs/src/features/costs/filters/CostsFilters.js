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
import { FilterHandler } from "../../header/utils";

function ProductivityFiltersContainer(props) {
  const texts = Texts["pt-BR"].header.costsFilters;

  const filterContext = React.useContext(FilterHandler.Context);
  return (
    <div>
      <FormHolder
        onSubmit={(data) => {
          // TODO implementar integração aplicando filtros escolhidos
        }}
      >
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
            <FilterButtonContained type="submit" startIcon={<TransferRight />}>
              {texts.applyButton}
            </FilterButtonContained>
          </FilterButtonContainer>
        </FilterButtonsContainer>
      </FormHolder>
    </div>
  );
}

export default ProductivityFiltersContainer;

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
