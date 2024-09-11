import React from "react";
import { connect } from "react-redux";
import { Swiper } from "../../../../components";
import AllCouponsView from "../components/AllCouponsView";
import CouponRedeemedUsersView from "../components/CouponRedeemedUsersView";
import { Creators } from "../reduxSagas";
import { Styles } from "../styles";

function Container({
  isFetchingCouponList,
  isFetchingCouponRedeemers,
  sendingCouponRegisterRequest,
  couponListData,
  couponRedeemersListData,
  CouponListGetRequest,
  CouponRegisterCPFRequest,
  CouponGetRedeemersRequest,
}) {
  const [couponId, setCouponId] = React.useState("");

  const allCouponsViewScreen = ({ goNext, goPrevious }) => {
    return (
      <AllCouponsView
        isFetchingCouponList={isFetchingCouponList}
        couponListData={couponListData}
        goNext={goNext}
        CouponListGetRequest={CouponListGetRequest}
        sendingCouponRegisterRequest={sendingCouponRegisterRequest}
        CouponRegisterCPFRequest={CouponRegisterCPFRequest}
        setCouponId={setCouponId}
      />
    );
  };
  const couponRedeemedUsersScreen = ({ goNext, goPrevious }) => {
    return (
      <CouponRedeemedUsersView
        couponId={couponId}
        goPrevious={goPrevious}
        isFetching={isFetchingCouponRedeemers}
        couponRedeemersListData={couponRedeemersListData}
        CouponGetRedeemersRequest={CouponGetRedeemersRequest}
      />
    );
  };

  return (
    <Styles.Container>
      <Swiper screens={[allCouponsViewScreen, couponRedeemedUsersScreen]} />
    </Styles.Container>
  );
}

function mapStateToProps(state) {
  const {
    isFetchingCouponList,
    isFetchingCouponRedeemers,
    sendingCouponRegisterRequest,
    couponListData,
    couponRedeemersListData,
  } = state.BeMarketCouponList;
  return {
    isFetchingCouponList,
    isFetchingCouponRedeemers,
    sendingCouponRegisterRequest,
    couponListData,
    couponRedeemersListData,
  };
}

function mapDispatchToProps(dispatch) {
  const {
    CouponListGetRequest,
    CouponRegisterCpfRequest,
    CouponGetRedeemersRequest,
  } = Creators;
  return {
    CouponListGetRequest: function (page, size) {
      return dispatch(CouponListGetRequest(page, size));
    },
    CouponRegisterCPFRequest: function (id, cpf, showSuccessModal) {
      return dispatch(CouponRegisterCpfRequest(id, cpf, showSuccessModal));
    },
    CouponGetRedeemersRequest: function (id) {
      return dispatch(CouponGetRedeemersRequest(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
