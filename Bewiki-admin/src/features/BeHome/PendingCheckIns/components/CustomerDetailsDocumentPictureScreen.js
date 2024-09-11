import { Box, Button, Grid } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import colors from "../../../../config/colors";
import { ModalStyles as Styles } from "../styles";
export default function CustomerDetailsDocumentPictureScreen({
  goNext,
  goPrevious,
  customerDetailsDocumentPictureData,
}) {
  return (
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
      <Grid container spacing={2} justify="center">
        <Grid item xs={3} sm={1} md={5} lg={1} container alignSelf="center">
          <Styles.ArrowIconButton onClick={goPrevious}>
            <ChevronLeft />
          </Styles.ArrowIconButton>
        </Grid>
        <Grid container alignItems="center" item xs={8} sm={1} md={6} lg={7}>
          <Styles.ImageContainer>
            <Styles.HeaderImageContent>
              <Styles.SubTitle>{"dataTable.name"}</Styles.SubTitle>
            </Styles.HeaderImageContent>
            <Styles.ImageContent>
              <Grid
                container
                alignItems="center"
                item
                xs={6}
                sm={1}
                md={5}
                lg={12}
              >
                <img
                  src={
                    "data:image/png;base64," +
                    customerDetailsDocumentPictureData[0]
                  }
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
              </Grid>
            </Styles.ImageContent>
          </Styles.ImageContainer>
        </Grid>
        <Grid item xs={3} sm={1} md={5} lg={1} container alignSelf="center">
          <Styles.ArrowIconButton $defaultMarginLeft onClick={goNext}>
            {<ChevronRight />}
          </Styles.ArrowIconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
