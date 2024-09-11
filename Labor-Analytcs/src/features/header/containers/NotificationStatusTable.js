import React from "react";
import { connect } from "react-redux";
import { Table, Title } from "../../../components";
import { Texts } from "../../../config";
import { Creators } from "../../productivity/reduxSagas";
import { CircularProgress, IconButton } from "@material-ui/core";
import { StatusFiltersStyle as Styles } from "../styles";
import { StatusFilterHandler } from "../utils";

function StatusNotificationTable({ statusProcessFiltersData, isFetchingFilter }) {
    const title = Texts["pt-BR"].header.StatusFilters;
    const statusfiltercontext = React.useContext(StatusFilterHandler.Context);
    const [cancelToken, setCancelToken] = React.useState(null);

    const cancelStatusFilters = () => {
        if (cancelToken !== null) {
            cancelToken.cancel();
            setCancelToken(null);
        } else {
            statusfiltercontext.hideStatusFilter();
        }
    }
    return (
        <>
            <Styles.HeaderContainer>
                <Title>{title.Title}</Title>
                <IconButton onClick={() => { cancelStatusFilters(); }}>
                    <Styles.Close />
                </IconButton>
            </Styles.HeaderContainer>
            {statusProcessFiltersData ? (
                <Table
                    id="statusFiltersNotification"
                    headers={title.StatusTitleTable}
                    data={statusProcessFiltersData}
                    placeholderSize={15}
                    columnSize={6}
                    loading={isFetchingFilter}
                    renderItemColumns={(item) => [
                        item.productivity,
                        item.vision,
                        item.inicialDate,
                        item.finalDate,
                        item.activityProcess,
                        item.dedicatedTeam,
                        item.idOp,
                        <CircularProgress
                            color="inherit"
                            size={20} />
                    ]}
                />
            ) : null}
        </>
    )
}
function mapStateToProps(state) {
    const { statusProcessFiltersData, isFetchingFilter } = state.productivity;
    return {
        statusProcessFiltersData,
        isFetchingFilter,
    };
}
function mapDispatchToProps(dispatch) {
    const { statusProcessFiltersRequest } = Creators;
    return {
        statusProcessFiltersRequest: function () {
            return dispatch(statusProcessFiltersRequest());
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusNotificationTable);