import React from "react";
import Styles from "../styles/StyledFilter";
import { Select } from "../../../../components";
import { FormHolder } from "../../../../FormConfig";
import { Texts } from "../../../../config";

function FiltersStudiosList({
  onStayTypeChange,
  onCategoryChange,
  categoryData,
  isFetchingCategoriesData,
  gridViewSelect,
  setGridViewSelected,
  listViewSelect,
  setListViewSelected
}) {
  const title = Texts["pt-BR"].beHome.StudiosList;

  const modality = [
    {
      value: 0,
      label: "TODAS",
    },

    {
      value: 1,
      label: "HOSPEDAGEM",
    },

    {
      value: 2,
      label: "MORADIA",
    },
  ];

  const categoryDataSelectMap =
    categoryData !== null
      ? categoryData.map((item) => ({
          value: item.id,
          label: item.name,
        }))
      : null;

  const allCategories = [{ value: 0, label: "TODAS" }];

  const studiosType =
    categoryDataSelectMap !== null
      ? allCategories.concat(categoryDataSelectMap)
      : allCategories;

  return (
    <FormHolder>
      <Styles.CardContainer>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Styles.CardContent style={{width: "40%"}}>
            <Styles.CardTitle>{title.filters.modality}</Styles.CardTitle>
            <Select
              containerStyles={{ width: "auto", marginTop: 8 }}
              name="staySubscriptionType"
              disbleError
              options={modality}
              StyledInput
              onChange={onStayTypeChange}
              defaultValue={0}
              disableBorder
              small
            />
          </Styles.CardContent>

          <Styles.CardContent style={{width: "40%"}}>
            <Styles.CardTitle>{title.filters.studiosType}</Styles.CardTitle>
            <Select
              containerStyles={{ width: "auto", marginTop: 8 }}
              name="studiosType"
              disbleError
              options={studiosType}
              onChange={onCategoryChange}
              defaultValue={0}
              disableBorder
              small
            />
          </Styles.CardContent>

          <Styles.CardContent $last style={{width: "20%"}}>
            <Styles.CardTitle>{title.filters.visualization}</Styles.CardTitle>
            <Styles.GridViewIcon onClick={() => (setGridViewSelected(true) & setListViewSelected(false))} $selected={gridViewSelect} />
            <Styles.ListViewIcon onClick={() => (setListViewSelected(true) & setGridViewSelected(false))} $selected={listViewSelect} />
          </Styles.CardContent>
        </div>
      </Styles.CardContainer>
    </FormHolder>
  );
}

export default FiltersStudiosList;
