import React from "react";
import Styles from "../../styles/Styles";
import { Colors, Spacing, Texts, fonts } from "../../../../config";
import { CircularProgress, makeStyles } from "@material-ui/core";
import { ButtonContained, ButtonOutlined } from "../../../../components";
import { Check, Close } from "@material-ui/icons";
import { hooks } from "../../../../utils";
import { api } from "../../../../services";
import { customModal } from "../../../../components/modals/utils";

const useStyles = makeStyles((theme: any) => {
  const { spacing } = theme;
  return {
    Container: {
      display: "flex",
      flexDirection: "column",
      margin: spacing(2),
      borderRadius: "23.004px",
      width: "auto",
      height: "auto",
      background: Colors.darkGray,
    },
    ContentData: {
      display: "flex",
      flexDirection: "column",
      padding: 18,
      borderBottom: "0.604px solid #D1D1D1",
    },
    TitleData: {
      margin: 0,
      color: "white",
      fontFamily: fonts.bold,
      fontSize: spacing(2.05),
    },
    TextData: {
      color: "white",
      fontFamily: fonts.regular,
      fontSize: spacing(2.05),
      display: "flex",
      flexWrap: "wrap",
    },
  };
});

function ResquestNftModal({ item, readOnly, acceptSubmit, denySubmit }) {
  const classes = useStyles();
  const texts = Texts["pt-BR"].Main.Nft.requestNftModal;
  const { loading, call } = hooks.useRequest();
  const [selfieImage, setSelfieImage] = React.useState<any>(null);
  const [isMounted, setMount] = React.useState<boolean>(false);

  const NoDataImage = () => {
    return (
      <Styles.NoDataContainer>
        <Styles.NoDataText>{"Sem Dados"}</Styles.NoDataText>
      </Styles.NoDataContainer>
    );
  };

  const MountImage = React.useCallback(() => {
    call(
      null,
      api.NftsRequestImage(item.id, item.selfieImageId),
      async (response) => {
        if (response.ok) {
          setSelfieImage("data:image/png;base64," + response.data);
        }
      }
    );
  }, []);

  React.useEffect(() => {
    if (!isMounted) {
      MountImage();
    }
  }, [MountImage, isMounted]);

  return (
    <>
      <div className={classes.Container}>
        <div className={classes.ContentData}>
          <div className={classes.TitleData}>{texts.name}</div>
          <div className={classes.TextData}>{item.user.name}</div>
        </div>
        <div className={classes.ContentData}>
          <div className={classes.TextData}>{texts.digitalWallet}</div>
          <div className={classes.TextData}>{item.digitalWallet}</div>
        </div>
        <div style={{ padding: Spacing(2) }}>
          <Styles.ImageBox>
            {loading ? (
              <CircularProgress
                size={90}
                style={{
                  color: "white",
                  alignSelf: "center",
                  justifyContent: "center",
                  marginBlock: Spacing(3),
                }}
              />
            ) : selfieImage ? (
              <img
                src={selfieImage}
                style={{
                  height: "auto",
                  width: "100%",
                  borderRadius: "10px",
                  border: "solid 2px",
                  color: Colors.white,
                }}
                alt=""
              />
            ) : selfieImage === null ? (
              NoDataImage()
            ) : null}
          </Styles.ImageBox>
        </div>
      </div>

      <Styles.PaddingModal>
        {!readOnly && (
          <>
            <ButtonContained
              startIcon={<Check />}
              customColor={Colors.green}
              fullWidth={false}
              onClick={acceptSubmit}
            >
              {texts.confirmButton}
            </ButtonContained>

            <ButtonContained
              startIcon={<Close />}
              customColor={Colors.red}
              fullWidth={false}
              onClick={denySubmit}
            >
              {texts.cancelButton}
            </ButtonContained>
          </>
        )}

        <ButtonOutlined fullWidth={false} onClick={() => customModal.close()}>
          {texts.closeButton}
        </ButtonOutlined>
      </Styles.PaddingModal>
    </>
  );
}

export default ResquestNftModal;
