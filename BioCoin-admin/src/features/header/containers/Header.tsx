import Styles from "../styles/Styles";
import { DefaultLogo } from "../../../components";
import { Spacing } from "../../../config";
import UserInfos from "../components/UserInfos";
import useUser from "../../../utils/useUser";

type CustomHeaderProps = {
  openMenu: () => void;
};

function Header({ openMenu }: CustomHeaderProps) {
  const { userData } = useUser();
  return (
    <Styles.Container id="header-menu">
      <Styles.Content>
        <Styles.AreaButtomIcon>
          <Styles.ButtonIcon onClick={openMenu}>
            <Styles.IconMenu />
          </Styles.ButtonIcon>
        </Styles.AreaButtomIcon>
        <DefaultLogo maxWidth={Spacing(5)} />
      </Styles.Content>
      {/* 
      <FormFull
        onSubmit={(a) => console.log("ENCONTRAR", a)}
      >
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ marginTop: "20px" }}>
          <InputAutocomplete
            typeSearch={true}
            name="search"
            options={[{ value: 1, label: "Leandro Bitencourt" }]}
          />
        </Grid>
      </FormFull> */}
      <Styles.UserArea>
        <UserInfos UserData={userData} />
      </Styles.UserArea>
    </Styles.Container>
  );
}

export default Header;
