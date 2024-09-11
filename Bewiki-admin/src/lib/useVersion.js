import React from "react";

function readTxtFile(callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", process.env.PUBLIC_URL + "/version.txt", false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (Number(rawFile.status) === 200 || Number(rawFile.status) === 0) {
        var allText = rawFile.responseText;
        callback(allText);
      }
    }
  };
  rawFile.send(null);
}

export default function useVersion() {
  const [version, setVersion] = React.useState("");
  const didMount = React.useCallback(() => {
    readTxtFile(setVersion);
  }, [setVersion]);
  React.useEffect(didMount, [didMount]);

  return version;
}
