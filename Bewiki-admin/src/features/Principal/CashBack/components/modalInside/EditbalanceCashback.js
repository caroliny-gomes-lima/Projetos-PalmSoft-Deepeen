import React from "react";
import { Grid } from "@material-ui/core";
import { FormHolder } from "../../../../../FormConfig";
import { ModalStyles as Styles } from "../../styles";
import { ContainerInputs } from "../../../../../components/inputs/inputsComponents";
import { Texts } from "../../../../../config";
import { customModal } from "../../../../modals/utils";
import { Input } from "../../../../../components";
import { Filters } from "../../../../../lib";

function EditbalanceCashback({
  tableData,
  AddCashback,
  isFetching,
  reloadTable,
}) {
  const texts = Texts["pt-BR"].cashBack.EditbalanceCashbackModal;
  const [formRef, setRef] = React.useState(null);

  const sendParameters = (data) => {
    AddCashback(
      tableData.id,
      parseFloat(Filters.clearStringOnlyNumbers(data.value)),
      reloadTable
    );
    customModal.close();
  };

  const handleChange = () => {
    let cashbackBalanceValues =
      parseInt(
        Filters.clearStringOnlyNumbers(formRef?.getFieldValue("currentBalance"))
      ) +
      parseInt(Filters.clearStringOnlyNumbers(formRef?.getFieldValue("value")));
    return formRef?.setValue("currentBalanceCashBack", cashbackBalanceValues);
  };

  return (
    <FormHolder onSubmit={sendParameters} formRef={setRef}>
      <Styles.HeaderContainer $defaultMargin>
        <Styles.Title $defaultSubTitle>{texts.subTitle1}</Styles.Title>
      </Styles.HeaderContainer>

      <Styles.ModalContent>
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <ContainerInputs
              inputLabel={
                <Styles.InputTitle>{texts.currentBalance}</Styles.InputTitle>
              }
              children={
                <Input
                  name="currentBalance"
                  defaultValue={Filters.convertMoneyTextMask(
                    tableData.purchaseValue
                  )}
                  readOnly
                  small
                  marginDefault
                  defaultBorder
                  disableError
                />
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <ContainerInputs
              inputLabel={
                <Styles.InputTitle>{texts.valueToAdd}</Styles.InputTitle>
              }
              children={
                <Input
                  name="value"
                  defaultValue={Filters.convertNumberInputMask(
                    tableData.cashbackValue
                  )}
                  mask={Filters.convertNumberInputMask}
                  onChange={() => handleChange()}
                  textStartIcon={"R$"}
                  small
                  marginDefault
                  defaultBorder
                  disableError
                />
              }
            />
          </Grid>
        </Grid>
      </Styles.ModalContent>
      <Styles.HeaderContainer>
        <Styles.Title $defaultSubTitle>{texts.subTitle2}</Styles.Title>
      </Styles.HeaderContainer>

      <Styles.ModalContent $defaultColor>
        <Styles.InputTitle>{texts.valueTotalBalanceCashback}</Styles.InputTitle>

        <Styles.Group>
          <Styles.Title $defaultMargin>{"R$ "}</Styles.Title>
          <Grid item xs={3} sm={3} md={2} lg={3}>
            <Styles.CashBackFinalValueInfo
              name="currentBalanceCashBack"
              mask={Filters.convertNumberInputMask}
              disableError
              readOnly
              small
            />
          </Grid>
        </Styles.Group>
      </Styles.ModalContent>

      <Styles.FooterModal>
        <Grid item xs={5} sm={3} md={2} lg={2}>
          <Styles.TextFieldButton
            $defaultButtonCancel
            loading={isFetching}
            disabled={isFetching}
            onClick={customModal.close}
          >
            {texts.cancel}
          </Styles.TextFieldButton>
        </Grid>
        <Grid item xs={12} sm={8} md={7} lg={6}>
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
    </FormHolder>
  );
}
export default EditbalanceCashback;
