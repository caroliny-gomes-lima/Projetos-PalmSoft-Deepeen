import React from "react";
import Styles from "../styles/Styles";
import { CircularProgress, Grid, makeStyles } from "@material-ui/core";
import {
  ButtonContained,
  ButtonOutlined,
  FontStyles,
  Input,
  InputAutocomplete,
} from "../../../components";
import { FormFull } from "form-full";
import { Colors, Texts } from "../../../config";
import { hooks, masks } from "../../../utils";
import { api } from "../../../services";
import alerts from "../../../utils/Alerts";
import {errorModal } from "../../../components/modals/utils";

const useStyles = makeStyles((theme: any) => {
  const { spacing, breakpoints } = theme;
  return {
    Container: {
      display: "flex",

      justifyContent: "space-between",
      flexDirection: "row",
      padding: spacing(3),
      borderRadius: "23.004px",
      width: "100%",
      height: "auto",
      background: Colors.gray + 70,
      gap: "16px",
      boxShadow:
        "3.6607px 3.6607px 9.93619px 0px rgba(0, 0, 0, 0.08), 0.52296px 0.52296px 3.13774px 0px rgba(0, 0, 0, 0.08), 1.04592px 0px 6.27549px 0px rgba(58, 58, 58, 0.07) inset, -1.04592px 0px 6.27549px 0px rgba(58, 58, 58, 0.07) inset",
      [breakpoints.down("lg")]: {
        flexDirection: "column",
      },
    },
  };
});

function NftSolicitation({
  setChange,
  loadTable,
  editData,
  userList,
  nftList,
}) {
  const classes = useStyles();
  const texts = Texts["pt-BR"].Main.Nft;
  const { loading, call } = hooks.useRequest();

  const [isMounted, setMount] = React.useState<boolean>(false);
  const [imageSrc, setImageSrc] = React.useState<any>(null);
  const [selectedNft, setSelectedNft] = React.useState<any>(editData?.nft);

  const filterOptionsDefault = (options, { inputValue }) => {
    const input = inputValue?.replace(/\D/g, "");
    return options.filter((option) => {
      const optionValue = option?.label?.replace(/\D/g, "");
      return optionValue.includes(input);
    });
  };

  const OnSubmit = (data: any) => {
    if (editData) {
      errorModal.setInfos("Carregando", ["aguarde..."], null, null);
      call(
        null,
        api.postSwapRedeemNft({ nftRedeemId: editData?.id, nftId: data?.nft }),
        async (response) => {
          if (response.ok) {
            loadTable();
            setChange(0);
          } else {
            alerts.alertError(response.message);
          }
        }
      );
    } else {
      call(
        null,
        api.postRedeemNft({ userId: data.user, nftId: data.nft }),
        async (response) => {
          if (response.ok) {
            loadTable();
            setChange(0);
          } else {
            alerts.alertError(response.message);
          }
        }
      );
    }
  };
  const MountImage = React.useCallback(() => {
    call(
      null,
      api.NftsImage(editData?.nft?.id, editData?.nft?.imageId),
      async (response) => {
        if (response.ok) {
          setImageSrc(response.data);
        }
      }
    );
  }, []);
  React.useEffect(() => {
    if (!isMounted && editData !== null && editData !== undefined) {
      MountImage();
    }
  }, [MountImage, isMounted]);

  React.useEffect(() => {
    if (selectedNft) {
      call(
        null,
        api.NftsImage(selectedNft?.id, selectedNft?.imageId),
        async (response) => {
          if (response.ok) {
            setImageSrc(response.data);
          }
        }
      );
    }
  }, [selectedNft]);

  return (
    <>
      <FormFull onSubmit={OnSubmit}>
        <div className={classes.Container}>
          <Styles.NFTImage>
            <Styles.Label>{texts.media}</Styles.Label>
            {loading ? (
              <Styles.NFTImageContainer imageSrc={null}>
                <CircularProgress />
              </Styles.NFTImageContainer>
            ) : (
              <Styles.NFTImageContainer
                imageSrc={imageSrc}
              ></Styles.NFTImageContainer>
            )}
          </Styles.NFTImage>

          <Grid alignContent="flex-start" container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <InputAutocomplete
                required={texts.requiredMessage[0]}
                onChange={(data) => {
                  let newNFT = nftList.find((item) => {
                    if (item.id === data) {
                      return item;
                    }
                  });

                  if (newNFT) {
                    setSelectedNft(newNFT);
                  }
                }}
                labelStyle={{
                  ...FontStyles.medium14,
                  margin: 0,
                  marginBottom: "8px",
                }}
                inputStyle={{
                  backgroundColor: "rgba(27,30,34,0.30)",
                }}
                defaultValue={
                  selectedNft
                    ? {
                        value: selectedNft?.id,
                        label: selectedNft?.name,
                      }
                    : null
                }
                options={
                  nftList
                    ? nftList?.map((item) => {
                        return { value: item.id, label: item.name };
                      })
                    : []
                }
                name="nft"
                label={texts.nftId}
              />
            </Grid>
            {editData ? (
              loading ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                  }}
                >
                  <CircularProgress color="secondary" />
                </div>
              ) : (
                <>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Input
                      readOnly
                      name="collectionNft"
                      defaultValue={selectedNft?.collection}
                      label={texts.nameColectionInput}
                      required={texts.requiredMessage[0]}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Input
                      readOnly
                      name="nameNft"
                      defaultValue={selectedNft?.name}
                      label={texts.nameNftInput}
                      required={texts.requiredMessage[0]}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Input
                      readOnly
                      name="numberNft"
                      defaultValue={selectedNft?.number}
                      label={texts.numberNftInput}
                      required={texts.requiredMessage[0]}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Input
                      readOnly
                      name="editionNft"
                      defaultValue={selectedNft?.edition}
                      label={texts.numderEditionkInput}
                      required={texts.requiredMessage[0]}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Input
                      readOnly
                      multiline
                      name="contentNft"
                      defaultValue={selectedNft?.content}
                      label={texts.descriptionInput}
                      required={texts.requiredMessage[0]}
                    />
                  </Grid>
                </>
              )
            ) : (
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <InputAutocomplete
                  customFilter={filterOptionsDefault}
                  labelStyle={{
                    ...FontStyles.medium14,
                    margin: 0,
                    marginBottom: "8px",
                  }}
                  inputStyle={{
                    backgroundColor: "rgba(27,30,34,0.30)",
                  }}
                  options={
                    userList
                      ? userList?.map((item) => {
                          return {
                            value: item.id,
                            label: masks.CPF(item.cpf) + " - " + item.fullName,
                          };
                        })
                      : []
                  }
                  name="user"
                  label={texts.nameNftNameInput}
                  required={texts.requiredMessage[0]}
                />
              </Grid>
            )}
          </Grid>
        </div>
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}
        >
          <ButtonOutlined
            fullWidth={false}
            customColor={Colors.gray}
            onClick={() => setChange(0)}
          >
            {texts.cancelButton}
          </ButtonOutlined>
          <ButtonContained
            name="submit"
            action="submit"
            loading={loading}
            disabled={loading}
            customColor={Colors.lightBlue}
            fullWidth={false}
          >
            {editData ? texts.confirmButtonSoli[1] : texts.confirmButtonSoli[0]}
          </ButtonContained>
        </div>
      </FormFull>
    </>
  );
}

export default NftSolicitation;
