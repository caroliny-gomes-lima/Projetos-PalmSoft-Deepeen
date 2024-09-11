import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Creators } from "../reduxSagas";
import { CircularProgress } from "@material-ui/core";
import Style from "../styles/PeriodResultStyles";
import Description from "../components/Description";
import { ChartsColors, Texts } from "../../../config";

function PeriodResultNumbers({
  theme,
  periodResultData,
  periodResultIsFetching,
  costsPeriodResultRequest,
}) {
  const mount = React.useCallback(() => {
    costsPeriodResultRequest();
  }, [costsPeriodResultRequest]);

  useEffect(mount, [mount]);
  const texts = Texts["pt-BR"].charts.periodResult;
  const colors = ChartsColors.periodResult;
  return (
    <>
      {periodResultIsFetching ? (
        <CircularProgress />
      ) : (
        <Style.Container>
          <Style.Content>
            <Description color={colors.valueByWeight}>
              {texts.numbers.valueByWeight}
            </Description>
            <Style.Square color={colors.valueByWeight}>
              <Style.SquareContent>
                {periodResultData?.kgPrice}
              </Style.SquareContent>
            </Style.Square>
            <Style.BottomText>
              {texts.numbers.envisaged}: {periodResultData?.envisagedKgPrice}
            </Style.BottomText>
          </Style.Content>
          <Style.Content>
            <Description color={colors.weightByFteByDay}>
              {texts.numbers.weightByFteByDay}
            </Description>
            <Style.Square color={colors.weightByFteByDay}>
              <Style.SquareContent>
                {periodResultData?.kgFtePerDay}
              </Style.SquareContent>
            </Style.Square>
            <Style.BottomText>
              {texts.numbers.envisaged}:{" "}
              {periodResultData?.envisagedKgFtePerDay}
            </Style.BottomText>
          </Style.Content>
        </Style.Container>
      )}
    </>
  );
}

function mapStateToProps(state) {
  const { periodResultData, periodResultIsFetching } = state.costs;
  return {
    periodResultData,
    periodResultIsFetching,
  };
}

function mapDispatchToProps(dispatch) {
  const { costsPeriodResultRequest } = Creators;
  return {
    costsPeriodResultRequest() {
      return dispatch(costsPeriodResultRequest());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeriodResultNumbers);
