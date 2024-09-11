import { Texts } from "../../../../../config";
import { TransferCheckInModalStyles as Styles } from "../../styles";
import { Grid } from "@material-ui/core";
import { ContainerInputs } from "../../../../../components/inputs/inputsComponents";
import { Input, Select } from "../../../../../components";
import displayDatePeriodText from "../../../../../services/helpers/displayDatePeriodText";
import React from "react";
import { Creators } from "../../reduxSagas";
import { connect } from "react-redux";
import { customModal } from "../../../../modals/utils";
import { FormHolder } from "../../../../../FormConfig";

function TransferCheckInModalInside({
  pendingCheckInData,
  categoryData,
  availableStaysData,
  reloadTable,
  CategoryDataRequest,
  AvailableStaysRequest,
  TransferCheckInRequest,
}) {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [selectedStay, setSelectedStay] = React.useState(null);

  const { StayTypes } = Texts["pt-BR"].beHome;
  const texts = Texts["pt-BR"].beHome.PendingCheckIns.modalTransferCheckIn;
  const userName = `${pendingCheckInData.guest.firstName} ${pendingCheckInData.guest.lastName}`;

  const handleCategorySelectionChange = (value) => {
    setSelectedCategory(value);
    setSelectedStay(null);
  };

  const handleStaySelectionChange = (value) => {
    setSelectedStay(value);
  };

  const generateCategoryDropdownList = () => {
    if (categoryData === undefined || categoryData === null) {
      return [];
    }

    return categoryData.map((item) => ({ value: item.id, label: item.name }));
  };

  const generateStayDropdownList = () => {
    if (availableStaysData === undefined || availableStaysData === null) {
      return [];
    }

    return availableStaysData.map((item) => ({
      value: item.id,
      label: item.name,
    }));
  };

  const getCategoryData = React.useCallback(() => {
    const stayTypeMap = {
      //FIXME: Falar com o mauricio para poder corrigir no back a recepção dos valores
      S: "SHORT_STAY",
      L: "LONG_STAY",
    };
    CategoryDataRequest(stayTypeMap[pendingCheckInData.stay.type]);
  }, [CategoryDataRequest, pendingCheckInData]);

  const getAvailableStaysData = React.useCallback(() => {
    AvailableStaysRequest(selectedCategory);
  }, [AvailableStaysRequest, selectedCategory]);

  React.useEffect(getCategoryData, [getCategoryData]);
  React.useEffect(getAvailableStaysData, [getAvailableStaysData]);

  const sendTransferCheckInRequest = () => {
    TransferCheckInRequest(
      pendingCheckInData.stay.type,
      pendingCheckInData.subscription.id,
      selectedStay,
      reloadTable
    );
  };

  return (
    <FormHolder>
      <Styles.ModalContent>
        <Styles.HeaderContainer $defaultMargin>
          <Styles.Title $defaultFontsSize>{texts.currentData}</Styles.Title>
        </Styles.HeaderContainer>
        <Grid container spacing={1} direction="row">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <ContainerInputs
              inputLabel={
                <Styles.InputTitle>{texts.userName}</Styles.InputTitle>
              }
              children={
                <Input
                  small
                  marginDefault
                  defaultBorder
                  name="user"
                  defaultValue={userName}
                  readOnly
                />
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ContainerInputs
              inputLabel={<Styles.InputTitle>{texts.stay}</Styles.InputTitle>}
              children={
                <Input
                  name="stay"
                  small
                  marginDefault
                  defaultBorder
                  defaultValue={displayDatePeriodText(
                    pendingCheckInData.stay.dateCheckIn,
                    pendingCheckInData.stay.dateCheckOut
                  )}
                  readOnly
                />
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ContainerInputs
              inputLabel={
                <Styles.InputTitle>{texts.stayType}</Styles.InputTitle>
              }
              children={
                <Input
                  name="type"
                  small
                  marginDefault
                  defaultBorder
                  defaultValue={StayTypes[pendingCheckInData.stay.type]}
                  readOnly
                />
              }
            />
          </Grid>
        </Grid>
        <Styles.HeaderContainer>
          <Styles.Title $defaultColor $defaultFonts>
            {texts.transferDataTitle}
          </Styles.Title>
        </Styles.HeaderContainer>
        <Styles.SubTitle $defaultFonts $defaultMargin>
          {texts.transferDataDescription}
        </Styles.SubTitle>

        <Grid container spacing={1} direction="row">
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ContainerInputs
              inputLabel={
                <Styles.InputTitle>{texts.category}</Styles.InputTitle>
              }
              children={
                <Select
                  small
                  name="categories"
                  disbleError
                  onChange={handleCategorySelectionChange}
                  options={generateCategoryDropdownList()}
                />
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ContainerInputs
              inputLabel={<Styles.InputTitle>{texts.roomId}</Styles.InputTitle>}
              children={
                <Select
                  small
                  name="categories"
                  disbleError
                  onChange={handleStaySelectionChange}
                  options={generateStayDropdownList()}
                />
              }
            />
          </Grid>
        </Grid>

        <Styles.FooterModal>
          <Styles.TextFieldButton onClick={customModal.close}>
            {texts.cancel}
          </Styles.TextFieldButton>

          <Styles.TextFieldButton
            $defaultColor
            onClick={sendTransferCheckInRequest}
          >
            {texts.confirm}
          </Styles.TextFieldButton>
        </Styles.FooterModal>
      </Styles.ModalContent>
    </FormHolder>
  );
}

function mapStateToProps(state) {
  const { categoryData, availableStaysData } = state.beHomePendingCheckIns;
  return {
    categoryData,
    availableStaysData,
  };
}

function mapDispatchToProps(dispatch) {
  const { CategoryDataRequest, AvailableStaysRequest, TransferCheckInRequest } =
    Creators;
  return {
    CategoryDataRequest: function (stayType) {
      return dispatch(CategoryDataRequest(stayType));
    },
    AvailableStaysRequest: function (categoryId) {
      return dispatch(AvailableStaysRequest(categoryId));
    },
    TransferCheckInRequest: function (
      stayType,
      subscriptionId,
      stayId,
      reloadTable
    ) {
      return dispatch(
        TransferCheckInRequest(stayType, subscriptionId, stayId, reloadTable)
      );
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransferCheckInModalInside);
