import styled from "styled-components";
import FontStyles from "../../../components/styles/fontStyles";
import { Colors } from "../../../config";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../navigation/navigate";

const Container = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "column",
  };
});

const Content = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    cursor: "pointer",
  };
});

const UserInformName = styled.p(() => {
  return {
    ...FontStyles.bold22,
    fontSize: "26px",
    fontWeight: 900,
    margin: "unset",
    color: Colors.black,
  };
});

const UserInformType = styled.p(() => {
  return {
    ...FontStyles.regular12,
    color: Colors.black,
    fontSize: "12px",
    fontWeight: 400,
    margin: "unset",
    padding: "unset",
    textTransform: "capitalize",
  };
});

const UserImg = styled.div(({ theme, $img }) => {
  const { spacing } = theme;
  return {
    borderRadius: "243.848px",
    backgroundImage: `url(${$img})`,
    width: "50px",
    height: "50px",
    zIndex: 2,
    backgroundSize: "cover",
  };
});

function UserInfos({ UserData }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Content onClick={() => navigate(paths.profile)}>
        <UserImg $img={"data:image/png;base64," + UserData?.image} />
        <UserInformName>
          {UserData?.name}
          <UserInformType>{UserData?.role}</UserInformType>
        </UserInformName>
      </Content>
    </Container>
  );
}

export default UserInfos;
