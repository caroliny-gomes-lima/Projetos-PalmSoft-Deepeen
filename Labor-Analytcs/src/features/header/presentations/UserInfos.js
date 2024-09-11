import React from "react";
import { connect } from "react-redux";
import { UserInfosStyles as Styles } from "../styles";
import { Skeleton } from "@material-ui/lab";

function UserInfosPresentation(props) {
  return (
    <>
      <Styles.AvatarContainer>
        {props.isFetching ? (
          <Skeleton width={50} height={50} variant="circle"></Skeleton>
        ) : (
          <Styles.AvatarIcon>{props.userInfos?.avatarName}</Styles.AvatarIcon>
        )}
      </Styles.AvatarContainer>
      <Styles.PersonInfo>
        <Styles.Name loading={props.isFetching} loadingSizes={[250, 24]}>
          {props.userInfos?.name
            ? props.userInfos?.name
            : props.userInfos?.email}
        </Styles.Name>
        <Styles.Role loading={props.isFetching} loadingSizes={[100, 24]}>
          {props.userInfos?.role}
        </Styles.Role>
        <Styles.Role>
          {localStorage.getItem("cd") ? localStorage.getItem("cd") : ""}
        </Styles.Role>
      </Styles.PersonInfo>
    </>
  );
}

function mapStateToProps({ global }) {
  const { userInfos, isFetchingUserInfos: isFetching } = global;
  return { userInfos, isFetching };
}

export default connect(mapStateToProps)(React.memo(UserInfosPresentation));
