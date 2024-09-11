import React from "react";
import { UserCardStyle as Styles } from "../../styles";
import { Grid } from "@material-ui/core";
import RevertModal from "./RevertModal";
import { Pagination } from "../../../../../components";

function UserBlockedCard({ data, page, setPage, totalPage }) {
  const drawCardList = () => {
    return data.map((item) => {
      return (
        <>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Styles.CardContainer>
              <Styles.CardContent>
                <Grid container spacing={1} justify="flex-end">
                  <Styles.CardHeader>
                    <RevertModal userData={item} />
                  </Styles.CardHeader>
                </Grid>

                <Grid container spacing={0} direction="row">
                  <Styles.IconAvatar />

                  <Styles.UserInfoContent $setMarginLeft>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Styles.UserInfosText $fontType={2}>
                        {item.name}
                      </Styles.UserInfosText>
                    </Grid>
                    <Grid container spacing={0} direction="row">
                      <Styles.IconBlock />

                      <Grid item xs={8} sm={8} md={8} lg={9}>
                        <Styles.UserInfosText $fontType={1}>
                          {new Date(item.date).toLocaleDateString()}
                        </Styles.UserInfosText>
                      </Grid>
                    </Grid>
                  </Styles.UserInfoContent>
                </Grid>
              </Styles.CardContent>
            </Styles.CardContainer>
          </Grid>
        </>
      );
    });
  };
  return (
    <>
      {drawCardList()}
      <Grid container spacing={0} direction="row" justify="flex-end">
        <Styles.Footer>
          <Pagination page={page} setPage={setPage} totalPages={totalPage} />
        </Styles.Footer>
      </Grid>
    </>
  );
}

export default UserBlockedCard;
