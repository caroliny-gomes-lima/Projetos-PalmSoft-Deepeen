import Styles from "../styles/AmenitiesStyle";
import { Texts } from "../../../../config";
import { Grid } from "@material-ui/core";
import { Creators } from "../../../globalReduxSagas";
import { connect } from "react-redux";
import { Switch } from "../../../../components";
import React from "react";

function AmenitiesInputs({ getImage, images, isFetchingImages, data }) {
  const texts = Texts["pt-BR"].beHome.RegisterApartment;

  React.useEffect(() => {
    if (data?.content) {
      getImage(data?.content);
    }
  }, [data, getImage]);

  const drawList = (data) => {
    return data.map((item) => {
      let image = images.find((x) => x.id === item.imageId).image;

      return (
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Styles.Box key={`idAmenities_${item.id}`}>
            <Styles.BoxContent>
              <Styles.SwitchBox>
                <Styles.SwitchLabel>
                  <Styles.ImageIcon>
                    <img
                      src={`data:image/png;base64,${image}`}
                      style={{
                        height: "22%",
                        width: 46 * ((166 * 0.5) / 160),
                      }}
                      alt=""
                    />
                  </Styles.ImageIcon>
                  {item?.name}
                </Styles.SwitchLabel>

                <Switch
                  defaulValue={false}
                  name={`idAmenities_${item.id}`}
                  disableError
                />
              </Styles.SwitchBox>
            </Styles.BoxContent>
          </Styles.Box>
        </Grid>
      );
    });
  };

  return (
    <>
      <Styles.HeaderContant>
        <Styles.Title>{texts.Amenities.title}</Styles.Title>
      </Styles.HeaderContant>
      {isFetchingImages ? (
        <Styles.LoadingContainer>
          <Styles.CircleLoading
            style={{
              width: "10%",
              height: "10%",
              margin: "50px",
            }}
          />
        </Styles.LoadingContainer>
      ) : (
        <Grid container spacing={1} direction="row">
          {data?.content && images?.length > 0 && drawList(data?.content)}

          {/*<Grid container spacing={6} direction="row" justify="flex-end">
              <Grid item xs={12} sm={4} md={5} lg={3}>
                <AddAmenitiesModal />
              </Grid>
        </Grid>*/}
        </Grid>
      )}
      <Styles.Line />
    </>
  );
}

function mapStateToProps(state) {
  const { images, isFetchingImages } = state.global;
  return {
    images,
    isFetchingImages,
  };
}

function mapDispatchToProps(dispatch) {
  const { getImage } = Creators;
  return {
    getImage: function (data) {
      return dispatch(getImage(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AmenitiesInputs);
