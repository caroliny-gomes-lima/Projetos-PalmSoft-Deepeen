import React from "react";
import { UserCardStyle as Styles } from "../../styles";
import { Grid } from "@material-ui/core";
import DeleteModal from "./DeleteModal";
import BlockedModal from "./BlockedModal";
import { Pagination } from "../../../../../components";
import DropdownActionSelect from "../../../../../components/buttons/DropdownActionSelect";
import { AccountBalanceWallet, QuestionAnswer } from "@material-ui/icons";
import { customModal } from "../../../../modals/utils";
import ObservationsModal from "./ObservationsModal";
import { Texts } from "../../../../../config";
import TransactionsCashbackModal from "./TransactionsCashbackModal";

function UserEnabledCard({
  data,
  page,
  setPage,
  totalPage,
  InfoCancellationRequest,
  InfoCancellationData,
  CashbackTransactionsRequest,
  CashbackTransactionsData,
}) {
  const ObservationsModalTexts =
    Texts["pt-BR"].users.enabledUsers.InfoModalCancel;
  const CashbackModalTexts =
    Texts["pt-BR"].users.enabledUsers.TransactionsCashbackModal;

  const handleOpenObservationsModal = (userData) => {
    customModal.setInfos(
      null,
      ObservationsModalTexts.title,
      null,
      null,
      null,
      <ObservationsModal
        InfoCancellationRequest={InfoCancellationRequest}
        userData={userData}
        InfoCancellationData={InfoCancellationData}
      />
    );
  };

  const handleOpenCashbackModal = (userData) => {
    customModal.setInfos(
      null,
      CashbackModalTexts.title,
      null,
      null,
      null,
      <TransactionsCashbackModal
        userData={userData}
        CashbackTransactionsData={CashbackTransactionsData}
        CashbackTransactionsRequest={CashbackTransactionsRequest}
      />
    );
  };

  // console.log(data);
  const drawCardList = () => {
    return data.map((item) => {
      return (
        <>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Styles.CardContainer>
              <Styles.CardContent>
                <Grid container spacing={1} justify="flex-end">
                  <Styles.CardHeader>
                    <BlockedModal userData={item} />
                    <DeleteModal userData={item} />
                    <DropdownActionSelect
                      options={[
                        {
                          action: () => handleOpenObservationsModal(item),
                          icon: () => <QuestionAnswer />,
                          name: ObservationsModalTexts.titleButton,
                        },
                        {
                          action: () => handleOpenCashbackModal(item),
                          icon: () => <AccountBalanceWallet />,
                          name: CashbackModalTexts.titleButton,
                        },
                      ]}
                    />
                  </Styles.CardHeader>
                </Grid>

                <Grid container spacing={0} direction="row" wrap="nowrap">
                  <Styles.IconAvatar />

                  <Styles.UserInfoContent $setMarginLeft>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Styles.UserInfosText $fontType={2}>
                        {item.name}
                      </Styles.UserInfosText>
                    </Grid>
                    <Grid container spacing={0} direction="row">
                      <Styles.IconHowToReg />

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

export default UserEnabledCard;
