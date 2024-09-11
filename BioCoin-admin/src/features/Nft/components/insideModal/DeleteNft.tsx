import React from "react";
import { Colors, Texts } from "../../../../config";
import {
  ButtonContained,
  ButtonOutlined,
  IconsBase64,
} from "../../../../components";
import { FormFull } from "form-full";
import { customModal, errorModal } from "../../../../components/modals/utils";
import { hooks } from "../../../../utils";
import { api } from "../../../../services";
import Styles from "../../styles/Styles";
import alerts from "../../../../utils/Alerts";
import ResponseError from "../../../../services/helpers/ResponseError";

function DeleteNft({ item, loadTable }) {
  const texts = Texts["pt-BR"].Main.Nft;
  const [isErrorInfo, setErrorInfo] = React.useState<boolean>(false);
  const { call } = hooks.useRequest();

  async function onSubmit() {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(null, api.DeleteNft(item), (response) => {
      if (response.ok) {
        alerts.alertSuccess(texts.deleteModal.ResponseTextSuccess);
        customModal.close();
        loadTable();
      } else {
        const errorResponse = new ResponseError(response);
        alerts.alertError(errorResponse.message);
        setErrorInfo(true);
      }
    });
  }

  return (
    <>
      {!isErrorInfo ? (
        <FormFull onSubmit={onSubmit}>
          <Styles.contentModalDelete>
            <Styles.ImageIcon alt="" src={IconsBase64.Alert} />
            <Styles.TextsModal>{texts.deleteModal.title}</Styles.TextsModal>
            <Styles.paddingModal>
              <ButtonContained
                name="submit"
                action="submit"
                customColor={Colors.red}
                fullWidth={false}
                //loading={loading}
              >
                {texts.deleteModal.confirmButton}
              </ButtonContained>

              <ButtonOutlined fullWidth={false} onClick={customModal.close}>
                {texts.deleteModal.cancelButton}
              </ButtonOutlined>
            </Styles.paddingModal>
          </Styles.contentModalDelete>
        </FormFull>
      ) : (
        <Styles.contentModalDelete>
          <Styles.ImageIcon alt="" src={IconsBase64.Alert} />
          <Styles.TextsModal>{texts.infoModal.titleDelete}</Styles.TextsModal>
          <Styles.paddingModal>
            <ButtonOutlined fullWidth={false} onClick={customModal.close}>
              {texts.infoModal.cancelButton}
            </ButtonOutlined>
          </Styles.paddingModal>
        </Styles.contentModalDelete>
      )}
    </>
  );
}

export default DeleteNft;
