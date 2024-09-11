import { CircularProgress, Grid } from "@material-ui/core";
import { Spacing, Texts, fonts } from "../../../config";
import Styles from "../styles/Styles";
import { customModal } from "../../../components/modals/utils";
import { SessionStorage, hooks, masks } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../navigation/navigate";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { FormFull } from "form-full";
import { IconsBase64, Input, UploadImage } from "../../../components";
import useUser from "../../../utils/useUser";
import { StorageContext } from "../../../contexts/StorageContext";
import { useContext } from "react";

function Container() {
  const { setIsLogged } = useContext<any>(StorageContext);
  const texts = Texts["pt-BR"].settings.profile;
  const navigate = useNavigate();
  const { loading } = hooks.useRequest();
  const { userData } = useUser();

  function handleLogout() {
    const texts = Texts["pt-BR"].login.ModalLogout;
    customModal.setInfos(
      texts.title,
      [""],
      {
        label: texts.Confirm,
        onClick: () => {
          customModal.close();
          setIsLogged(false);
          SessionStorage.removeItem("token");
          SessionStorage.removeItem("data");
          navigate(paths.login);
        },
      },
      {
        label: texts.cancel,
        onClick: () => {
          customModal.close();
        },
      },
      null,
      null,
      null
    );
  }

  const formatDate = (date: string) => {
    const str = date?.split("-");
    let finalDate = `${str[2]}/${str[1]}/${str[0]}`;
    return finalDate;
  };

  return (
    <>
      <Styles.Container>
        <Styles.Title>{texts.title}</Styles.Title>
        <div style={{ display: "flex" }}>
          <Styles.AvatarContainer>
            <div style={{ position: "relative" }}>
              <Styles.UserImg
                $img={"data:image/png;base64," + userData?.image}
              />
              <UploadImage />
            </div>
            <Styles.Text>{userData?.name}</Styles.Text>
            <Styles.LogoutContainer onClick={handleLogout}>
              <Styles.StyledIcon />
              <Styles.LogoutText>{texts.logoutButton}</Styles.LogoutText>
            </Styles.LogoutContainer>
          </Styles.AvatarContainer>

          <Styles.InputContainer>
            <Styles.InputCard>
              <Styles.IconEditContainer>
                <div
                  style={{
                    width: "auto",
                    height: "auto",
                    padding: 5,
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(paths.editProfile)}
                >
                  <Styles.IconImgBase64 src={IconsBase64.pen}/>
                </div>
              </Styles.IconEditContainer>
              {loading ? (
                <CircularProgress />
              ) : userData ? (
                <FormFull onSubmit={() => {}}>
                  <Grid container spacing={3} direction="row">
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                      <Input
                        name="fullname"
                        label={texts.fullname}
                        defaultValue={userData?.name}
                        readOnly
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                      <Input
                        name="email"
                        label={texts.email}
                        defaultValue={userData?.email}
                        readOnly
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                      <Input
                        name="password"
                        label={texts.password}
                        defaultValue="******"
                        readOnly
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                      <Input
                        name="phone"
                        label={texts.phone}
                        defaultValue={masks.inputMaskTELWithDDD(
                          userData?.phone
                        )}
                        readOnly
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                      <Input
                        name="cpf"
                        label={texts.cpf}
                        defaultValue={masks.CPF(userData?.cpf)}
                        readOnly
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                      <Input
                        name="birthDate"
                        label={texts.birthDate}
                        defaultValue={formatDate(userData?.birthDate)}
                        readOnly
                      />
                    </Grid>
                  </Grid>
                </FormFull>
              ) : (
                <p
                  style={{
                    margin: 0,
                    fontFamily: fonts.semibold,
                    fontSize: Spacing(3),
                    textAlign: "center",
                  }}
                >
                  Dados não encontrados
                </p>
              )}
            </Styles.InputCard>
          </Styles.InputContainer>
        </div>
      </Styles.Container>
    </>
  );
}

export default Container;
