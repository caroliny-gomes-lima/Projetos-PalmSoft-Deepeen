import { Grid } from "@material-ui/core";
import { FormHolder } from "../../../../../FormConfig";
import { ModalStyles as Styles } from "../../styles";
import { Texts } from "../../../../../config";
import { customModal } from "../../../../modals/utils";
import { Filters } from "../../../../../lib";

function DeleteBalanceCashback({
  tableData,
  DeleteCashback,
  isFetching,
  reloadTable,
}) {
  const texts = Texts["pt-BR"].cashBack.DeletebalanceCashbackModal;

  const sendParameters = () => {
    DeleteCashback(tableData.id, tableData.cashbackValue, reloadTable);
    customModal.close();
  };

  return (
    <FormHolder onSubmit={sendParameters}>
      <Styles.ModalContent>
        <Grid item xs={12} sm={12} md={12} lg={5}>
          <Grid container spacing={0} direction="row">
            <Styles.IconAvatar />

            <Styles.UserInfoContent $setMarginLeft>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Styles.UserInfosText $fontType={2}>
                  {tableData.name}
                </Styles.UserInfosText>
              </Grid>
              <Grid container spacing={0} direction="row">
                <Styles.IconHowToReg />
                <Styles.UserInfosText $fontType={1}>
                  {Filters.fixDateToLabel(tableData.infoDate)}
                </Styles.UserInfosText>
              </Grid>
            </Styles.UserInfoContent>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Grid container spacing={0} direction="row">
            <Styles.UserInfoContent>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Styles.UserInfosText $fontType={2}>
                  {texts.currentBalance}
                </Styles.UserInfosText>
              </Grid>

              <Styles.UserInfosText $fontType={1}>
                {"R$ " +
                  Filters.convertNumberInputMask(tableData.cashbackValue)}
              </Styles.UserInfosText>
            </Styles.UserInfoContent>
          </Grid>
        </Grid>
      </Styles.ModalContent>

      <Grid container spacing={0} justify="flex-end">
        <Styles.FooterModal>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <Styles.TextFieldButton
              $defaultButtonCancel
              onClick={() => customModal.close()}
            >
              {texts.back}
            </Styles.TextFieldButton>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={9}>
            <Styles.TextFieldButton
              type="submit"
              name="button"
              loading={isFetching}
              disabled={isFetching}
            >
              {texts.confirm}
            </Styles.TextFieldButton>
          </Grid>
        </Styles.FooterModal>
      </Grid>
    </FormHolder>
  );
}
export default DeleteBalanceCashback;
