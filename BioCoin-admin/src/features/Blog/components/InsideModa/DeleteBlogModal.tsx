import React from "react";
import Styles from "../../styles/Styles";
import { Colors, Texts } from "../../../../config";
import {
  ButtonContained,
  ButtonOutlined,
  IconsBase64,
} from "../../../../components";
import { api } from "../../../../services";
import { FormFull } from "form-full";
import { hooks } from "../../../../utils";
import { customModal, errorModal } from "../../../../components/modals/utils";
import ResponseError from "../../../../services/helpers/ResponseError";
import alerts from "../../../../utils/Alerts";

function DeleteBlogModal({ item, loadTable }) {
  const texts = Texts["pt-BR"].Main.Blog;
  const { call } = hooks.useRequest();
  const [isErrorInfo, setErrorInfo] = React.useState<boolean>(false);

  async function onSubmit() {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(null, api.DeleteBlog(item), (response) => {
      if (response.ok) {
        const errorResponse = new ResponseError(response);
        alerts.alertSuccess(texts.BlogModalDelete.ResponseTextSuccess);
        customModal.close();
        loadTable();
      } else {
        setErrorInfo(true);
      }
    });
  }

  return (
    <>
      {!isErrorInfo ? (
        <FormFull onSubmit={onSubmit}>
          <Styles.contentModalInfo>
            <Styles.ImageIcon alt="" src={IconsBase64.Alert} />
            <Styles.TextsModal>{texts.BlogModalDelete.title}</Styles.TextsModal>
            <Styles.paddingModal>
              <ButtonContained
                name="submit"
                action="submit"
                customColor={Colors.red}
                fullWidth={false}
                //loading={loading}
              >
                {texts.BlogModalDelete.confirm}
              </ButtonContained>

              <ButtonOutlined fullWidth={false} onClick={customModal.close}>
                {texts.BlogModalDelete.cancel}
              </ButtonOutlined>
            </Styles.paddingModal>
          </Styles.contentModalInfo>
        </FormFull>
      ) : (
        <Styles.contentModalInfo>
          <Styles.ImageIcon alt="" src={IconsBase64.Alert} />
          <Styles.TextsModal>
            {texts.BlogModalInfo.textDelete}
          </Styles.TextsModal>
          <Styles.paddingModal>
          <ButtonContained customColor={Colors.lightBlue} fullWidth={false} onClick={()=>customModal.close()}>
              {texts.BlogModalInfo.cancel}
            </ButtonContained>
          </Styles.paddingModal>
        </Styles.contentModalInfo>
      )}
    </>
  );
}

export default DeleteBlogModal;
