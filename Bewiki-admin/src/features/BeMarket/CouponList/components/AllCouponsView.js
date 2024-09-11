import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { Pagination } from "../../../../components";
import { Texts } from "../../../../config";
import { Styles } from "../styles";
import CouponCard from "./CouponCard";

export default function AllCouponsView({
  goNext,
  setCouponId,
  isFetchingCouponList,
  sendingCouponRegisterRequest,
  couponListData,
  CouponListGetRequest,
  CouponRegisterCPFRequest,
}) {
  const texts = Texts["pt-BR"].beMarket.couponList.allCoupons;
  const [page, setPage] = React.useState(0);

  const pageSize = 9;

  const mount = React.useCallback(() => {
    CouponListGetRequest(page, pageSize);
  }, [CouponListGetRequest, page, pageSize]);

  React.useEffect(mount, [mount]);

  return isFetchingCouponList ? (
    <Styles.Content>
      <CircularProgress style={{ alignSelf: "center" }} />
    </Styles.Content>
  ) : (
    <Styles.Content>
      <Styles.HeaderContainer>{texts.title}</Styles.HeaderContainer>
      <Grid container spacing={0} direction="row">
        {couponListData?.content.map((item) => (
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <CouponCard
              value={item.value}
              maxUses={item.maxUses}
              currentUses={item.currentUses}
              id={item.id}
              code={item.code}
              goNext={() => {
                setCouponId(item.id);
                goNext();
              }}
              sendingCouponRegisterRequest={sendingCouponRegisterRequest}
              CouponRegisterCPFRequest={CouponRegisterCPFRequest}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination
        page={page}
        totalPages={couponListData?.totalPages}
        setPage={setPage}
      />
    </Styles.Content>
  );
}
