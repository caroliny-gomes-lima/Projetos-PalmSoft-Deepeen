import React from "react";
import { Styles } from "../styles";
import { Grid } from "@material-ui/core";
import { Colors, Texts } from "../../../../config";

function NavButtons({ content, goTo, loading, data, totalPages }) {
  const texts = Texts["pt-BR"].users;

  const [flag, setFlag] = React.useState(0);

  const handleClick = (index) => {
    setFlag(index);
    goTo(index);
  };

  return (
    <>
      <Styles.CardNavigation>
        <Grid container spacing={0} direction="row">
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Styles.ButtonNavigation
              style={{
                height: "45px",
                color: flag === 0 ? Colors.black : Colors.gray2,
              }}
              onClick={() => handleClick(0)}
            >
              {texts.enabledUsers.title}
            </Styles.ButtonNavigation>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Styles.ButtonNavigation
              style={{
                height: "45px",
                color: flag === 1 ? Colors.black : Colors.gray2,
              }}
              onClick={() => handleClick(1)}
            >
              {texts.blockedUsers.title}
            </Styles.ButtonNavigation>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Styles.ButtonNavigation
              style={{
                height: "45px",
                color: flag === 2 ? Colors.black : Colors.gray2,
              }}
              onClick={() => handleClick(2)}
            >
              {texts.BlackList.title}
            </Styles.ButtonNavigation>
          </Grid>
        </Grid>
        {loading ? (
          <Styles.LoadingContainer>
            <Styles.CircleLoading
              style={{ width: "10%", height: "auto", margin: "250px" }}
            />
          </Styles.LoadingContainer>
        ) : data && totalPages ? (
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Styles.RightContainer>{content}</Styles.RightContainer>
          </Grid>
        ) : null}
      </Styles.CardNavigation>
    </>
  );
}

export default NavButtons;
