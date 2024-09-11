import React from "react";
import { Visibility } from "@material-ui/icons";
import Styles from "../styles/Styles";
import { Box, Grid } from "@material-ui/core";
import { Texts } from "../../../../config";
import { FormHolder } from "../../../../FormConfig";
import { customModal } from "../../../modals/utils";
import colors from "../../../../config/colors";
import { Creators } from "../reduxSagas";
import { connect } from "react-redux";

function LogoModal({
  dataTable,
  LogoMerchantsRequest,
  LogoMerchantsPictureData,
}) {
  const text = Texts["pt-BR"].beMarket.RestaurantLists.ModalRestaurantLogo;

  const loadPicture = React.useCallback(() => {
    LogoMerchantsRequest(dataTable.imageId);
  }, [LogoMerchantsRequest, dataTable]);

  React.useEffect(loadPicture, [loadPicture]);

  const handleCloseModal = () => {
    customModal.close();
  };

  const handleOpenModal = () => {
    customModal.setInfos(
      null,
      text.title,
      null,
      null,
      null,
      <FormHolder>
        <Box
          style={{
            backgroundColor: colors.black,
            alignContent: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
          m={"auto"}
        >
          <Grid container alignItems="center" item xs={8} sm={1} md={6} lg={6}>
            <Styles.ImageContainer>
              <Styles.HeaderImageContent>
                <Styles.SubTitle>{dataTable.name}</Styles.SubTitle>
              </Styles.HeaderImageContent>

              <Styles.ImageContent>
                <img
                  src={
                    "data:image/png;base64," + LogoMerchantsPictureData?.data
                  }
                  style={{ width: "80%", height: "80%" }}
                  alt=""
                />
              </Styles.ImageContent>
            </Styles.ImageContainer>
          </Grid>
        </Box>

        <Styles.FooterModal $defaultPadding>
          <Grid container justify="flex-end">
            <Styles.TextButton $defaultColor onClick={() => handleCloseModal()}>
              {text.back}
            </Styles.TextButton>
          </Grid>
        </Styles.FooterModal>
      </FormHolder>
    );
  };

  return (
    <>
      <Styles.ButtonTableModal
        onClick={() => handleOpenModal()}
        endIcon={<Visibility />}
      >
        {text.titleButton}
      </Styles.ButtonTableModal>
    </>
  );
}

function mapStateToProps(state) {
  const { isFetching, LogoMerchantsPictureData } =
    state.BeMarketRestaurantLists;
  return {
    isFetching,
    LogoMerchantsPictureData,
  };
}

function mapDispatchToProps(dispatch) {
  const { LogoMerchantsRequest } = Creators;
  return {
    LogoMerchantsRequest: function (imageId) {
      return dispatch(LogoMerchantsRequest(imageId));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LogoModal);
