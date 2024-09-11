import { Grid } from "@material-ui/core";
import { AccountBox, LocalActivity, Person } from "@material-ui/icons";
import React from "react";
import { ButtonContained } from "../../../../components";
import InputCPF from "../../../../components/inputs/InputCPF";
import { Texts } from "../../../../config";
import { FormHolder } from "../../../../FormConfig";
import { Filters } from "../../../../lib";
import { customModal } from "../../../modals/utils";
import { CouponCardStyles as Styles } from "../styles";

export default function CouponCard({
  value,
  maxUses,
  currentUses,
  id,
  goNext,
  code,
  sendingCouponRegisterRequest,
  CouponRegisterCPFRequest,
}) {
  const texts = Texts["pt-BR"].beMarket.couponList.allCoupons.couponCard;
  const successModalTexts =
    Texts["pt-BR"].beMarket.couponList.allCoupons.couponCard
      .redeemCouponSuccess;

  const showRedeemCouponModalSuccess = () => {
    customModal.setInfos(successModalTexts.title, [successModalTexts.text], {
      label: successModalTexts.continue,
      onClick: customModal.close,
    });
  };

  const showRedeemCouponModal = () => {
    customModal.setInfos(
      null,
      texts.redeemCouponModal.title,
      null,
      null,
      null,
      <>
        <Styles.RedeemModalCouponName>
          {texts.coupon} {code} {Filters.convertMoneyTextMask(value)}
        </Styles.RedeemModalCouponName>
        <Styles.RedeemModalContent>
          <FormHolder
            onSubmit={({ cpf }) =>
              CouponRegisterCPFRequest(id, cpf, showRedeemCouponModalSuccess)
            }
          >
            <InputCPF inputLabel={"CPF"} name={"cpf"} />
            <ButtonContained
              type="submit"
              loading={sendingCouponRegisterRequest}
              disabled={sendingCouponRegisterRequest}
            >
              {texts.redeemCouponModal.confirm}
            </ButtonContained>
          </FormHolder>
        </Styles.RedeemModalContent>
      </>
    );
  };

  return (
    <Styles.Card>
      <Styles.Content>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={9} lg={9} container direction="row">
            <LocalActivity />
            <Styles.Header onClick={goNext}>
              {texts.coupon} {code} {Filters.convertMoneyTextMask(value)}
            </Styles.Header>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} container direction="row">
            <Styles.Header>
              {currentUses}/{maxUses}
            </Styles.Header>
            <Person />
          </Grid>
        </Grid>
      </Styles.Content>

      <Styles.Content>
        <Grid container spacing={1} direction={"row"} justify={"flex-end"}>
          <Grid item xs={12} sm={12} md={5} lg={5} container direction="row">
            <Styles.RedeemButton
              endIcon={<AccountBox />}
              onClick={showRedeemCouponModal}
            >
              {texts.redeemForCPF}
            </Styles.RedeemButton>
          </Grid>
        </Grid>
      </Styles.Content>
    </Styles.Card>
  );
}
