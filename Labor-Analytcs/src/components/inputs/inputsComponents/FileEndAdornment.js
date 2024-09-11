import React from "react";
import { Spacing } from "../../../config";
import ButtonContained from "../../buttons/ButtonContained";
import { GetApp, Publish } from "@material-ui/icons";

function FileEndAdornmentComponent({
  fileInputRef,
  downloadButtonLabel,
  uploadButtonLabel,
  downloadHref,
  openOnNewTab,
  hideButtonLabel,
}) {
  return (
    <div style={{ margin: Spacing(1, 0) }}>
      {downloadButtonLabel ? (
        <ButtonContained
          target={openOnNewTab ? "_blank" : null}
          onClick={(e) => {
            e.stopPropagation();
            window.open(downloadHref);
          }}
          style={{
            marginBottom: Spacing(1),
            whiteSpace: "nowrap",
          }}
        >
          <GetApp
            style={{
              marginRight: hideButtonLabel ? 0 : Spacing(1),
            }}
          />
          {hideButtonLabel ? "" : downloadButtonLabel}
        </ButtonContained>
      ) : null}
      <ButtonContained
        type="file"
        onClick={(e) => {
          e.stopPropagation();
          fileInputRef.current.click();
        }}
        style={{
          whiteSpace: "nowrap",
        }}
      >
        <Publish style={{ marginRight: hideButtonLabel ? 0 : Spacing(1) }} />
        {hideButtonLabel ? "" : uploadButtonLabel}
      </ButtonContained>
    </div>
  );
}

export default React.memo(FileEndAdornmentComponent);
