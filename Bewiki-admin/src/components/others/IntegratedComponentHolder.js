import React from "react";
import styled from "styled-components";
import { MediaQueries } from "../../config";
import EmptyContent from "./EmptyListContent";
import ReloadContent from "./ReloadContent";

const Container = styled.div(
  ({ $direction = "column", $rowToColOnMedia = "sm" }) => ({
    display: "flex",
    flexDirection: $direction,
    flexWrap: "wrap",
    width: "100%",
    flex: 1,
    overflow: "auto",
    [MediaQueries[`${$rowToColOnMedia}Down`]]: {
      flexDirection: "column",
    },
  })
);

function IntegratedComponentHolder({
  children,
  showReload,
  reloadMessage,
  reloadLabel,
  reloadCallback,
  direction,
  rowToColOnMedia,
  showEmpty,
  emptyMessage,
}) {
  return showReload ? (
    <Container $direction={direction} $rowToColOnMedia={rowToColOnMedia}>
      <ReloadContent
        message={reloadMessage}
        reloadCallback={reloadCallback}
        buttonLabel={reloadLabel}
      />
    </Container>
  ) : showEmpty ? (
    <EmptyContent message={emptyMessage} />
  ) : (
    <Container $direction={direction}>{children}</Container>
  );
}

export default React.memo(IntegratedComponentHolder);
