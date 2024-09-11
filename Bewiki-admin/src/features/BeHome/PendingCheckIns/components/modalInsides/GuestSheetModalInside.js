import { Grid } from "@material-ui/core";
import React from "react";
import { Select, Swiper } from "../../../../../components";
import { ModalStyles as Styles } from "../../styles";
import CustomerDetailsDocumentPictureScreen from "../CustomerDetailsDocumentPictureScreen";
import CustomerDetailsGuestSheetScreenFirst from "../CustomerDetailsGuestSheetScreenFirst";
import CustomerDetailsGuestSheetScreenSecond from "../CustomerDetailsGuestSheetScreenSecond";
import { connect } from "react-redux";
import { Creators } from "../../reduxSagas";
import { FormHolder } from "../../../../../FormConfig";

function GuestSheetModalInside({
  CustomerDetailsRequest,
  CustomerDetailsDocumentPictureRequest,
  customerDetailsData,
  pendingCheckInData,
  customerDetailsDocumentPictureData,
}) {
  const [selectedCustomer, setSelectedCustomer] = React.useState(0);

  const checkInId = pendingCheckInData?.checkIn.id;

  const documentPictureScreen = ({ goNext, goPrevious }) => {
    return (
      customerDetailsDocumentPictureData !== null && (
        <CustomerDetailsDocumentPictureScreen
          goNext={goNext}
          goPrevious={goPrevious}
          customerDetailsDocumentPictureData={
            customerDetailsDocumentPictureData
          }
        />
      )
    );
  };
  const guestSheetScreenFirst = ({ goNext, goPrevious }) => {
    return (
      customerDetailsData !== null && (
        <CustomerDetailsGuestSheetScreenFirst
          goNext={goNext}
          goPrevious={goPrevious}
          customerDetailsData={customerDetailsData[selectedCustomer]}
          pendingCheckInData={pendingCheckInData}
        />
      )
    );
  };
  const guestSheetScreenSecond = ({ goNext, goPrevious }) => {
    return (
      customerDetailsData !== null && (
        <CustomerDetailsGuestSheetScreenSecond
          goNext={goNext}
          goPrevious={goPrevious}
          customerDetailsData={customerDetailsData[selectedCustomer]}
          pendingCheckInData={pendingCheckInData}
        />
      )
    );
  };

  const generateCustomerSelectList = () => {
    if (customerDetailsData === null) {
      return [];
    }

    return customerDetailsData.map((item, index) => ({
      value: index,
      label: item.name,
    }));
  };

  const getCustomerDetails = React.useCallback(() => {
    CustomerDetailsRequest(checkInId);
  }, [CustomerDetailsRequest, checkInId]);

  const getCustomerDetailsPicture = React.useCallback(() => {
    if (customerDetailsData === null || customerDetailsData === undefined) {
      return;
    }
    CustomerDetailsDocumentPictureRequest(
      customerDetailsData[selectedCustomer].imageIds
    );
  }, [
    CustomerDetailsDocumentPictureRequest,
    customerDetailsData,
    selectedCustomer,
  ]);

  React.useEffect(getCustomerDetails, [getCustomerDetails]);
  React.useEffect(getCustomerDetailsPicture, [getCustomerDetailsPicture]);

  return (
    <Styles.ModalContent>
      <Grid container spacing={1} direction="column">
        <Grid>
          <FormHolder>
            <Select
              name="selectedCustomer"
              disbleError
              options={generateCustomerSelectList()}
              onChange={setSelectedCustomer}
              defaultValue={0}
            ></Select>
          </FormHolder>
        </Grid>
        <Grid>
          <Swiper
            screens={[
              documentPictureScreen,
              guestSheetScreenFirst,
              guestSheetScreenSecond,
            ]}
            loopScreens
          />
        </Grid>
      </Grid>
    </Styles.ModalContent>
  );
}

function mapStateToProps(state) {
  const {
    isFetching,
    customerDetailsData,
    customerDetailsDocumentPictureData,
  } = state.beHomePendingCheckIns;
  return {
    isFetching,
    customerDetailsData,
    customerDetailsDocumentPictureData,
  };
}

function mapDispatchToProps(dispatch) {
  const { CustomerDetailsRequest, CustomerDetailsDocumentPictureRequest } =
    Creators;
  return {
    CustomerDetailsRequest: function (checkInId) {
      return dispatch(CustomerDetailsRequest(checkInId));
    },
    CustomerDetailsDocumentPictureRequest: function (imageIds) {
      return dispatch(CustomerDetailsDocumentPictureRequest(imageIds));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GuestSheetModalInside);
