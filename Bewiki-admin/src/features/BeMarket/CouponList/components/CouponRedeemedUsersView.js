import { Button, CircularProgress } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import React from "react";
import { IntegratedComponentHolder, Table } from "../../../../components";
import { Texts } from "../../../../config";
import { Filters } from "../../../../lib";
import { Styles } from "../styles";

export default function CouponRedeemedUsersView({
  couponId,
  goPrevious,
  isFetching,
  couponRedeemersListData,
  CouponGetRedeemersRequest,
}) {
  const texts = Texts["pt-BR"].beMarket.couponList.redeemedUsers;
  const dateTimeFormatter = Intl.DateTimeFormat("pt-br");

  const mount = React.useCallback(() => {
    CouponGetRedeemersRequest(couponId);
  }, [CouponGetRedeemersRequest, couponId]);

  React.useEffect(mount, [mount]);

  return (
    <Styles.Content>
      <Styles.HeaderContainer>
        <Button
          onClick={() => {
            goPrevious();
          }}
        >
          <ArrowBackIos />
        </Button>
        Cupom R$ 15,00
      </Styles.HeaderContainer>
      {isFetching ? (
        <CircularProgress
          style={{
            width: "10%",
            height: "10%",
            margin: "250px",
            alignSelf: "center",
          }}
        />
      ) : (
        <IntegratedComponentHolder
          showReload={false}
          reloadMessage={"Teste"}
          reloadLabel={"Teste 2"}
          showEmpty={false}
          emptyMessage={"Vazio"}
        >
          <Table
            sortContent={() => {}}
            id="historicTable"
            headers={texts}
            data={couponRedeemersListData?.cpfs || []}
            placeholderSize={10}
            columnSize={5}
            withGroup
            firstDivision={5}
            secondDivision={5}
            loading={isFetching}
            renderItemColumns={(item) => [
              Filters.cpfMask(item.cpf),
              dateTimeFormatter.format(new Date(item.createdAt)),
            ]}
            justify={true}
          />
          {/*  <Pagination page={page} setPage={setPage} totalPages={1} /> */}
        </IntegratedComponentHolder>
      )}
    </Styles.Content>
  );
}
